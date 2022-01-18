import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-message-pote',
  templateUrl: './message-pote.component.html',
  styleUrls: ['./message-pote.component.css']
})
export class MessagePoteComponent implements OnInit {
  user: any;
  amitie: any;
  messages: any;
  constructor(private dialogRef: MatDialogRef<MessagePoteComponent>, private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect();
    this.amitie = this.auth.getAmitie();
    this.getMessagesOfAmitie(this.amitie.id);
  }

  closeMsg() {
    this.dialogRef.close();
    console.log('bouton fonctionne');
  }

  getMessagesOfAmitie(value: any) {
    this.http.get('http://localhost:8087/message/amitie/' + value).subscribe({
      next: (data) => { this.messages = data; console.log(data) },
      error: (err) => { console.log(err) }
    })
  }

  expediteur(msg: any) {
    if(this.user.id==msg.envoyeur.id) {
      // console.log('this.user.id : ', this.user.id);
      // console.log('msg.envoyeur : ', msg.envoyeur.id);
      return true;
    } else {
      // console.log('this.user.id : ', this.user.id);
      // console.log('msg.envoyeur : ', msg.envoyeur.id)
      return false;
    }
  }

  envoyerMsg(msg: any) {
    let m = { contenu: msg.contenu, envoyeur: this.user, amitie: this.amitie};
    // console.log('objet message : ', m);
    this.http.post('http://localhost:8087/message', m).subscribe({
      next:(data)=> {console.log(data); this.dialogRef.close(); },
      error: (err)=> {console.log(err)}
    })
  }

  getLoginAmi() {
     // console.log('getLoginAmi, user : ', this.user);
     // console.log('getLoginAmi, amitie.envoyeur : ', this.amitie.envoyeur);
    if(this.user.id==this.amitie.envoyeur.id) {
      return this.amitie.receveur.login;
    } else {
      return this.amitie.envoyeur.login;
    }
  }

}

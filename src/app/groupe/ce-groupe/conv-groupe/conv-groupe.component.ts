import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-conv-groupe',
  templateUrl: './conv-groupe.component.html',
  styleUrls: ['./conv-groupe.component.css']
})
export class ConvGroupeComponent implements OnInit {
  user: any;
  groupe: any;
  conv: any;
  constructor(private dialogRef: MatDialogRef<ConvGroupeComponent>, private auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect();
    this.groupe = this.auth.ceGgroupe;
    this.getConversationOfGroupe(this.groupe.id);
  }

  closeMsg() {
    this.dialogRef.close();
  }

  getNomGroupe(){
    return this.groupe.nom
  }

  getConversationOfGroupe(value: any) {
    this.http.get('http://localhost:8087/conversation/groupe/' + value).subscribe({
      next: (data) => { this.conv = data; console.log(data) },
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

  getExpediteurName(msg: any) {
    return msg.envoyeur.nom;
  }

  envoyerMsg(msg: any) {
    let c = { contenu: msg.contenu, envoyeur: this.user, groupe: this.groupe};
    this.http.post('http://localhost:8087/conversation', c).subscribe({
      next:(data)=> {console.log(data); this.ngOnInit(); },
      error: (err)=> {console.log(err)}
    })
  }

}

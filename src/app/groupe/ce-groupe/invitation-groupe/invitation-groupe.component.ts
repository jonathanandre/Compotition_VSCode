import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-invitation-groupe',
  templateUrl: './invitation-groupe.component.html',
  styleUrls: ['./invitation-groupe.component.css']
})
export class InvitationGroupeComponent implements OnInit {

  url: any
  groupe: any
  invitMember: any
  membre: any
  newAppartGroupe: any
  date: any

  constructor(private http: HttpClient ,private dialogRef: MatDialogRef<InvitationGroupeComponent>, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.getGroupe()
    this.invitMember = {login : ''}
  }

  invitation(newMember: any){

    this.url = 'http://localhost:8087/utilisateur/amitie/' + newMember.login
    this.http.get(this.url).subscribe({
      next : (data)=> {this.membre = data; console.log('reconnaissance de l utilisateur effectué', data); this.sendinvit(this.membre); this.dialogRef.close();},
      error : (err)=> {console.log(err)}
    })
  }

  sendinvit(invite: any){
    this.date = new Date()

    this.newAppartGroupe = {utilisateur: invite, groupe: this.auth.getGroupe(), dateInvitationRecue: this.date}

    console.log('test', this.newAppartGroupe, invite)
    this.http.post('http://localhost:8087/groupes/ajout-personnes', this.newAppartGroupe).subscribe({
      next : (data)=> {console.log('ajout de l appartenance groupe', data); this.dialogRef.close();},
      error : (err)=> {console.log(err)}
    })
  }

}

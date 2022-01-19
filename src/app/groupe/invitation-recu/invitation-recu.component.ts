import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-invitation-recu',
  templateUrl: './invitation-recu.component.html',
  styleUrls: ['./invitation-recu.component.css']
})
export class InvitationRecuComponent implements OnInit {

  invitRecu: any
  nbrInvitRecu: any = 0
  invitDecline: any
  url: any
  date: any

  constructor(private auth : AuthService, private http : HttpClient, private dialogRef : MatDialogRef<InvitationRecuComponent>) { }

  ngOnInit(): void {
    this.getMesInvit()
    this.getMesRefus()
  }

  getMesInvit(){
    this.url = 'http://localhost:8087/utilisateur/groupe/inviatations-en-cours/' + this.auth.getUserConnect().login
    this.http.get(this.url).subscribe({
    next : (data) => { this.invitRecu = data; this.nbrInvitRecu = this.invitRecu.length },
    error : (err) => { console.log(err) }
    });
  }
  
  getMesRefus(){
    this.url = 'http://localhost:8087/utilisateur/groupe/inviatations-refuse/' + this.auth.getUserConnect().login
    this.http.get(this.url).subscribe({
    next : (data) => { this.invitDecline = data },
    error : (err) => { console.log(err) }
    });
  }

  acceptInvit(invitAccepte: any){
    this.date = new Date()
    invitAccepte.invitationGroupeAccepte = true
    invitAccepte.dateInvitationReponse = this.date
    this.http.put('http://localhost:8087/groupes/modification-personnes', invitAccepte).subscribe({
    next : (data) => { console.log('groupe rejoint'); this.dialogRef.close()},
    error : (err) => { console.log(err) }
    });
  }

  declineInvit(invitRefuse: any){
    this.date = new Date()
    invitRefuse.invitationGroupeAccepte = false
    invitRefuse.dateInvitationReponse = this.date
    this.http.put('http://localhost:8087/groupes/modification-personnes', invitRefuse).subscribe({
    next : (data) => { console.log('groupe refus'); this.dialogRef.close()},
    error : (err) => { console.log(err) }
    });
  }

}

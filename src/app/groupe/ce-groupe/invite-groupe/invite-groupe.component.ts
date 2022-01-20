import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-invite-groupe',
  templateUrl: './invite-groupe.component.html',
  styleUrls: ['./invite-groupe.component.css']
})
export class InviteGroupeComponent implements OnInit {

  url: any
  invitEnvoye: any
  nbrInvitEnvoye: any = 0

  constructor(private http : HttpClient, private auth: AuthService, private dialogRef: MatDialogRef<InviteGroupeComponent>) { }

  ngOnInit(): void {
    this.getInvitationEnvoye()
  }

  getInvitationEnvoye(){
    this.url = 'http://localhost:8087/groupe/' + this.auth.getGroupe().id + '/inviatations-en-cours'
    this.http.get(this.url).subscribe({
    next : (data) => { this.invitEnvoye = data; this.nbrInvitEnvoye = this.invitEnvoye.length },
    error : (err) => { console.log(err) }
    });
  }

  annuleInvit(invitAnnulee: any){
    this.url = 'http://localhost:8087/groupes/supprimer-personnes/' + invitAnnulee.groupe.id + '/' + invitAnnulee.utilisateur.login
    this.http.delete(this.url).subscribe({
    next : (data) => { console.log('groupe refus'); this.dialogRef.close()},
    error : (err) => { console.log(err) }
    });
  }

}

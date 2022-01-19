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

  groupe: any
  invitMember: any
  constructor(private http: HttpClient ,private dialogRef: MatDialogRef<InvitationGroupeComponent>, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.ceGgroupe
    this.invitMember = {login : ''}
  }

  invitation(newMember: any){
    let invitMember = {login : newMember.login}
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CreerGroupeComponent } from './creer-groupe/creer-groupe.component';
import { InvitationRecuComponent } from './invitation-recu/invitation-recu.component';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  groupes: any
  url: any
  invitRecu: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.getMesGroupes();
    this.getMesInvit();
  }

  sendGroupe(groupeClicked: any){
    this.auth.setGroupe(groupeClicked)
  }

  getMesGroupes(){
    this.url = 'http://localhost:8087/groupes/mes-groupes/' + this.auth.getUserConnect().login
    this.http.get(this.url).subscribe({
    next : (data) => { this.groupes = data },
    error : (err) => { console.log(err) }
    });
  }

  getMesInvit(){
    this.url = 'http://localhost:8087/utilisateur/groupe/inviatations-en-cours/' + this.auth.getUserConnect().login
    this.http.get(this.url).subscribe({
    next : (data) => { this.invitRecu = data },
    error : (err) => { console.log(err) }
    });
  }

  callNouveauGroupe(){
    const myDialog = this.dialog.open(CreerGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  callInvitationRecu(){
    const myDialog = this.dialog.open(InvitationRecuComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }

}

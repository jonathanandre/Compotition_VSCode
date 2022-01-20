import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConvGroupeComponent } from './conv-groupe/conv-groupe.component';
import { CreerCompetitionComponent } from './creer-competition/creer-competition.component';
import { InvitationGroupeComponent } from './invitation-groupe/invitation-groupe.component';
import { InviteGroupeComponent } from './invite-groupe/invite-groupe.component';
import { ModifierGroupeComponent } from './modifier-groupe/modifier-groupe.component';
import { SupprimerMembreComponent } from './supprimer-membre/supprimer-membre.component';

@Component({
  selector: 'app-ce-groupe',
  templateUrl: './ce-groupe.component.html',
  styleUrls: ['./ce-groupe.component.css']
})
export class CeGroupeComponent implements OnInit {

  appartGroupe: any
  classementGroupe: any
  url: any
  groupe: any
  competitions: any
  user: any
  participation: any
  date: any
  msg: any
  msgtrue: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.getGroupe()
    this.getAllCompetDuGroupe();
    this.getMembres();
    this.getClassement();
    this.user = this.auth.getUserConnect();
  }

  modifierGroupe(){
    const myDialog = this.dialog.open(ModifierGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }
  
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }
  
  getMembres(){
    this.url = 'http://localhost:8087/groupes/classement/' + this.auth.getGroupe().id
    this.http.get(this.url).subscribe({
    next : (data) => { this.appartGroupe = data },
    error : (err) => { console.log(err) }
    });
  }
  
  getClassement(){
    this.url = 'http://localhost:8087/groupe/classement-decroissant/' + this.auth.getGroupe().id
    this.http.get(this.url).subscribe({
    next : (data) => { this.classementGroupe = data },
    error : (err) => { console.log(err) }
    });
  }

  removeMember(membre: any){
    this.auth.setMembre(membre)
    const myDialog = this.dialog.open(SupprimerMembreComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }

  invitationGroupe(){
    const myDialog = this.dialog.open(InvitationGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }

  inviteGroupe(){
    const myDialog = this.dialog.open(InviteGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }

  nouvelleCompet(){
    const myDialog = this.dialog.open(CreerCompetitionComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }

  getAllCompetDuGroupe() {
    this.http.get('http://localhost:8087/groupe/competition/informations/' + this.groupe.id).subscribe({
      next: (data)=> {console.log('competitions du groupe', data); this.competitions = data},
      error: (err)=> {console.log(err)}
    });
  }

  rejoindreCompet(c: any) {
    let participe = {utilisateur: this.user, competition: c};
    this.http.post('http://localhost:8087/competition/participation/ajouter', participe).subscribe({
      next: (data)=> {console.log('competition rejoint', data); this.reloadComponent(); },
      error: (err)=> {console.log(err)}
    })
  }

  participe(c: any) {
    //  this.http.get('http://localhost:8087/competition/' + c.id + '/participation/utilisateur/boolean/' + this.user.login).subscribe({
    //    next: (data)=> {console.log("participe ou participe pas : ",data); this.participation = data ;},
    //    error: (err)=> {console.log(err)}
    //  })
    console.log("participation", this.participation);
    if (this.participation==false) {
      return false;
    } else {
      return true;
    }
  }

  quitterCompet(c: any) {
    this.http.delete('http://localhost:8087/competition/' + c.id + '/participation/supprimer/' + this.user.login).subscribe({
      next: (data)=> {console.log('participation a la compet supprimee', data); this.reloadComponent(); },
      error: (err)=> {console.log(err)}
    })
  }

  callConvGroupe() {
    const myDialog = this.dialog.open(ConvGroupeComponent);
  }

  isOrganisateur(c: any) {
    if (this.user.id==c.organisateur.id) {
      return true
    } else {
      return false
    }
  }

  supprimerCompet(c: any) {
    //this.date = new Date();
    // console.log('test date d aujourdhui : ', this.date);
    console.log('test date d aujourdhui en ms : ', Date.now())
    console.log('test dateDebut en ms : ', new Date(c.dateDebut).getTime())
    if(Date.now()<new Date(c.dateDebut).getTime()){
      this.http.delete('http://localhost:8087/competition/supprimer/' + c.id).subscribe({
        next: (data)=> {console.log('competition supprimee', data); this.reloadComponent(); },
        error: (err)=> {console.log(err)}
      })
    } else {
      this.msg = "suppression impossible après le début de la compétition";
      this.msgtrue = c.id;
    }
  }

}

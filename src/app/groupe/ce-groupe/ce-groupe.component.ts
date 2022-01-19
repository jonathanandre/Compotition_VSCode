import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConvGroupeComponent } from './conv-groupe/conv-groupe.component';
import { InvitationGroupeComponent } from './invitation-groupe/invitation-groupe.component';
import { ModifierGroupeComponent } from './modifier-groupe/modifier-groupe.component';
import { SupprimerMembreComponent } from './supprimer-membre/supprimer-membre.component';

@Component({
  selector: 'app-ce-groupe',
  templateUrl: './ce-groupe.component.html',
  styleUrls: ['./ce-groupe.component.css']
})
export class CeGroupeComponent implements OnInit {

  appartGroupe: any
  url: any
  groupe: any
  competitions: any
  user: any
  participation: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.ceGgroupe
    console.log('Et le groupe est : ', this.groupe)
    this.getAllCompetDuGroupe();
    this.getMembres();
    this.user = this.auth.getUserConnect();
  }

  modifierGroupe(){
    const myDialog = this.dialog.open(ModifierGroupeComponent);
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
  
  getMembres(){
    this.url = 'http://localhost:8087/groupes/classement/' + this.auth.ceGgroupe.id
    this.http.get(this.url).subscribe({
    next : (data) => { this.appartGroupe = data },
    error : (err) => { console.log(err) }
    });
  }

  removeMember(membre: any){
    this.auth.setMembre(membre)
    const myDialog = this.dialog.open(SupprimerMembreComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }

  invitationGroupe(){
    const myDialog = this.dialog.open(InvitationGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }

  nouvelleCompet(){
    console.log('Ce bouton ne fonctionne pas encore')
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
    // this.http.get('http://localhost:8087/competition/' + c.id + '/participation/utilisateur/' + this.user.login).subscribe({
    //   next: (data)=> {console.log("participe ou participe pas : ",data); this.participation = data ;
    // },
    //   error: (err)=> {console.log(err)}
    // })
    console.log("participation", this.participation);
    if (this.participation==null) {
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

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.ceGgroupe
    this.getMembres()
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

  }

  nouvelleCompet(){
    console.log('Ce bouton ne fonctionne pas encore')
  }

}

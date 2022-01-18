import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-creer-groupe',
  templateUrl: './creer-groupe.component.html',
  styleUrls: ['./creer-groupe.component.css']
})
export class CreerGroupeComponent implements OnInit {

  groupe: any;
  appartenanceGroupe: any;
  constructor(private http : HttpClient, private dialogRef : MatDialogRef<CreerGroupeComponent>, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = {nom : '', description : ''}
  }

  creerGroupe(nouveauGroupe: any){
    let groupe = {nom : nouveauGroupe.nom, description : nouveauGroupe.description}

    this.http.post('http://localhost:8087/groupes/creer', groupe).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close(); this.ajoutCreateur(data)},
      error : (err)=> {console.log(err)}
    })

  }

  ajoutCreateur(groupeCree : any){
    
    let appartenanceGroupe = {utilisateur : this.auth.getUserConnect(), groupe : groupeCree, pointsParUtilisateurDansGroupe : 0}
    console.log('this.groupe : ', groupeCree)
    this.http.post('http://localhost:8087/groupes/ajout-personnes', appartenanceGroupe).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close()},
      error : (err)=> {console.log(err)}
    })

    console.log('ag', appartenanceGroupe)

  }

}

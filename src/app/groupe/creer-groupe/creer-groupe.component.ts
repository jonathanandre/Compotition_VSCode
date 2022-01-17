import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-creer-groupe',
  templateUrl: './creer-groupe.component.html',
  styleUrls: ['./creer-groupe.component.css']
})
export class CreerGroupeComponent implements OnInit {

  groupe: any;
  constructor(private http : HttpClient, private dialogRef : MatDialogRef<CreerGroupeComponent>) { }

  ngOnInit(): void {
    this.groupe = {nom : '', description : ''}
  }

  creerGroupe(nouveauGroupe: any){
    let groupe = {nom : nouveauGroupe.nom, description : nouveauGroupe.description}

    this.http.post('http://localhost:8087/groupes/creer', groupe).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close()},
      error : (err)=> {console.log(err)}
    })
  }

}

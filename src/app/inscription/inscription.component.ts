import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private http: HttpClient ,private dialogRef: MatDialogRef<InscriptionComponent>) { }

  ngOnInit(): void {
  }

  inscription(utilisateur : any) {
    let user = {login : utilisateur.login, mdp : utilisateur.mdp, nom : utilisateur.nom, prenom : utilisateur.prenom, email : utilisateur.email, dateNaissance : utilisateur.naissance, admin : false, pointsGlobal : null, pointsPari : null};
    this.http.post('http://localhost:8087/utilisateur/inscription', user).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close()},
      error : (err)=> {console.log(err)}
    })
  }

}

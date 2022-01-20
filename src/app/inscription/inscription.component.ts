import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user: any;
  mdpDiff: any = false
  emailDiff: boolean = false

  constructor(private http: HttpClient ,private dialogRef: MatDialogRef<InscriptionComponent>) { }

  ngOnInit(): void {
    this.user = {login : '', mdp : '', nom : '', prenom : '', email : '', dateNaissance : '', pointsGlobal : 0, pointsPari : 0};
  }

  inscription(utilisateur : any) {
    let user = {login : utilisateur.login, mdp : utilisateur.mdp, nom : utilisateur.nom, prenom : utilisateur.prenom, email : utilisateur.email, dateNaissance : utilisateur.naissance, admin : false, pointsGlobal : null, pointsPari : null};
    
    if(utilisateur.mdp == utilisateur.mdpConfirme && utilisateur.email == utilisateur.emailConfirme){
      this.http.post('http://localhost:8087/utilisateur/inscription', user).subscribe({
        next : (data)=> {console.log(data); this.dialogRef.close()},
        error : (err)=> {console.log(err)}
      })
    } 

    if (utilisateur.mdp != utilisateur.mdpConfirme){
      this.mdpDiff = true
    }

    if (utilisateur.email != utilisateur.emailConfirme){
      this.emailDiff = true
    }

  }

}

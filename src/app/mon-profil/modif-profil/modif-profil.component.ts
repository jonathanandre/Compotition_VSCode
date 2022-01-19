import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modif-profil',
  templateUrl: './modif-profil.component.html',
  styleUrls: ['./modif-profil.component.css']
})
export class ModifProfilComponent implements OnInit {
  userConnected: any;
  constructor(private dialogRef: MatDialogRef<ModifProfilComponent>, private httpClient: HttpClient, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userConnected = this.auth.getUserConnect();
  //   console.log('date user', this.userConnected.dateNaissance);
  //   this.userConnected.dateNaissance = this.formatJsonDate(this.userConnected.dateNaissance);
  //  // console.log('date converti', date);
  //   console.log('new date user', this.userConnected.dateNaissance);
  //   console.log('sub ', this.userConnected.dateNaissance.substr(6));
  }

  // formatJsonDate(jsonDate: any) {
  //   return (new Date(parseInt(jsonDate.substr(6)))).toLocaleDateString();
  // };

  modifProfil(utilisateur: any) {
    let user = {id : this.userConnected.id, login : utilisateur.login, mdp : utilisateur.mdp, nom : utilisateur.nom, prenom : utilisateur.prenom, email : utilisateur.email, dateNaissance : utilisateur.naissance, admin : this.userConnected.admin, pointsGlobal : this.userConnected.pointsGlobal, pointsPari : this.userConnected.pointsPari};
    this.httpClient.put('http://localhost:8087/utilisateur/informations/modifier', user).subscribe({
      next: (data) => { console.log(data); this.dialogRef.close(); 
        this.auth.setUserLocalStorage(user);  },
      error: (err) => { console.log("erreur modif profil !!! :::",err) }
    })
  }


}

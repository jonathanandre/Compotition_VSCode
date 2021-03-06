import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  utilisateur: any;
  msg: any;

  constructor(private router: Router,private dialogRef: MatDialogRef<ConnexionComponent>, private httpClient: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
  }

  seConnecter(value: any) {
    this.httpClient.post('http://localhost:8087/utilisateur/connexion', value).subscribe({
      next:(data)=> {console.log(data); 
        this.utilisateur = data;
        if(this.utilisateur== null) {
          this.msg = "login ou mdp incorrect";
        } else {
          this.auth.setUserLocalStorage(this.utilisateur);
          this.dialogRef.close();
          this.router.navigateByUrl("accueil");
         
        }
        },
        error: (err)=> {console.log(err)}
    })
  }
}

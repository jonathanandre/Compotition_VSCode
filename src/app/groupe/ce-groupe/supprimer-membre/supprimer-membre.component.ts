import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-supprimer-membre',
  templateUrl: './supprimer-membre.component.html',
  styleUrls: ['./supprimer-membre.component.css']
})
export class SupprimerMembreComponent implements OnInit {

  url : any
  login : any
  constructor(private http: HttpClient, private auth : AuthService, private dialogRef : MatDialogRef<SupprimerMembreComponent>) { }

  ngOnInit(): void {
    this.login = this.auth.membre.login
  }

  removeMember(){
    this.url = 'http://localhost:8087/groupes/supprimer-personnes/' + this.auth.getGroupe().id + '/' + this.login
    this.http.delete(this.url).subscribe({
    next : (data) => { console.log(this.login + ' ne fait plus parti du groupe'); this.dialogRef.close() },
    error : (err) => { console.log(err) }
    });

  }

}
  
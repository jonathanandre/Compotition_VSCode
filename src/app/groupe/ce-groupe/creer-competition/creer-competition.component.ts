import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-creer-competition',
  templateUrl: './creer-competition.component.html',
  styleUrls: ['./creer-competition.component.css']
})
export class CreerCompetitionComponent implements OnInit {
  user: any
  groupe: any
  compet: any
  constructor(private http: HttpClient, private dialogRef: MatDialogRef<CreerCompetitionComponent>, private auth : AuthService) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect();
    this.groupe = this.auth.getGroupe();
    this.compet = {activite: '', dateDebut: '', dateFin: '', lieu: '', limiteInscription: '', format: '', description: '', pari: ''}
  }

  creerCompet(competition: any) {
    let compet = {activite: competition.activite, dateDebut: competition.dateDebut, dateFin: competition.dateFin, lieu: competition.lieu, limiteInscription: competition.limiteInscription, format: competition.format, description: competition.description, pari: competition.pari, groupe: this.groupe, organisateur: this.user}
    this.http.post('http://localhost:8087/competition/creer', compet).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close()},
      error : (err)=> {console.log(err)}
    })
  }

}

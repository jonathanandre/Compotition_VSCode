import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-choixfavori',
  templateUrl: './choixfavori.component.html',
  styleUrls: ['./choixfavori.component.css']
})
export class ChoixfavoriComponent implements OnInit {

  competition:any;
  participations:any;
  constructor(private auth: AuthService, private http: HttpClient,private dialogRef: MatDialogRef<ChoixfavoriComponent>,private router: Router) { }

  ngOnInit(): void {
    this.competition=this.auth.getCompetition();
    this.participants();
  }

  participants(){
    this.http.get('http://localhost:8087/competition/competition/'+this.competition.id).subscribe({
      next: (data) => {this.participations=data}
    })
  }


  valider(value:any){
    console.log(2);
    this.http.post('http://localhost:8087/votepari', {
      "competition": this.competition,
      "predicteur": this.auth.getUserConnect(),
      "favori": value,
      "remuneration":  0

  }).subscribe({
    next: (data) => {this.dialogRef.close();this.router.navigateByUrl("redirection")}
  })

  

    
    
  

  }

}

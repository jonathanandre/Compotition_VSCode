import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tournoi',
  templateUrl: './tournoi.component.html',
  styleUrls: ['./tournoi.component.css']
})
export class TournoiComponent implements OnInit {
  
  competitions: any
  url: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }
  
  ngOnInit(): void {
    this.getMesCompetitions();
  }

  sendCompetition(competitionClicked: any){
    this.auth.setCompetition(competitionClicked)
  }

  getMesCompetitions(){
    this.url = 'http://localhost:8087/competition/all'
    this.http.get(this.url).subscribe({
    next : (data) => { this.competitions = data //;console.log(this.competitions) 
    },
    error : (err) => { console.log(err) }
    });
  }
}

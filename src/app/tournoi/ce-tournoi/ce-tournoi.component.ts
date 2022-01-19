import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ce-tournoi',
  templateUrl: './ce-tournoi.component.html',
  styleUrls: ['./ce-tournoi.component.css']
})
export class CeTournoiComponent implements OnInit {
  url: any
  competitions: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {this.competitions = this.auth.competitions
    console.log('Et la competition est : ', this.competitions)
    this.getCompetitionById();
  }

  getCompetitionById() {
    this.http.get('http://localhost:8087/competition/informations/' + this.competitions.id).subscribe({
      next: (data)=> {console.log('competitions du groupe', data); this.competitions = data},
      error: (err)=> {console.log(err)}
    });
  }
}

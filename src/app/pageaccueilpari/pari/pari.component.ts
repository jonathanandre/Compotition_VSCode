import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChoixfavoriComponent } from './choixfavori/choixfavori.component';


@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {
  competitions: any;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.competitionpariable();
    this.competitionparieesparuser();
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  competitionpariable(){

    this.http.get('http://localhost:8087/competition/publique/pariable').subscribe({
      next: (data) => {this.competitions=data}
    })
    
    
  }

  competitionparieesparuser(){
    console.log(this.auth.getUserConnect())

  }

  pari(value:any){
    this.auth.setCompetition(value);
    const myDialog = this.dialog.open(ChoixfavoriComponent);

    this.ngOnInit();
  }

  
}

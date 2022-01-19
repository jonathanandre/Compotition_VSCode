import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router,private auth: AuthService,) { }

  ngOnInit(): void {
    this.competitionpariable();
    this.competitionparieesparuser();
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  competitionpariable(){

  }

  competitionparieesparuser(){
    console.log(this.auth.getUserConnect())

  }

}

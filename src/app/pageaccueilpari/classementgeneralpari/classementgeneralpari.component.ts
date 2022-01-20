import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-classementgeneralpari',
  templateUrl: './classementgeneralpari.component.html',
  styleUrls: ['./classementgeneralpari.component.css']
})
export class ClassementgeneralpariComponent implements OnInit {

  classementGlobal: any

  constructor(private router: Router,private http : HttpClient) { }

  ngOnInit(): void {
    this.getClassement()
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  getClassement(){
    this.http.get('http://localhost:8087/utilisateur/classement-pari').subscribe({
    next : (data) => { this.classementGlobal = data,console.log(this.classementGlobal) },
    error : (err) => { console.log(err) }
    });
  }

}

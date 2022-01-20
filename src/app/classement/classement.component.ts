import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {

  classementGlobal: any

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.getClassement()
  }

  getClassement(){
    this.http.get('http://localhost:8087/utilisateur/classement-global').subscribe({
    next : (data) => { this.classementGlobal = data },
    error : (err) => { console.log(err) }
    });
  }

}

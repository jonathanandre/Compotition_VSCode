import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
var liste: any[] = [];
var liste2: any[] = [];
var a: any;

@Component({
  selector: 'app-classementamipari',
  templateUrl: './classementamipari.component.html',
  styleUrls: ['./classementamipari.component.css']
})
export class ClassementamipariComponent implements OnInit {

  classementGlobal: any
  classementAmi:any;
  potes: any;

   constructor(private router: Router,private auth: AuthService,private http : HttpClient) { }

  ngOnInit(): void {
    liste= [];
    liste2=[];
    this.getClassement()
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  getClassement(){
    this.http.get('http://localhost:8087/utilisateur/classement-pari').subscribe({
    next : (data) => { this.classementGlobal = data,this.getAmisFromUser(this.classementGlobal) },
    error : (err) => { console.log(err) }
    });
  }

  selection(value1:any,value2:any){
    for (var val1 in value1){
      a=0;
      for (var val2 in value2){
        if(value1[val1].login==value2[val2]){
          a=1
        }
      }
      if(a==1){

        liste2.push(value1[val1]);
      }
      
    }
    this.classementAmi=liste2
  }


  getAmisFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/' + this.auth.getUserConnect().id).subscribe({

      next: (data) => {
        this.potes = data; console.log(data); for (var val in data) {

          if (this.potes[val].envoyeur.id != this.auth.getUserConnect().id) {
            liste.push(this.potes[val].envoyeur.login);
          }
          else {
            liste.push(this.potes[val].receveur.login);
          }
        };liste.push(this.auth.getUserConnect().login);this.selection(value,liste)
      },
      error: (err) => { console.log(err) }


    });


  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-potes',
  templateUrl: './potes.component.html',
  styleUrls: ['./potes.component.css']
})
export class PotesComponent implements OnInit {

  potes: any;
  potesenvoyes: any;
  potesrecus: any;
  msg: any;
  utilisateur: any;
  login: any;
  a: any;
  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }



  ngOnInit(): void {
    this.getAmisFromUser(this.auth.getUserConnect().id);
    this.getEnvoisFromUser(this.auth.getUserConnect().id);
    this.getRecusFromUser(this.auth.getUserConnect().id);
  }

  getAmisFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/' + value).subscribe({

      next: (data) => { this.potes = data; console.log(data) },
      error: (err) => { console.log(err) }


    });
  }

  getEnvoisFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/envoi/' + value).subscribe({

      next: (data) => { this.potesenvoyes = data; console.log(data) },
      error: (err) => { console.log(err) }


    });
  }

  getRecusFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/reception/' + value).subscribe({

      next: (data) => { this.potesrecus = data; console.log(data) },
      error: (err) => { console.log(err) }


    });
  }

  bool(value: any): boolean {
    return value.id != this.auth.getUserConnect().id
  }

  envoyerinvitation(value: any) {




    Object.entries(value)
      .forEach(([key, val]) => this.login = val);
    console.log(this.login);
    this.http.get('http://localhost:8087/utilisateur/amitie/' + this.login).subscribe({
      next: (data) => {
        this.utilisateur = data; console.log(this.utilisateur); console.log(this.utilisateur.id); this.envoyerinvitation_suite(this.utilisateur.id); this.msg = "";
        if (this.utilisateur = null) {
          this.msg = "le login n'existe pas";
        }
      },
      error: (err) => { console.log(err); this.msg = "le login n'existe pas"; }


    });

  }

  envoyerinvitation_suite(value: any) {
    console.log(2);
    this.http.post('http://localhost:8087/amitie', { "id": 0, "envoyeur": { "id": this.auth.getUserConnect().id }, "receveur": { "id": value }, "accepted": false }).subscribe({
      next: (data) => { console.log(25) },



      error: (err) => { console.log(err) }
    })
    this.router.navigateByUrl('potes')

  }

  accepter(value: any) {
    console.log(value);

    this.http.get('http://localhost:8087/utilisateur/amitie/' + value).subscribe({
      next: (data) => { this.a=data,this.accepter_suite((this.a.id)) }


    })


  }

  accepter_suite(value: any) {
    console.log(value);
    this.http.get('http://localhost:8087/amitie/reception/' + value + '/' + this.auth.getUserConnect().id).subscribe({
      next: (data) => { console.log(data),this.accepter_fin(data) },



      error: (err) => { console.log(err) }
    })

  }

  accepter_fin(value:any){

    this.http.put('http://localhost:8087/amitie', value).subscribe({})

  }

  refuser(value: any) {

  }


}
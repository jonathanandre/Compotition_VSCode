import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

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
  constructor(private http: HttpClient, private auth: AuthService) { }



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


    this.http.get('http://localhost:8087/utilisateur/informations/1').subscribe({
      next: (data) => { this.utilisateur = data; console.log(this.utilisateur);console.log(this.utilisateur.id) },
      
    });
    this.http.post('http://localhost:8087/amitie', { "id": 0, "envoyeur": { "id": 2 }, "receveur": { "id": 2 }, "accepted": false }).subscribe({

    })
  }
}
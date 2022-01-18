import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { MessagePoteComponent } from './message-pote/message-pote.component';
import { Router } from '@angular/router';
var liste: any[] = [];


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
  b: any;

  constructor(private http: HttpClient, private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {

    liste=[];

    this.b = 0;
    this.getAmisFromUser(this.auth.getUserConnect().id);
    this.getEnvoisFromUser(this.auth.getUserConnect().id);
    this.getRecusFromUser(this.auth.getUserConnect().id);
  }

  getAmisFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/' + value).subscribe({

      next: (data) => {
        this.potes = data; console.log(data); for (var val in data) {

          if (this.potes[val].envoyeur.id != this.auth.getUserConnect().id) {
            liste.push(this.potes[val].envoyeur.login);
            console.log(liste);
          }
          else {
            liste.push(this.potes[val].receveur.login);
            console.log(liste);


          }
        }
      },
      error: (err) => { console.log(err) }


    });


  }

  getEnvoisFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/envoi/' + value).subscribe({

      next: (data) => {
        this.potesenvoyes = data; console.log(data); for (var val in data) {

          if (this.potesenvoyes[val].envoyeur.id != this.auth.getUserConnect().id) {
            liste.push(this.potesenvoyes[val].envoyeur.login);
            console.log(liste);
          }
          else {
            liste.push(this.potesenvoyes[val].receveur.login);
            console.log(liste);


          }
        }
      },
      error: (err) => { console.log(err) }


    });
  }

  getRecusFromUser(value: any) {
    this.http.get('http://localhost:8087/amitie/reception/' + value).subscribe({

      next: (data) => {
        this.potesrecus = data; console.log(data); for (var val in data) {

          if (this.potesrecus[val].envoyeur.id != this.auth.getUserConnect().id) {
            liste.push(this.potesrecus[val].envoyeur.login);
            console.log(liste);
          }
          else {
            liste.push(this.potesrecus[val].receveur.login);
            console.log(liste);


          }
        }
      },
      error: (err) => { console.log(err) }


    });
  }

  bool(value: any): boolean {
    return value.id != this.auth.getUserConnect().id
  }

  envoyerinvitation(value: any) {
    console.log("liste: ");
    console.log("vérification liste", liste);
    console.log('login' == 'login');
    this.b=0;





    Object.entries(value)
      .forEach(([key, val]) => this.login = val);
    if (this.login == this.auth.getUserConnect().login) {
      this.msg = "Vous ne pouvez pas vous demander en amis"
    }
    else {
      console.log("vérification liste 2", liste);

      for (var val in liste) {
        console.log("testing", liste[val]);
        
        if (this.login == liste[val]) {
          this.b = 1;
        }
      }
      if (this.b == 1) { this.msg = "login déjà présent" }
      else {
        console.log(this.login);
        this.http.get('http://localhost:8087/utilisateur/amitie/' + this.login).subscribe({
          next: (data) => {
            this.utilisateur = data; console.log("utilisateur",this.utilisateur);  
            
            if (this.utilisateur == null) {
              this.msg = "le login n'existe pas, essaie encore";
            }
            else{
              this.envoyerinvitation_suite(this.utilisateur.id);
              this.msg = "";
              liste.push(this.utilisateur.login);
            }

          },
          error: (err) => { console.log(err); this.msg = "il faut rentrer quelque chose!"; }


        });
      }


    }



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
    console.log("partie 1");
    console.log(value);



    this.http.get('http://localhost:8087/utilisateur/amitie/' + value).subscribe({
      next: (data) => { this.a = data, this.accepter_suite((this.a.id)) }


    })


  }

  callMsgPote(p: any) {
    this.auth.setAmitieLocalStorage(p);
    const myDialog = this.dialog.open(MessagePoteComponent);
  }
  
  accepter_suite(value: any) {
    console.log("partie 2");
    console.log(value);

    this.http.get('http://localhost:8087/amitie/reception/' + value + '/' + this.auth.getUserConnect().id).subscribe({
      next: (data) => { console.log(data), this.accepter_fin(data) },



      error: (err) => { console.log(err) }
    })

  }

  accepter_fin(value: any) {


    console.log("partie 3");
    console.log(value);
    for (var val in value) { console.log(val) }
    this.http.put('http://localhost:8087/amitie', value[0]).subscribe({})


  }

  refuser(value: any) {
    this.http.get('http://localhost:8087/utilisateur/amitie/' + value).subscribe({
      next: (data) => { console.log("data partie1", data),this.a = data, this.refuser_suite((this.a.id)),liste.splice(this.a.login), console.log("deletetest", liste) }
      


    })

  }

  refuser_suite(value: any) {
    console.log("partie 2");
    console.log(value);

    this.http.get('http://localhost:8087/amitie/reception/' + value + '/' + this.auth.getUserConnect().id).subscribe({
      next: (data) => { console.log(data), this.refuser_fin(data) },



      error: (err) => { console.log(err) }
    })

  }

  refuser_fin(value: any) {


    console.log("partie 3");
    console.log(value);
    for (var val in value) { console.log(val) }
    this.http.delete('http://localhost:8087/amitie/' + value[0].id).subscribe({})


  }

  c:any;
  d:any;
  e:any;
  virer(value1:any,value2:any){
    this.http.get('http://localhost:8087/utilisateur/amitie/' + value1).subscribe({

      next: (data) => { this.c=data , this.virer_1(this.c.id,value2),this.updateliste(value1,value2)}
      
        
      
      


    })
  }

  updateliste(value1:any, value2:any){
    if(value1==this.auth.getUserConnect().login){

      liste.splice(value2)
    }
    else{

      liste.splice(value1)
    }

  }

  virer_1(value1:any,value2:any){
    this.http.get('http://localhost:8087/utilisateur/amitie/' + value2).subscribe({

      next: (data) => { this.d=data , this.virer_2(value1,this.d.id)}
      


    })
  }
  virer_2(value1:any,value2:any){

    this.http.get('http://localhost:8087/amitie/reception/' + value1 + '/' + value2).subscribe({
      next: (data) => { this.e=data , this.refuser_fin(this.e)}
    })
    this.http.get('http://localhost:8087/amitie/reception/' + value2 + '/' + value1).subscribe({
      next: (data) => { this.e=data , this.refuser_fin(this.e)}
    })

  }

}
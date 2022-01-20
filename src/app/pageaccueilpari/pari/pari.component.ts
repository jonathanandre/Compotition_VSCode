import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChoixfavoriComponent } from './choixfavori/choixfavori.component';
import { DatePipe } from '@angular/common';

var liste: any[] = [];
var a:any;
var date: Date;



@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {
  competitions: any;
  votesparis:any;
  listes:any;

  constructor(public datepipe: DatePipe,private http: HttpClient, private auth: AuthService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {

    
    liste=[];
    console.log('reinitialise');
    this.competitionpariable();
    
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  competitionpariable(){

    this.http.get('http://localhost:8087/competition/publique/pariable').subscribe({
      next: (data) => {this.competitions=data,this.competitionparieesparuser(data);console.log("data: ",data)}
    })
    
    
  }

  competitionparieesparuser(value:any){
    this.http.get('http://localhost:8087/votepari/predicteur/'+this.auth.getUserConnect().id).subscribe({
      next: (data) => {this.votesparis=data,this.fin(value,this.votesparis)}
    })
  }

  fin(value1:any,value2:any){

    for (var val1 in value1){
      date=value1[val1].dateDebut
      a=0;
      if(Date.now()>new Date(date).getTime()){
        a=1
      }
      
      
      for (var val2 in value2){
        if(value1[val1].id== value2[val2].competition.id){
          a=1

        }

        

      }
      if(a==0){
        liste.push(value1[val1])
        
      }
    }
    this.listes=liste;

  }

  pari(value:any){
    this.auth.setCompetition(value);
    const myDialog = this.dialog.open(ChoixfavoriComponent);

    
  }
  


}

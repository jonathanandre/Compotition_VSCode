import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-ancienpari',
  templateUrl: './ancienpari.component.html',
  styleUrls: ['./ancienpari.component.css']
})
export class AncienpariComponent implements OnInit {
  voteparis: any;

  constructor(private http: HttpClient,private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.competitionspariees();
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

  competitionspariees(){

    this.http.get('http://localhost:8087/votepari/predicteur/'+this.auth.getUserConnect().id).subscribe({
      next: (data) => {this.voteparis=data}
    })
  }

  temps(value:any){
    if(Date.now()>new Date(value).getTime()){
      return false
    }else{
      return true
    }
  }

  annulervote(value:any){

    this.http.delete('http://localhost:8087/votepari/'+value+'/'+this.auth.getUserConnect().id).subscribe({
      next: (data) => {this.ngOnInit()}
    })
  }


}

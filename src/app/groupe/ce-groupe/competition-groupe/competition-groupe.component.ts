import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-competition-groupe',
  templateUrl: './competition-groupe.component.html',
  styleUrls: ['./competition-groupe.component.css']
})
export class CompetitionGroupeComponent implements OnInit {
  groupe: any
  user: any
  competitions: any
  participation: any
  msg: any
  msgtrue: any
  constructor(private http: HttpClient, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.getGroupe();
    this.getAllCompetDuGroupe();
    this.user = this.auth.getUserConnect();
  }

  

  getAllCompetDuGroupe() {
    this.http.get('http://localhost:8087/groupe/competition/informations/' + this.groupe.id).subscribe({
      next: (data)=> {console.log('competitions du groupe', data); this.competitions = data},
      error: (err)=> {console.log(err)}
    });
  }

  participe(c: any): boolean {
    this.http.get('http://localhost:8087/competition/' + c.id + '/participation/utilisateur/boolean/' + this.user.login).subscribe({
      next: (data)=> {console.log("participe ou participe pas : ",data); this.participation = data ;},
      error: (err)=> {console.log(err)} 
    })
    console.log("return participation : ", this.participation);
    return this.participation;

// console.log("participation", this.participation);
// if (this.participation==false) {
//   return false;
// } else {
//   return true;
// }
}

rejoindreCompet(c: any) {
  let participe = {utilisateur: this.user, competition: c};
  this.http.post('http://localhost:8087/competition/participation/ajouter', participe).subscribe({
    next: (data)=> {console.log('competition rejoint', data);
    this.ngOnInit(); 
    },
    error: (err)=> {console.log(err)}
  })
}

quitterCompet(c: any) {
  this.http.delete('http://localhost:8087/competition/' + c.id + '/participation/supprimer/' + this.user.login).subscribe({
    next: (data)=> {console.log('participation a la compet supprimee', data); 
    this.ngOnInit();
  },
    error: (err)=> {console.log(err)}
  })
}

isOrganisateur(c: any) {
  if (this.user.id==c.organisateur.id) {
    return true
  } else {
    return false
  }
}

supprimerCompet(c: any) {
  //this.date = new Date();
  // console.log('test date d aujourdhui : ', this.date);
  console.log('test date d aujourdhui en ms : ', Date.now())
  console.log('test dateDebut en ms : ', new Date(c.dateDebut).getTime())
  if(Date.now()<new Date(c.dateDebut).getTime()){
    this.http.delete('http://localhost:8087/competition/supprimer/' + c.id).subscribe({
      next: (data)=> {console.log('competition supprimee', data); this.ngOnInit(); },
      error: (err)=> {console.log(err)}
    })
  } else {
    this.msg = "suppression impossible après le début de la compétition";
    this.msgtrue = c.id;
  }
}

}

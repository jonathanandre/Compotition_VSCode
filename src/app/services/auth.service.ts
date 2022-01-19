import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;

  ceGgroupe: any = null;
  membre:any = null;
  competition:any=null;

  competitions:any = null;

  amitie: any = null;
  constructor(private router: Router) { }

  setCompetition(competitionTransmis: any){
    this.competitions = competitionTransmis
  }
  setGroupe(groupeTransmis: any){
    localStorage.setItem('ceGgroupe', JSON.stringify(groupeTransmis));
  }

  getGroupe(){
    this.ceGgroupe = localStorage.getItem('ceGgroupe');
    return JSON.parse(this.ceGgroupe);
  }

  setMembre(membreTransmis: any){
    this.membre = membreTransmis
  }

  setCompetition(c: any){
    this.competition = c
  }

  getCompetition(){
    return this.competition 
  }

  setUserLocalStorage(u: any){
    localStorage.setItem('user', JSON.stringify(u));
  }

  getUserConnect(){
    this.user = localStorage.getItem('user');
    return JSON.parse(this.user);
  }

  isConnected(){
    if(this.getUserConnect() != null){
      return true;
    }
    else{
      return false;
    }
  }

  deconnexion(){
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  setAmitieLocalStorage(a: any) {
    localStorage.setItem('amitie', JSON.stringify(a));
  }

  getAmitie() {
    this.amitie = localStorage.getItem('amitie');
    return JSON.parse(this.amitie);
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any = null;
  constructor(private router: Router) { }

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
}
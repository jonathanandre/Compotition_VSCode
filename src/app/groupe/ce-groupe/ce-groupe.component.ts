import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModifierGroupeComponent } from './modifier-groupe/modifier-groupe.component';

@Component({
  selector: 'app-ce-groupe',
  templateUrl: './ce-groupe.component.html',
  styleUrls: ['./ce-groupe.component.css']
})
export class CeGroupeComponent implements OnInit {

  groupe: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.ceGgroupe
    console.log('Et le groupe est : ', this.groupe)
  }

  modifierGroupe(){
    const myDialog = this.dialog.open(ModifierGroupeComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }
  
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}

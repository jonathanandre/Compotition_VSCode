import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreerGroupeComponent } from './creer-groupe/creer-groupe.component';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {

  groupes: any
  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getMesGroupes();
  }

  getMesGroupes(){
    this.http.get('http://localhost:8087/groupes/mes-groupes/{id}').subscribe({
    next : (data) => { this.groupes = data },
    error : (err) => { console.log(err) }
    });
  }

  callNouveauGroupe(){
    const myDialog = this.dialog.open(CreerGroupeComponent);
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

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  user :any;
  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect();
  }

  callModifProfil() {
    const myDialog = this.dialog.open(ModifProfilComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadCurrentRoute();
    });
  }

  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

}

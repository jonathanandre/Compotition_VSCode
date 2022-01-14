import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compotition';
  constructor(private dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {

  }

  callMyConnexion() {
    const myDialog = this.dialog.open(ConnexionComponent);
  }

}

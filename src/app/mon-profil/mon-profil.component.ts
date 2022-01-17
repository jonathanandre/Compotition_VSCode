import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { ModifProfilComponent } from './modif-profil/modif-profil.component';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  user :any;
  constructor(private auth: AuthService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.auth.getUserConnect()
  }

  callModifProfil() {
    const myDialog = this.dialog.open(ModifProfilComponent);
  }

}

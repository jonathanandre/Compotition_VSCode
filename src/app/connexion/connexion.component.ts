import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  user: any;
  msg: any;

  constructor(private dialogRef: MatDialogRef<ConnexionComponent>) { }

  ngOnInit(): void {
  }

}

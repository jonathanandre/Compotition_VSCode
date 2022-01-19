import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-pageaccueilpari',
  templateUrl: './pageaccueilpari.component.html',
  styleUrls: ['./pageaccueilpari.component.css']
})
export class PageaccueilpariComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirigerparier(){
    this.router.navigateByUrl("pari");

  }

  redirigerclassementgeneralpari(){
    this.router.navigateByUrl("classementgeneralpari");

  }

  redirigerclassementamipari(){
    this.router.navigateByUrl("classementgeneralpari");

  }

  redirigerancienpari(){
    this.router.navigateByUrl("ancienpari");

  }

}

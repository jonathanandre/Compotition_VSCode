import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-ancienpari',
  templateUrl: './ancienpari.component.html',
  styleUrls: ['./ancienpari.component.css']
})
export class AncienpariComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }


}

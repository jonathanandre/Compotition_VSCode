import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("redirection")
    this.router.navigateByUrl("pari");

  }

}

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-classementamipari',
  templateUrl: './classementamipari.component.html',
  styleUrls: ['./classementamipari.component.css']
})
export class ClassementamipariComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

}

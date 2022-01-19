import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-classementgeneralpari',
  templateUrl: './classementgeneralpari.component.html',
  styleUrls: ['./classementgeneralpari.component.css']
})
export class ClassementgeneralpariComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  revenir(){
    this.router.navigateByUrl("pageaccueilpari");

  }

}

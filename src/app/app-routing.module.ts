import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournoiComponent } from './tournoi/tournoi.component';

const routes: Routes = [
  {path: 'tournoi', component: TournoiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

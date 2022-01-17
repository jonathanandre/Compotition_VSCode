import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { PotesComponent } from './potes/potes.component';

const routes: Routes = [
  {path: 'tournoi', component: TournoiComponent},
  {path: 'mon-profil', component: MonProfilComponent},
  {path: 'potes', component: PotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

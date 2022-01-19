import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerGroupeComponent } from './groupe/creer-groupe/creer-groupe.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { PotesComponent } from './potes/potes.component';

const routes: Routes = [
  {path: 'tournoi', component: TournoiComponent},
  {path: 'mon-profil', component: MonProfilComponent},
  {path: 'potes', component: PotesComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'creer-groupe', component: CreerGroupeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

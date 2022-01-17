import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerGroupeComponent } from './groupe/creer-groupe/creer-groupe.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { TournoiComponent } from './tournoi/tournoi.component';

const routes: Routes = [
  {path: 'tournoi', component: TournoiComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'creer-groupe', component: CreerGroupeComponent}
  {path: 'mon-profil', component: MonProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

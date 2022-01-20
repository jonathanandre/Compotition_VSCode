import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerGroupeComponent } from './groupe/creer-groupe/creer-groupe.component';
import { GroupeComponent } from './groupe/groupe.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { PotesComponent } from './potes/potes.component';
import { CeGroupeComponent } from './groupe/ce-groupe/ce-groupe.component';
import { CeTournoiComponent } from './tournoi/ce-tournoi/ce-tournoi.component';
import { PageaccueilpariComponent } from './pageaccueilpari/pageaccueilpari.component';
import { PariComponent } from './pageaccueilpari/pari/pari.component';
import { ClassementgeneralpariComponent } from './pageaccueilpari/classementgeneralpari/classementgeneralpari.component';
import { ClassementamipariComponent } from './pageaccueilpari/classementamipari/classementamipari.component';
import { AncienpariComponent } from './pageaccueilpari/ancienpari/ancienpari.component';
import { ClassementComponent } from './classement/classement.component';


const routes: Routes = [
  {path: 'tournoi', component: TournoiComponent},
  {path: 'mon-profil', component: MonProfilComponent},
  {path: 'potes', component: PotesComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'creer-groupe', component: CreerGroupeComponent},
  {path: 'groupe/ce-groupe', component: CeGroupeComponent},
  {path: 'pageaccueilpari', component: PageaccueilpariComponent},
  {path: 'pari', component: PariComponent},
  {path: 'classementgeneralpari', component:  ClassementgeneralpariComponent},
  {path: 'classementamipari', component:  ClassementamipariComponent},
  {path: 'ancienpari', component:  AncienpariComponent},
  {path: 'classement', component:  ClassementComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournoiComponent } from './tournoi/tournoi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConnexionComponent } from './connexion/connexion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { PotesComponent } from './potes/potes.component'; 
import { ModifProfilComponent } from './mon-profil/modif-profil/modif-profil.component'; 
import { GroupeComponent } from './groupe/groupe.component';
import { CreerGroupeComponent } from './groupe/creer-groupe/creer-groupe.component'; 
import { MatButtonModule } from'@angular/material/button';
import { MessagePoteComponent } from './potes/message-pote/message-pote.component';
import { InvitationRecuComponent } from './groupe/invitation-recu/invitation-recu.component';
import { CeGroupeComponent } from './groupe/ce-groupe/ce-groupe.component';
import { ModifierGroupeComponent } from './groupe/ce-groupe/modifier-groupe/modifier-groupe.component';
import { SupprimerMembreComponent } from './groupe/ce-groupe/supprimer-membre/supprimer-membre.component';
import { InvitationGroupeComponent } from './groupe/ce-groupe/invitation-groupe/invitation-groupe.component';
import { PageaccueilpariComponent } from './pageaccueilpari/pageaccueilpari.component';
import { PariComponent } from './pageaccueilpari/pari/pari.component';
import { ClassementgeneralpariComponent } from './pageaccueilpari/classementgeneralpari/classementgeneralpari.component';
import { ClassementamipariComponent } from './pageaccueilpari/classementamipari/classementamipari.component';
import { AncienpariComponent } from './pageaccueilpari/ancienpari/ancienpari.component';
import { ChoixfavoriComponent } from './pageaccueilpari/pari/choixfavori/choixfavori.component';

@NgModule({
  declarations: [
    AppComponent,
    TournoiComponent,
    ConnexionComponent,
    InscriptionComponent,
    MonProfilComponent,
    PotesComponent,
    ModifProfilComponent,
    GroupeComponent,
    CreerGroupeComponent,
    InvitationRecuComponent,
    CeGroupeComponent,
    ModifierGroupeComponent,
    MessagePoteComponent,
    SupprimerMembreComponent,
    InvitationGroupeComponent,
    PageaccueilpariComponent,
    PariComponent,
    ClassementgeneralpariComponent,
    ClassementamipariComponent,
    AncienpariComponent,
    ChoixfavoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { MatIconModule } from '@angular/material/icon';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { ModifProfilComponent } from './mon-profil/modif-profil/modif-profil.component'; 
import { GroupeComponent } from './groupe/groupe.component';
import { CreerGroupeComponent } from './groupe/creer-groupe/creer-groupe.component'; 
import { MatButtonModule } from'@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TournoiComponent,
    ConnexionComponent,
    InscriptionComponent,
    MonProfilComponent,
    ModifProfilComponent,
    GroupeComponent,
    CreerGroupeComponent
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

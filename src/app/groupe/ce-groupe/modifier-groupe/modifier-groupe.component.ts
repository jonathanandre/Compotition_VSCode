import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modifier-groupe',
  templateUrl: './modifier-groupe.component.html',
  styleUrls: ['./modifier-groupe.component.css']
})
export class ModifierGroupeComponent implements OnInit {

  groupe: any
  constructor(private httpClient: HttpClient, private dialogRef : MatDialogRef<ModifierGroupeComponent>, private auth: AuthService) { }

  ngOnInit(): void {
    this.groupe = this.auth.getGroupe()
  }

  modifGroupe(groupeModif: any) {
    let modifGroupe = {id : this.auth.getGroupe().id, nom : groupeModif.nom, description : groupeModif.description}
    console.log('groupe modifié :', modifGroupe)
    this.httpClient.put('http://localhost:8087/groupes/informations/modifier', modifGroupe).subscribe({
      next : (data)=> {console.log(data); this.dialogRef.close()},
      error : (err)=> {console.log(err)}
    })
  }
}

/// modif groupe par login user ; ajout des invit en cours et refusées
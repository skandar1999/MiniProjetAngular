import { Router } from '@angular/router';
import { Employe } from './../model/employe.model';
import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../model/etablissement.model';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-add-etab',
  templateUrl: './add-etab.component.html',
  styleUrls: ['./add-etab.component.css']
})
export class AddEtabComponent implements OnInit {


    newEtablissement = new Etablissement();
  
    employes! : Employe[];
    newId! : number;
    newEmploye !: Employe;
    
  constructor(private etablissementService : EtablissementService, 
              private router: Router) { }

  ngOnInit(): void {
   
    this.etablissementService.listeEmployes().
subscribe(empls => {this.employes = empls;
console.log(empls);
}); }

  addEtablissement(){
    this.newEtablissement.employe = this.employes.find(empl => empl.id == this.newId)!;
    this.etablissementService.ajouterEtablissement(this.newEtablissement)
    .subscribe(etab => {
    console.log(etab);
    this.router.navigate(['etablissements']);
    });
    }
    
}

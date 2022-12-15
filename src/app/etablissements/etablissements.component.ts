import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Etablissement } from '../model/etablissement.model';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-etablissements',
  templateUrl: './etablissements.component.html',
  styleUrls: ['./etablissements.component.css']
})
export class EtablissementsComponent implements OnInit {

  etablissements? : Etablissement[] | undefined;

  constructor(private etablissementService : EtablissementService) { 
   // this.etablissements = etablissementService.listeEtablissement();
  }

  ngOnInit(): void {
    this.chargerEtablissement();
  }

      chargerEtablissement(){
        this.etablissementService.listeEtablissement().subscribe(etabs => {
          //console.log(etabs);
          this.etablissements= etabs;
          });
          

      }
  
  supprimerEtablissement(etab:Etablissement)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.etablissementService.supprimerEtablissement(etab.idItabli).subscribe(() => {
  console.log("etablissement supprimé");
  this.chargerEtablissement();
  });
  }

} 



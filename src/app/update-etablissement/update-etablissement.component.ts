import { Employe } from './../model/employe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etablissement } from '../model/etablissement.model';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {

  currentEtablissement = new Etablissement();
  employes! : Employe[];
  updatedId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private etablissementService: EtablissementService) { }

  ngOnInit(): void {

    
    this.etablissementService.consulterEtablissement(this.activatedRoute.snapshot.params['id']).
    subscribe( etab =>{ this.currentEtablissement = etab; }) ;  }

    UpdateEtablissement(){
    this.etablissementService.updateEtablissement(this.currentEtablissement).subscribe(etab => {
      this.router.navigate(['etablissements']); }
      );
    }

  }



 

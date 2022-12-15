import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { AddEtabComponent } from './add-etab/add-etab.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';

const routes: Routes = [
  {path: "etablissements", component : EtablissementsComponent},
  {path: "add", component : AddEtabComponent},
  {path: "updateEtablissement/:id", component: UpdateEtablissementComponent},
  { path: "", redirectTo: "etablissements", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

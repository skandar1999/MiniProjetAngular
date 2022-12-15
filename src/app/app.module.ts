import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtablissementsComponent } from './etablissements/etablissements.component';
import { AddEtabComponent } from './add-etab/add-etab.component';
import { FormsModule } from '@angular/forms';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EtablissementsComponent,
    AddEtabComponent,
    UpdateEtablissementComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';
import { Etablissement } from '../model/etablissement.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  apiURL: string = 'http://localhost:8090/etablissements/api'; 

  etablissements! : Etablissement[]; 
  etablissement! : Etablissement;
  employes! : Employe[];

  constructor(private http : HttpClient) { 
   /* this.employes=[{id : 1, nom : "Sami" },
                  {id : 2, nom : "Aymen" }];

    this.etablissements = [
      {idItabli : 1, adresse : "Mrezga , AFH", nomDirecteur : "Mourad Benromdhan" , nomEtab :"ISET Nabeul" , ville :"Nabeul" , 
      employeid : 100 , employe : {id : 1, nom : "Sami" } },
               ]; */
  }
      

  listeEtablissement(): Observable<Etablissement[]>{
    return this.http.get<Etablissement[]>(this.apiURL);
    }

      
    ajouterEtablissement( etab: Etablissement):Observable<Etablissement>{
      return this.http.post<Etablissement>(this.apiURL, etab, httpOptions);
      }


    supprimerEtablissement(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      
      consulterEtablissement(id: number): Observable<Etablissement> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Etablissement>(url);
        }



        updateEtablissement(etab :Etablissement) : Observable<Etablissement>
            { return this.http.put<Etablissement>(this.apiURL, etab, httpOptions); }

        



listeEmployes():Observable<Employe[]>{
  return this.http.get<Employe[]>(this.apiURL+"/emp"); 
}

consulterEmploye(id:number) : Employe{
  return this.employes.find(emp => emp.id==id)!;
}

}
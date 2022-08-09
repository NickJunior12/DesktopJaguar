import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiosService {

  constructor(private http: HttpClient) {
    console.log('Servicio http Beneficios iniciado en frontend');
   }

  getBeneficios(): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/beneficios/');
  }

  getBeneficio(id: string): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/beneficios/' + id);
  }
}

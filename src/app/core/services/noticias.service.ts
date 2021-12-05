import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {
    console.log('Servicio http Noticia iniciado en frontend');
   }

   getNoticias(): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/nots');
  }

  getNoticia(id: string): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/nots/' + id);
  }
}


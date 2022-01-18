import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuscadorModel } from '../models/buscador-model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  form: BuscadorModel;

  constructor(private http: HttpClient) {
    console.log('Servicio http Noticia iniciado en frontend');
   }

   getNoticias(): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/nots');
  }

  getNoticia(id: string): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/nots/' + id);
  }

  getNoticiasBuscadas( texto: string): Observable<any>{
    this.form = new BuscadorModel();

    this.form.buscador = texto;

    return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/nots/buscador', this.form );
  }
}


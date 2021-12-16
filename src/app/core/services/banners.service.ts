import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor(private http: HttpClient) {
    console.log('Servicio http banners iniciado en frontend');
   }

   getBanners(): Observable<any> {
    return this.http.get<any>('https://backend-jaguar.herokuapp.com/api/uploads/get-banners');
  }
}

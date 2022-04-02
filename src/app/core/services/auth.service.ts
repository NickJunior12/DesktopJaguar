import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoffidModel } from '../models/soffid-model';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userToken: string;

  constructor(private http: HttpClient) { 
    console.log('Servicio http iniciado en frontend');
    this.getToken();
  }

  loginPrueba(){
    this.setToken('1');
  }

  logout() {
    localStorage.removeItem('token');
 }

  private setToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

 getToken() {

    if ( localStorage.getItem('token') === '1' ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

 }

 isAuth(): boolean {
 console.log('Is auth');

  return localStorage.getItem('token') === '1';
 }

 tokenSoffid(code: string): Observable<any> {
  return this.http.post<any>('http://localhost:8000/api/soffid/token', {'code':code});
}

}

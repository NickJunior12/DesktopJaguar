import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userToken: string;
  AccessTokenLocal: string;

  constructor(private http: HttpClient) { 
    console.log('Servicio http iniciado en frontend');
    this.getToken();
  }

  loginPrueba(){
    this.setToken('1');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('nombre_usuario');

 }

  setToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  setAccesToken( accessToken: string ) {
    this.AccessTokenLocal = accessToken;
    localStorage.setItem('access_token', this.AccessTokenLocal);
  }

  setRefreshToken( refreshToken: string ) {
    localStorage.setItem('refresh_token', refreshToken);
  }

  setNombreUsuario( nombre_usuario: string ) {
    localStorage.setItem('nombre_usuario', nombre_usuario);
  }

  getAccessToken() {
    this.AccessTokenLocal = localStorage.getItem('access_token');
    return this.AccessTokenLocal;
  }

  getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  getNombreUsuario() {
    return localStorage.getItem('nombre_usuario');
  }

 getToken() {

    if ( localStorage.getItem('token') === '1' ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;

 }
 
 IsAuthSoffid(): boolean {

    console.log("Estoy autenticado con soffid?");
    this.AccessTokenLocal = localStorage.getItem('access_token');

    if( this.AccessTokenLocal ){
      console.log("Estoy autenticado, tiene algo");
      return true;
    }else{
      console.log("No estoy autenticado, no tiene nada");
      return false;
    }

 }

 isAuth(): boolean {
 console.log('Is auth');

  return localStorage.getItem('token') === '1';
 }


UserInfoSoffid(token: string): Observable<any> {
  return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/soffid/userinfo', {'token':token});
}

TokenSoffid(code: string): Observable<any> {
  return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/soffid/token', {'code':code});
}

RevokeSoffid(token: string): Observable<any>{
  return this.http.post<any>('https://backend-jaguar.herokuapp.com/api/soffid/revoke', {'token':token});
}

}

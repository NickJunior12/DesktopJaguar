import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm, FormsModule } from '@angular/forms';
import { UsuarioModel } from 'src/app/core/models/usuario-model';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  returnUrl: any;
  usuario: UsuarioModel;
  min: number = 10000000000000000000;
  max: number = 99999999999999999999;

  constructor( private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    
  }

  // onLoggedin(e) {
  //   e.preventDefault();
  //   localStorage.setItem('isLoggedin', 'true');
  //   if (localStorage.getItem('isLoggedin')) {
  //     this.router.navigate([this.returnUrl]);
  //   }
  // }

  ingresar() {
    this.auth.loginPrueba();
    this.auth.setAccesToken("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum");
    this.auth.setNombreUsuario("Usuario Prueba");
    this.router.navigateByUrl('/dashboard');
  }
  
  GetNonce(): string {
  
      let nonce = Math.random() * (this.max - this.min) + this.min;

      return nonce.toString();
  }

  login( formLogin: NgForm ) {

    // if ( formLogin.invalid ) { return; }

    // Swal.fire({
    //   title: 'Validando usuario',
    //   text: 'Validando credenciales del administrador...',
    //   allowOutsideClick: false,
    //   icon: 'info'
    // });

    // Swal.showLoading();

    // console.log('formulario enviado');
    // console.log(this.usuario);
    // console.log(formLogin);

    // this.auth.login( this.usuario ).subscribe( resp => {
    //   console.log(resp);
    //   Swal.close();
    //   this.router.navigateByUrl('/dashboard');
    // }, (err) => {
    //   console.log(err);
    //   Swal.fire({
    //     title: 'Error al autenticar',
    //     text: err.msg,
    //     icon: 'error'
    //   });
    // });

    this.auth.loginPrueba();
    this.router.navigateByUrl('/dashboard');

  }

  

}

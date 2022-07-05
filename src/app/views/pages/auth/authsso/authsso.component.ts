import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from 'src/app/core/services/auth.service';
import { UsuarioModel } from '../../../../core/models/usuario-model';


@Component({
  selector: 'app-authsso',
  templateUrl: './authsso.component.html',
  styleUrls: ['./authsso.component.scss']
})
export class AuthssoComponent implements OnInit {

  code: string;
  // nonce: string;
  usuario: UsuarioModel;
  aviso1: string;
  aviso2: string;
  aviso_access_token: string;
  aviso_refresh_token: string;
  aviso_nombre_usuario: string;

  constructor( private router: Router, private auth: AuthService, private aRouter: ActivatedRoute) { 

    this.aRouter.queryParams.subscribe(params => {

      this.code = params.code;

      console.log(this.code);

    });
  }

  authSoffid(code: string) {

    this.auth.TokenSoffid( code ).subscribe( data =>{
      console.log(data);
      this.aviso2 = "Procesando la información recibida....";
      
      if(data.response.status){ //Cuando la respuesta es exitosa no trae el status en su lugar viene el response con un string que debe ocnvertirse en json
        console.log("SEGURO ES UN ERROR");
        console.log(data.response.status);
      }else{
        const x = JSON.parse(data.response);
        
        console.log("access_token");
        // console.log(x.access_token);
        this.auth.setAccesToken(x.access_token);
        this.aviso_access_token = "Access Token Guardado...........................";

        console.log("Vamos por el nombre de usuario");
        this.userInfo( this.auth.getAccessToken() );
        console.log("Ya termine de traer el nomnbre de usuario");

        return;
      }

    },error =>{
      console.log(error);
    }
    )

  }

  userInfo(token: string){

    this.auth.UserInfoSoffid(token).subscribe( data => {
      console.log(data);
      const y = JSON.parse(data.response);
      console.log(y.given_name);
      if(y.given_name){
        console.log("tengo el nombre del usuario");
        console.log(y.given_name);
        this.auth.setNombreUsuario( y.given_name );
        this.aviso_nombre_usuario = "Nombre de usuario obtenido............";
        console.log(this.auth.getNombreUsuario());
        console.log("Ultima linea de userInfo");
        this.router.navigateByUrl('/dashboard');
        return;
      }else{
        console.log("Error ayuda............");
        this.aviso_nombre_usuario = "Error al obtener nombre de usuario";
      }
    })
  }

  ngOnInit(): void {

    this.aviso1 = "Obteniendo JWT de SSO......";
    console.log( this.code );
    this.authSoffid (this.code );

  }

}

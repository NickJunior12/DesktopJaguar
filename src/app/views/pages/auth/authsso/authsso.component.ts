import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from 'src/app/core/services/auth.service';
import { SoffidModel } from '../../../../core/models/soffid-model';
import { UsuarioModel } from '../../../../core/models/usuario-model';


@Component({
  selector: 'app-authsso',
  templateUrl: './authsso.component.html',
  styleUrls: ['./authsso.component.scss']
})
export class AuthssoComponent implements OnInit {

  code: string;
  nonce: string;
  usuario: UsuarioModel;
  aviso1: string;
  aviso2: string;

  constructor( private router: Router, private auth: AuthService, private aRouter: ActivatedRoute) { 

    this.aRouter.queryParams.subscribe(params => {

      this.code = params.code;

      console.log(this.code);

    });
  }

  authSoffid() {

    this.auth.tokenSoffid( this.code ).subscribe( data =>{
      console.log(data);

      //Consultamos datos del usuario

      //Guardamos datos del usuario en variable

      //Redireccionamos a dashboard
    },error =>{
      console.log(error);
    }
    )

  }

  ngOnInit(): void {

    this.aviso1 = "Obteniendo JWT de SSO......";
    console.log(this.code);
    this.authSoffid();
  
  }

}

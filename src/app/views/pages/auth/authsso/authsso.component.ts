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

  constructor( private router: Router, private auth: AuthService, private aRouter: ActivatedRoute) { 

    this.code = aRouter.snapshot.paramMap.get('code');
    this.nonce = aRouter.snapshot.paramMap.get('nonce');

      console.log('El code es: ' + this.code);
      console.log('El nonce es: ' + this.nonce);
  }

  authSoffid() {

    const sm: SoffidModel = {
      code: this.code,
      nonce: this.nonce
    }

    this.auth.tokenSoffid( sm ).subscribe( data =>{
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

    this.authSoffid();
  }

}

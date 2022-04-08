import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BuscadorModel } from '../../../core/models/buscador-model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buscador: BuscadorModel;
  nombreUsuario: string;

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router,private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.buscador = new BuscadorModel();
    console.log(this.auth.getAccessToken());
    console.log(this.auth.getNombreUsuario());
  }

  /**
   * Sidebar toggle on hamburger button click
   */
  toggleSidebar(e) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  /**
   * Logout
   */
  onLogout(e) {
    e.preventDefault();

    this.auth.RevokeSoffid(this.getNombreUsuario()).subscribe( data =>{
      console.log("Estoy saliendo...");
      this.auth.logout();
      this.router.navigate(['/auth/login']);
    },error =>{
      console.log("Ocurrio un error en el deslogueo");
      console.log(error);
    })

    
    
    
    // localStorage.removeItem('isLoggedin');

    // if (!localStorage.getItem('isLoggedin')) {
    //   this.router.navigate(['/auth/login']);
    // }
  }

  buscarNoticia( formBuscador: NgForm ) {

    if ( formBuscador.invalid ){ return; }
    
    console.log(formBuscador);

    console.log(this.buscador.buscador);

    //this.router.navigateByUrl('/dashboard');

    // this.router.navigate([`/resultado-buscador/${this.buscador.buscador}`]);
    this.router.navigateByUrl('/resultado-buscador/' + this.buscador.buscador);
  }

  getNombreUsuario(){
    return this.auth.getNombreUsuario();
  }

}

import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { BuscadorModel } from '../../../core/models/buscador-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buscador: BuscadorModel;

  constructor(
    @Inject(DOCUMENT) private document: Document, 
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscador = new BuscadorModel();
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
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }

  buscarNoticia( formBuscador: NgForm ) {

    if ( formBuscador.invalid ){ return; }
    
    console.log(formBuscador);

    console.log(this.buscador.buscador);

    //this.router.navigateByUrl('/dashboard');

    // this.router.navigate([`/resultado-buscador/${this.buscador.buscador}`]);
    this.router.navigateByUrl('/resultado-buscador/' + this.buscador.buscador);
  }

}

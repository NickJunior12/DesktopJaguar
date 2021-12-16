import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NoticiaDetalleComponent } from './noticia-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: NoticiaDetalleComponent
  }
]

@NgModule({
  declarations: [NoticiaDetalleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoticiaDetalleModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BeneficioDetalleComponent } from './beneficio-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficioDetalleComponent
  }
]

@NgModule({
  declarations: [BeneficioDetalleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BeneficioDetalleModule { }
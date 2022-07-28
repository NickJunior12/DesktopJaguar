import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BeneficiosComponent } from './beneficios.component';

const routes: Routes = [
  {
    path: '',
    component: BeneficiosComponent
  }
]

@NgModule({
  declarations: [BeneficiosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class BeneficiosModule { }
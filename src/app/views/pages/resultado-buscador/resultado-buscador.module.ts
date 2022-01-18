import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ResultadoBuscadorComponent } from './resultado-buscador.component';

const routes: Routes = [
  {
    path: '',
    component: ResultadoBuscadorComponent
  }
]

@NgModule({
  declarations: [ResultadoBuscadorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ResultadoBuscadorModule { }
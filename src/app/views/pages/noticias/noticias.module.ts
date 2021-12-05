import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NoticiasComponent } from './noticias.component';

const routes: Routes = [
  {
    path: '',
    component: NoticiasComponent
  }
]

@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class NoticiasModule { }

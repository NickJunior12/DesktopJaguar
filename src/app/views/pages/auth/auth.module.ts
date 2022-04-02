import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AuthssoComponent } from './authsso/authsso.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'authsso',
        component: AuthssoComponent
      }
    ]
  },
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthComponent, AuthssoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AuthModule { }

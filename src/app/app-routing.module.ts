import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserCrearComponent } from './auth/user/user-crear/user-crear.component';
import { UserListarComponent } from './auth/user/user-listar/user-listar.component';
import { TrabajadorListarComponent } from './trabajador/trabajador-listar/trabajador-listar.component';
import { TrabajadorCrearComponent } from './trabajador/trabajador-crear/trabajador-crear.component';


  const routes : Routes = [
    {path: 'login',component: LoginComponent},
    {path: 'user/crear',component: UserCrearComponent},
    {path: 'user/listar',component: UserListarComponent},
    {path: 'trabajador/listar',component: TrabajadorListarComponent},
    {path: 'trabajador/crear',component: TrabajadorCrearComponent}
  ]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserCrearComponent } from './auth/user/user-crear/user-crear.component';
import { UserListarComponent } from './auth/user/user-listar/user-listar.component';
import { TrabajadorListarComponent } from './trabajador/trabajador-listar/trabajador-listar.component';
import { TrabajadorCrearComponent } from './trabajador/trabajador-crear/trabajador-crear.component';
import { VehiculoCrearComponent } from './vehiculo/vehiculo-crear/vehiculo-crear.component';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';
import { CargoCrearComponent } from './cargo/cargo-crear/cargo-crear.component';
import { ViajeComponent } from './viaje/viaje.component';
import { ConductorCrearComponent } from './conductor/conductor-crear/conductor-crear.component';
import { ConductorListarComponent } from './conductor/conductor-listar/conductor-listar.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Inicio',
  },
  {
    path: 'user/crear',
    component: UserCrearComponent,
    title: 'User'
  },

  {
    path: 'trabajador/listar',
    component: TrabajadorListarComponent,
    title: 'Trabajador'
  },
  {
    path: 'trabajador/crear',
    component: TrabajadorCrearComponent,
    title: 'Trabajador'
  },
  {
    path: 'vehiculo/listar',
    component: VehiculoListarComponent,
    title: 'Vehiculo'
  },
  {
    path: 'vehiculo/crear',
    component: VehiculoCrearComponent,
    title: 'Vehiculo'
  },
  {
    path: 'conductor/crear',
    component: ConductorCrearComponent,
    title: 'Conductor'
  },
  {
    path: 'conductor/listar',
    component: ConductorListarComponent,
    title: 'Conductor'
  },
  {
    path: 'cargo/crear',
    component: CargoCrearComponent,
    title: 'Cargo'
  },
  {
    path: 'viaje',
    component: ViajeComponent,
    title: 'Viaje'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }

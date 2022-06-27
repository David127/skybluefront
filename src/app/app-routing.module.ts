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
import { VehiculoActualizarComponent } from './vehiculo/vehiculo-actualizar/vehiculo-actualizar.component';
import { TrabajadorActualizarComponent } from './trabajador/trabajador-actualizar/trabajador-actualizar.component';
import { ConductorActualizarComponent } from './conductor/conductor-actualizar/conductor-actualizar.component';
import { CargoListarComponent } from './cargo/cargo-listar/cargo-listar.component';
import { CargoActualizarComponent } from './cargo/cargo-actualizar/cargo-actualizar.component';
import { PropietarioCrearComponent } from './propietario/propietario-crear/propietario-crear.component';
import { PropietarioListarComponent } from './propietario/propietario-listar/propietario-listar.component';
import { PropietarioActualizarComponent } from './propietario/propietario-actualizar/propietario-actualizar.component';
import { EmpresaActualizarComponent } from './empresa/empresa-actualizar/empresa-actualizar.component';
import { EmpresaCrearComponent } from './empresa/empresa-crear/empresa-crear.component';
import { EmpresaListarComponent } from './empresa/empresa-listar/empresa-listar.component';


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
    path: 'trabajador/actualizar',
    component: TrabajadorActualizarComponent,
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
    path: 'vehiculo/actualizar',
    component: VehiculoActualizarComponent,
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
    path: 'conductor/actualizar',
    component: ConductorActualizarComponent,
    title: 'Conductor'
  },
  {
    path: 'cargo/crear',
    component: CargoCrearComponent,
    title: 'Cargo'
  },
  {
    path: 'cargo/listar',
    component: CargoListarComponent,
    title: 'Cargo'
  },
  {
    path: 'cargo/actualizar',
    component: CargoActualizarComponent,
    title: 'Cargo'
  },
  {
    path: 'propietario/crear',
    component: PropietarioCrearComponent,
    title: 'Propietario'
  },
  {
    path: 'propietario/listar',
    component: PropietarioListarComponent,
    title: 'Propietario'
  },
  {
    path: 'propietario/actualizar',
    component: PropietarioActualizarComponent,
    title: 'Propietario'
  },
  {
    path: 'empresa/crear',
    component: EmpresaCrearComponent,
    title: 'Empresa'
  },
  {
    path: 'empresa/listar',
    component: EmpresaListarComponent,
    title: 'Empresa'
  },
  {
    path: 'empresa/actualizar',
    component: EmpresaActualizarComponent,
    title: 'Empresa'
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

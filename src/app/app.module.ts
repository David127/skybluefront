import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TrabajadorListarComponent } from './trabajador/trabajador-listar/trabajador-listar.component';
import { TrabajadorCrearComponent } from './trabajador/trabajador-crear/trabajador-crear.component';
import { VehiculoCrearComponent } from './vehiculo/vehiculo-crear/vehiculo-crear.component';
import { VehiculoListarComponent } from './vehiculo/vehiculo-listar/vehiculo-listar.component';
import { LoginComponent } from './auth/login/login.component';
import { UserCrearComponent } from './auth/user/user-crear/user-crear.component';
import { UserListarComponent } from './auth/user/user-listar/user-listar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CargoCrearComponent } from './cargo/cargo-crear/cargo-crear.component';
import { ViajeComponent } from './viaje/viaje.component';
import { MenuComponent } from './menu/menu.component';
import { ConductorCrearComponent } from './conductor/conductor-crear/conductor-crear.component';
import { ConductorListarComponent } from './conductor/conductor-listar/conductor-listar.component';
import { VehiculoActualizarComponent } from './vehiculo/vehiculo-actualizar/vehiculo-actualizar.component';
import { ConductorActualizarComponent } from './conductor/conductor-actualizar/conductor-actualizar.component';
import { CargoActualizarComponent } from './cargo/cargo-actualizar/cargo-actualizar.component';
import { CargoListarComponent } from './cargo/cargo-listar/cargo-listar.component';
import { PropietarioListarComponent } from './propietario/propietario-listar/propietario-listar.component';
import { PropietarioCrearComponent } from './propietario/propietario-crear/propietario-crear.component';
import { PropietarioActualizarComponent } from './propietario/propietario-actualizar/propietario-actualizar.component';
import { interceptorProvider } from './interceptor/login.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { TrabajadorActualizarComponent } from './trabajador/trabajador-actualizar/trabajador-actualizar.component';


@NgModule({
  declarations: [
    AppComponent,
    TrabajadorListarComponent,
    TrabajadorCrearComponent,
    TrabajadorActualizarComponent,
    VehiculoCrearComponent,
    VehiculoListarComponent,
    ConductorCrearComponent,
    ConductorListarComponent,
    LoginComponent,
    UserCrearComponent,
    UserListarComponent,
    CargoCrearComponent,
    ViajeComponent,
    MenuComponent,
    VehiculoActualizarComponent,
    ConductorActualizarComponent,
    CargoActualizarComponent,
    CargoListarComponent,
    PropietarioListarComponent,
    PropietarioCrearComponent,
    PropietarioActualizarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

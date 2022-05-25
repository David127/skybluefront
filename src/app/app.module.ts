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

@NgModule({
  declarations: [
    AppComponent,
    TrabajadorListarComponent,
    TrabajadorCrearComponent,
    VehiculoCrearComponent,
    VehiculoListarComponent,
    LoginComponent,
    UserCrearComponent,
    UserListarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

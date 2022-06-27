import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from '../models/conductor';
import { Vehiculo } from '../models/vehiculo';
import { Viaje } from '../models/viaje';
import { CargoService } from '../service/cargo.service';
import { ConductorService } from '../service/conductor.service';
import { TokenService } from '../service/token.service';
import { TrabajadorService } from '../service/trabajador.service';
import { UbigeoService } from '../service/ubigeo.service';
import { VehiculoService } from '../service/vehiculo.service';
import { ViajeService } from '../service/viaje.service';
import { NotificationService } from '../utils/notification.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {
  viajes: Viaje[] = [];
  vehiculos: Vehiculo[] = [];
  conductores: Conductor[] = [];
  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  page = 1;
  pageSize = 15;
  viaje: Viaje = {
    id: 0,
    vehiculo: {
      id: 0
    }
  }
  conductorSelect: String[];

  constructor(
    private noficacionService: NotificationService,
    private router: Router,
    private conductorService: ConductorService,
    private viajeService: ViajeService,
    private vehiculoService: VehiculoService
  ) { }



  ngOnInit(): void {
    this.ListarViajes();
    this.ListaVehiculo();
    this.ListaConductor();
  }

  VehiculoRegistrar() {
    this.vehiculoService.vehiculoRegistrar(this.viaje).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")

      })
      .catch(err => {
        // if (err.status === 401) {
        //   this.tokenService.logOut();
        //   this.router.navigate(['/login'])
        // }
     
      })
  }



  ListarViajes() {
    this.viajeService.viajeListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.viajes = data.data;
        this.isFirst = data.pagination.isFirst;
        this.isLast = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });

  }

  ListaVehiculo() {
    this.vehiculoService.vehiculoListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.vehiculos = data.data;
        this.isFirst = data.pagination.isFirst;
        this.isLast = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        console.log(error);
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });
  }

  ListaConductor() {
    this.conductorService.conductorListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.conductores = data.data;
        this.isFirst = data.pagination.isFirst;
        this.isLast = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        console.log(error);
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });
  }



}

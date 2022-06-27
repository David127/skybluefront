import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from '../models/conductor';
import { Ruta } from '../models/ruta';
import { Vehiculo } from '../models/vehiculo';
import { Viaje } from '../models/viaje';
import { CargoService } from '../service/cargo.service';
import { ConductorService } from '../service/conductor.service';
import { RutaService } from '../service/ruta.service';
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
  rutas: Ruta[] = [];

  today = new Date();
  hoy =  formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-PE', '-0500');
  

  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  page = 1;
  pageSize = 15;
  viaje: Viaje = {
    id: 0,
    fecha:this.today,
    horaRegistro:this.hoy.slice(10),
    vehiculo: {
      id: 0,
      ruta: {
        id: 1
      }
    },
  }
  conductorSelect: String[];

  constructor(
    private noficacionService: NotificationService,
    private router: Router,
    private conductorService: ConductorService,
    private viajeService: ViajeService,
    private vehiculoService: VehiculoService,
    private rutaService: RutaService,
    private tokenService: TokenService
  ) { }



  ngOnInit(): void {
    this.ListarViajes();
    this.ListaVehiculo();
    this.ListaConductor();
  }

  buscarViaje(viaje) {

    try {
      var today = new Date();
      var jstoday = '';
      jstoday = formatDate(today, 'dd-MM-yyyy hh:mm:ss a', 'en-PE', '-0500');
      viaje.horaSalida = jstoday.slice(10)

      this.viajeService.viajeActualizar(viaje).forEach(
        data => {
          this.noficacionService.showSuccess(data.data.message, "Despachado")
          this.ListarViajes();
        })
        .catch(err => {
          if (err.status === 401) {
            this.tokenService.logOut();
            this.router.navigate(['/login'])
          }

        })
    } catch (e) { }

  }

  VehiculoRegistrar() {
    this.viajeService.viajeRegistrar(this.viaje).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.ListarViajes();
      })
      .catch(err => {
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }

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

  ListarRuta() {
    this.rutaService.rutaListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.rutas = data.data;
        this.isFirst = data.pagination.isFirst;
        this.isLast = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
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

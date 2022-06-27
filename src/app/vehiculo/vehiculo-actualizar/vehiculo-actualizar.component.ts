import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ruta } from 'src/app/models/ruta';
import { Vehiculo } from 'src/app/models/vehiculo';
import { RutaService } from 'src/app/service/ruta.service';
import { TokenService } from 'src/app/service/token.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-vehiculo-actualizar',
  templateUrl: './vehiculo-actualizar.component.html',
  styleUrls: ['./vehiculo-actualizar.component.css']
})
export class VehiculoActualizarComponent implements OnInit {

  ruta: Ruta[] = [];
  vehiculos: Vehiculo ={
   
    id: 0,
    placa: '',
    padron: '',
    clase: '',
    modelo: '',
    tarjeta_propiedad: '',
    anioFabricacion: '',
    nroMotor: '',
    pesoNeto: 0,
    pesoBruto: 0,
    marca: '',
    nroAsientos: 0,
    nroPasajeros: 0,
    tipoCombustible: 0,
    carroceria: '',
    color: '',
    numeroSerieMotor: '',
    numeroCilindros: 0,
    numeroRuedas: 0,
    longitud: 0,
    altura: 0,
    ancho: 0,
    cargaUtil: 0,
    nroEjes: 0,
    kilomentraje: 0,
    ruta: {
      id: 1
    }, 
  };

  objVehiculo = this.vehiculos;

  constructor(
    private rutaService: RutaService,
    private vehiculoService: VehiculoService,    
    private router: Router,   
    private tokenService: TokenService,
    private noficacionService: NotificationService
    ) { }

  ngOnInit(): void {
    this.Editar();
    this.cargarRuta()
  }

  
  actualizar() {
    console.log(this.vehiculos)
    this.vehiculoService.vehiculoActualizar(this.vehiculos).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/vehiculo/listar']);

      })
      .catch(err => {
        // console.log(err);
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
      })
  }

  Editar() {
    let vehiculo = localStorage.getItem('vehiculo');
    this.vehiculos = JSON.parse(vehiculo)
  }


  cargarRuta() {
    var page = 1;
    var pageSize = 100;
    this.rutaService.rutaListar(page,pageSize).subscribe(
      data => {
        console.log("Data de Ruta")
        this.ruta = data.data
      console.log(data)
      }
    ), err => {
      if (err.error === null) {
        this.tokenService.logOut();
        this.router.navigate(['/login'])
      }
     
    }
  }


}

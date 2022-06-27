import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { Ruta } from 'src/app/models/ruta';
import { RutaService } from 'src/app/service/ruta.service';

@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.component.html',
  styleUrls: ['./vehiculo-crear.component.css']
})
export class VehiculoCrearComponent implements OnInit {

  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
 
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

  constructor(
    private rutaService: RutaService,
    private vehiculoService: VehiculoService,    
    private router: Router,   
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.cargarRuta()
  }

  
  registrar() {
    this.vehiculoService.vehiculoRegistrar(this.vehiculos).subscribe(
      data => {
          this.router.navigate(['/vehiculo/listar']);
        
      }, err => {
        // console.log(err);
        if (err.error === null) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
        this.errMsj = err.error.mensaje || err.error.mesaje;
      }
    )
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
      this.errMsj = err.error.mensaje || err.error.mesaje;
     
    }
  }


}

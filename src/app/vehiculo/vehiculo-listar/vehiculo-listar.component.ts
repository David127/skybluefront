import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo';
import { TokenService } from 'src/app/service/token.service';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  vehiculo: Vehiculo = {
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
  }

  roles: string[];
  isAdmin = false;
  page = 1;
  pageSize = 10;

  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  estado = 'activo';

  constructor(private vehiculoService: VehiculoService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarVehiculo()
  }

  Nuevo(){
    this.router.navigate(['vehiculo/crear'])
  }

  cargarVehiculo() {
    this.vehiculoService.vehiculoListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.vehiculos        = data.data;
        this.isFirst          = data.pagination.isFirst;
        this.isLast           = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        console.log(error);
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });

  }


  buscarVehiculo(v: Vehiculo) {
    localStorage.setItem("vehiculo", JSON.stringify(v));
    this.router.navigate(["/vehiculo/actualizar"]);
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarVehiculo();
    }
  }
  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarVehiculo();
    }
  }

}

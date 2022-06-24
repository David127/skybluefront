import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Trabajador } from 'src/app/models/trabajador';
import { Ubigeo } from 'src/app/models/ubigeo';
import { CargoService } from 'src/app/service/cargo.service';
import { TokenService } from 'src/app/service/token.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';

@Component({
  selector: 'app-trabajador-crear',
  templateUrl: './trabajador-crear.component.html',
  styleUrls: ['./trabajador-crear.component.css']
})
export class TrabajadorCrearComponent implements OnInit {
  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
  // variables para enviar a las clases
  cargos: Cargo[] = [];
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];

  trabajadores: Trabajador = {
    cargo: {
      id: 1
    },
    ubigeo: {
      id: 0,
      departamento: "-1",
      provincia: "-1",
      distrito: "-1",
    }
  };

  constructor(
    private trabajadorService: TrabajadorService,
  
    private router: Router,
    private ubigeoService: UbigeoService,
    private tokenService: TokenService,
    private cargoService: CargoService
  ) {
    this.ubigeoService.listarDepartamento().subscribe(
      response => this.departamentos = response
    )
   }

  ngOnInit(): void {
  
  }


  Guardar(modelVehiculo: Trabajador) {
    // this.vehiculoService.VehiculoSave(modelVehiculo);
  }


  cargaProvincia() {
    this.ubigeoService.listaProvincias(this.trabajadores.ubigeo?.departamento).subscribe(
      response => this.provincias = response
    );
  }

  cargaDistrito() {
    this.ubigeoService.listaDistritos(this.trabajadores.ubigeo?.departamento, this.trabajadores.ubigeo?.provincia).subscribe(
      response => this.distritos = response
    );
  }

  cargarCargo() {
    // this.cargoService.cargoListar().subscribe(
    //   response => this.cargos = response
    // )
  }
  
  
}

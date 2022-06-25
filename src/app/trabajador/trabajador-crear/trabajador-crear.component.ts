import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Trabajador } from 'src/app/models/trabajador';
import { Ubigeo } from 'src/app/models/ubigeo';
import { CargoService } from 'src/app/service/cargo.service';
import { TokenService } from 'src/app/service/token.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-trabajador-crear',
  templateUrl: './trabajador-crear.component.html',
  styleUrls: ['./trabajador-crear.component.css']
})
export class TrabajadorCrearComponent implements OnInit {
  // variables para enviar a las clases
  cargos: Cargo[] = [];
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];
  //
  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
  trabajadores: Trabajador = {
    id: 0,
    cargo: {
      id: 1
    },
    ubigeo: {
      id: 0,
      departamento: "-1",
      provincia: "-1",
      distrito: "-1",
    },
    sueldos: []
  };

  constructor(
    private trabajadorService: TrabajadorService,
    private noficacionService: NotificationService,
    private router: Router,
    private ubigeoService: UbigeoService,
    private tokenService: TokenService,
    private cargoService: CargoService
  ) {
    this.ubigeoService.listarDepartamento().forEach(
      response => this.departamentos = response
    ).catch((error: any) => {
      if (error.status == "401")
        noficacionService.showError("Sesion finalizada", "error");
    })
  }

  ngOnInit(): void {
    this.cargarCargo();
  }

  /**
   * A function that allows you to register a worker in the database.
   */

  registrar() {
    this.trabajadorService.trabajadorRegistrar(this.trabajadores).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/trabajador/listar']);

      })
      .catch(err => {
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
        this.errMsj = err.error.mensaje || err.error.mesaje;
      })
  }

  /**
   * It loads the provinces of the selected department.
   */
  cargaProvincia() {
    this.ubigeoService.listaProvincias(this.trabajadores.ubigeo?.departamento).forEach(
      response => this.provincias = response
    ).catch((error: any) => {
      console.error(error)
    })
  }

  /**
   * It loads the districts of the selected province.
   */
  cargaDistrito() {
    this.ubigeoService.listaDistritos(this.trabajadores.ubigeo?.departamento, this.trabajadores.ubigeo?.provincia).subscribe(
      response => this.distritos = response
    );
  }


  /**
   * It loads the cargo list
   */
  cargarCargo() {
    var page = 1;
    var pageSize = 100;
    this.cargoService.cargoListar(page, pageSize).forEach(
      data => {
        this.cargos = data.data
      }
    ).catch(err => {
      if (err.error === 401) {
        this.tokenService.logOut();
        this.router.navigate(['/login'])
      }
      this.errMsj = err.error.mensaje || err.error.mesaje;

    });
  }

}

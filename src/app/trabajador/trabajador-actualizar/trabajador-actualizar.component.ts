import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Sueldo } from 'src/app/models/sueldo';
import { Trabajador } from 'src/app/models/trabajador';
import { Ubigeo } from 'src/app/models/ubigeo';
import { CargoService } from 'src/app/service/cargo.service';
import { TokenService } from 'src/app/service/token.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-trabajador-actualizar',
  templateUrl: './trabajador-actualizar.component.html',
  styleUrls: ['./trabajador-actualizar.component.css']
})
export class TrabajadorActualizarComponent implements OnInit {
  // variables para enviar a las clases
  cargos: Cargo[] = [];
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];
  sueldo: Sueldo = {}
  //
  sueldos: Sueldo[];
  trabajadores: Trabajador = {
    ubigeo: {
      id: 1
    }
  }
  objTrabajador = this.trabajadores;

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
    this.Editar();
    this.cargarCargo();
    this.cargaProvincia();
    this.cargaDistrito();
    this.ListarSueldos();
  }

  /**
   * The function Editar() is called when the user clicks on the button "Editar" in the HTML file. The
   * function Editar() is used to get the information of the worker that the user wants to edit
   */
  Editar() {
    let trabajador = localStorage.getItem('trabajador');
    this.trabajadores = JSON.parse(trabajador)
  }
  /**
   * It updates the data of the employee.
   */
  Actualizar() {
    this.trabajadorService.trabajadorActualizar(this.trabajadores).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/trabajador/listar']);

      })
      .catch(err => {
        // console.log(err);
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
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
    if (this.trabajadores.ubigeo?.departamento == "" || this.trabajadores.ubigeo?.provincia == "") {
      this.distritos = [];
    } else {
      this.ubigeoService.listaDistritos(this.trabajadores.ubigeo?.departamento, this.trabajadores.ubigeo?.provincia).subscribe(
        response => this.distritos = response
      );
    }
    this.trabajadores!.ubigeo!.id = -1;
  }
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

    });
  }
  ListarSueldos() {
    let trabajador = JSON.parse(localStorage.getItem('trabajador'));
    this.sueldos = trabajador.sueldos;
  }

  cargarSueldo(s) {
    this.sueldo = s;
  }
  sueldoActualizar(sueld) {
    var s = this.trabajadores.sueldos.find(s => s.id === sueld.id)
    s.base = sueld.base;
    s.anio = sueld.anio;
    s.id = sueld.id;
    s.turno = sueld.turno;
    

  }
  sueldoNuevo(sueld){
    this.sueldos.push(sueld);
    this.trabajadores.sueldos.push(sueld);
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Propietario } from 'src/app/models/propietario';
import { Ubigeo } from 'src/app/models/ubigeo';
import { CargoService } from 'src/app/service/cargo.service';
import { PropietarioService } from 'src/app/service/propietario.service';
import { TokenService } from 'src/app/service/token.service';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-propietario-actualizar',
  templateUrl: './propietario-actualizar.component.html',
  styleUrls: ['./propietario-actualizar.component.css']
})
export class PropietarioActualizarComponent implements OnInit {

  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];

  propietarios: Propietario = {
    id: 0,
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    tipoDocumento: "",
    nroDocumento: "",
    telefono: "",
    correo: "",
    direccion: "",
    sexo: "",
    estadoCivil: "",
    fechaNacimiento: "",
    fechaIngreso: "",
    fechaSalida: "",
    observacion: "",
    estado: "",
    ubigeo: {
      id: 1
    }
  }

  objPropietario = this.propietarios;

  constructor(
    private propietarioService: PropietarioService,
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
    this.cargaProvincia();
    this.cargaDistrito();
  }

  Editar() {
    let propietario = localStorage.getItem('propietario');
    this.propietarios = JSON.parse(propietario)
  }

  cargaProvincia() {
    this.ubigeoService.listaProvincias(this.propietarios.ubigeo?.departamento).forEach(
      response => this.provincias = response
    ).catch((error: any) => {
      console.error(error)
    })
  }

  cargaDistrito() {
    if (this.propietarios.ubigeo?.departamento == "" || this.propietarios.ubigeo?.provincia == "") {
      this.distritos = [];
    } else {
      this.ubigeoService.listaDistritos(this.propietarios.ubigeo?.departamento, this.propietarios.ubigeo?.provincia).subscribe(
        response => this.distritos = response
      );
    }
    this.propietarios!.ubigeo!.id = -1;
  }

  Actualizar() {
    this.propietarioService.propietarioActualizar(this.propietarios).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/propietario/listar']);

      })
      .catch(err => {
        // console.log(err);
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
      })
  }

}

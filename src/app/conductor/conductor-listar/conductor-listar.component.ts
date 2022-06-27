import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conductor } from 'src/app/models/conductor';
import { TokenService } from 'src/app/service/token.service';
import { ConductorService } from 'src/app/service/conductor.service';

@Component({
  selector: 'app-conductor-listar',
  templateUrl: './conductor-listar.component.html',
  styleUrls: ['./conductor-listar.component.css']
})
export class ConductorListarComponent implements OnInit {

  conductores: Conductor[] = [];
  conductor: Conductor = {
    id: 0,
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    tipoDocumento: '',
    nroDocumento: '',
    telefono: '',
    correo: '',
    direccion: '',
    sexo: '',
    estadoCivil: '',
    fechaNacimiento: '',
    observacion: '',
    estado: '',
    nroLicenciaCorrelativo: '',
    claseCategoria: '',
    estadoLicencia: '',
    fechaExpedicion: '',
    fechaRevalidacion: '',
    restricciones: ''
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

  constructor(private conductorService: ConductorService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.cargarConductor()
  }
  Nuevo(){
    this.router.navigate(['conductor/crear'])
  }
  cargarConductor() {
    this.conductorService.conductorListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.conductores      = data.data;
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

  buscarConductor(c: Conductor){
    localStorage.setItem("conductor", JSON.stringify(c));
    this.router.navigate(["/conductor/actualizar"]);
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarConductor();
    }
  }
  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarConductor();
    }
  }
}

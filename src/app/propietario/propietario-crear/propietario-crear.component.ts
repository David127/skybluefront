import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { Ubigeo } from 'src/app/models/ubigeo';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/service/propietario.service';

@Component({
  selector: 'app-propietario-crear',
  templateUrl: './propietario-crear.component.html',
  styleUrls: ['./propietario-crear.component.css']
})
export class PropietarioCrearComponent implements OnInit {

  distritos: Ubigeo[] = [];
  departamentos: string[] = [];
  provincias: string[] = [];

  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
  propietarios: Propietario = {
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
    fechaIngreso: '',
    fechaSalida: '',
    observacion: '',
    estado: '',
    ubigeo: {
      id: 0,
      departamento: "-1",
      provincia: "-1",
      distrito: "-1",
    },
  };

  constructor(
    private propietarioService: PropietarioService,
    private noficacionService: NotificationService,
    private router: Router,
    private ubigeoService: UbigeoService,
    private tokenService: TokenService
  ) { 
    this.ubigeoService.listarDepartamento().forEach(
      response => this.departamentos = response
    ).catch((error: any) => {
      if (error.status == "401")
        noficacionService.showError("Sesion finalizada", "error");
    })  
  }
  

  ngOnInit(): void {
  }

  registrar() {
    this.propietarioService.propietarioRegistrar(this.propietarios).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/propietario/listar']);

      })
      .catch(err => {
        if (err.status === 401) {
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
        this.errMsj = err.error.mensaje || err.error.mesaje;
      })
  }


  cargaProvincia() {
    this.ubigeoService.listaProvincias(this.propietarios.ubigeo?.departamento).forEach(
      response => this.provincias = response
    ).catch((error: any) => {
      console.error(error)
    })
  }

  cargaDistrito() {
    this.ubigeoService.listaDistritos(this.propietarios.ubigeo?.departamento, this.propietarios.ubigeo?.provincia).subscribe(
      response => this.distritos = response
    );
  }
}

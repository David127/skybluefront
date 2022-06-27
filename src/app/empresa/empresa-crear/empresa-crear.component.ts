import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';
import { Ubigeo } from 'src/app/models/ubigeo';
import { UbigeoService } from 'src/app/service/ubigeo.service';
import { Ruta } from 'src/app/models/ruta';
import { RutaService } from 'src/app/service/ruta.service';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-empresa-crear',
  templateUrl: './empresa-crear.component.html',
  styleUrls: ['./empresa-crear.component.css']
})
export class EmpresaCrearComponent implements OnInit {

  rutas: Ruta[] = [];
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
  empresas: Empresa = {
    id: 0,
    ruta: {
      id: 1
    },
    ubigeo: {
      id: 0,
      departamento: "-1",
      provincia: "-1",
      distrito: "-1",
    },
  };

  constructor(
    private empresaService: EmpresaService,
    private noficacionService: NotificationService,
    private router: Router,
    private ubigeoService: UbigeoService,
    private tokenService: TokenService,
    private rutaService: RutaService
  ) {     
    this.ubigeoService.listarDepartamento().forEach(
    response => this.departamentos = response
  ).catch((error: any) => {
    if (error.status == "401")
      noficacionService.showError("Sesion finalizada", "error");
  })
}

  ngOnInit(): void {
    this.cargarRuta();
  }

  cargarRuta() {
    var page = 1;
    var pageSize = 100;
    this.rutaService.rutaListar(page, pageSize).forEach(
      data => {
        this.rutas = data.data
      }
    ).catch(err => {
      if (err.error === 401) {
        this.tokenService.logOut();
        this.router.navigate(['/login'])
      }
      this.errMsj = err.error.mensaje || err.error.mesaje;

    });
  }

  registrar() {
    this.empresaService.empresaRegistrar(this.empresas).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/empresa/listar']);

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
    this.ubigeoService.listaProvincias(this.empresas.ubigeo?.departamento).forEach(
      response => this.provincias = response
    ).catch((error: any) => {
      console.error(error)
    })
  }

  /**
   * It loads the districts of the selected province.
   */
  cargaDistrito() {
    this.ubigeoService.listaDistritos(this.empresas.ubigeo?.departamento, this.empresas.ubigeo?.provincia).subscribe(
      response => this.distritos = response
    );
  }

}

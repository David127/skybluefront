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
  selector: 'app-empresa-actualizar',
  templateUrl: './empresa-actualizar.component.html',
  styleUrls: ['./empresa-actualizar.component.css']
})
export class EmpresaActualizarComponent implements OnInit {

  rutas: Ruta[] = [];
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];
  //
  empresas: Empresa = {
    ubigeo: {
      id: 1
    }
  }
  objEmpresa = this.empresas;

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
    this.Editar();
    this.cargarRuta();
    this.cargaProvincia();
    this.cargaDistrito();
  }

  cargaProvincia() {
    this.ubigeoService.listaProvincias(this.empresas.ubigeo?.departamento).forEach(
      response => this.provincias = response
    ).catch((error: any) => {
      console.error(error)
    })
  }

  cargaDistrito() {
    if (this.empresas.ubigeo?.departamento == "" || this.empresas.ubigeo?.provincia == "") {
      this.distritos = [];
    } else {
      this.ubigeoService.listaDistritos(this.empresas.ubigeo?.departamento, this.empresas.ubigeo?.provincia).subscribe(
        response => this.distritos = response
      );
    }
    this.empresas!.ubigeo!.id = -1;
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

    });
  }

  Editar(){
    let empresa = localStorage.getItem('empresa');
    this.empresas = JSON.parse(empresa)
  }

  Actualizar() {
    console.log(this.empresas)
    this.empresaService.empresaActualizar(this.empresas).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/empresa/listar']);

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

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
  ) { }

  ngOnInit(): void {
    this.Editar();
    this.cargarRuta();
    this.cargarDistrito();
  }
  cargarDistrito() {
          
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

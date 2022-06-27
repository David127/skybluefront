import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { TokenService } from 'src/app/service/token.service';
import { EmpresaService } from 'src/app/service/empresa.service';
import { Ubigeo } from 'src/app/models/ubigeo';
import { Ruta } from 'src/app/models/ruta';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent implements OnInit {
  empresas: Empresa[] = [];
  ubigeo: Ubigeo = {

  }
  ruta: Ruta = {
    
  }
  empresa: Empresa = {

  }

  roles: string[];
  isAdmin = false;
  page = 1;
  pageSize = 15;

  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  estado = 'activo';

  constructor(private empresaService: EmpresaService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    this.ListarEmpresa()
  }
  Nuevo(){
    this.router.navigate(['empresa/crear'])
  }
  
  ListarEmpresa() {
    this.empresaService.empresaListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.empresas = data.data;
        this.isFirst = data.pagination.isFirst;
        this.isLast = data.pagination.isLast;
        this.numberOfElements = data.pagination.numberOfElements;
      }).catch((error: any) => {
        console.log(error);
        if (error.error.error == "Unauthorized") {
          alert("usted no esta autorizado")

        }
      });
  }

  buscarEmpresa(e: Empresa) {
    localStorage.setItem("empresa", JSON.stringify(e));
    this.router.navigate(["/empresa/actualizar"]);
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.ListarEmpresa();
    }
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.ListarEmpresa();
    }
  }


}

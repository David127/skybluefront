import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { TokenService } from 'src/app/service/token.service';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-cargo-listar',
  templateUrl: './cargo-listar.component.html',
  styleUrls: ['./cargo-listar.component.css']
})
export class CargoListarComponent implements OnInit {

  cargos: Cargo[] = [];

  roles: string[];
  isAdmin = false;
  page = 1;
  pageSize = 10;

  totalPages: number;
  numberOfElements: number;
  isFirst = false;
  isLast = false;
  estado = 'activo';

  constructor(private cargoService: CargoService, private tokenService: TokenService, private router: Router) { 

  }

  ngOnInit(): void {
    this.cargarCargo()
  }
  Nuevo(){
    this.router.navigate(['cargo/crear'])
  }

  cargarCargo() {
    this.cargoService.cargoListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.cargos            = data.data;
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

  
  buscarCargo(c: Cargo) {
    localStorage.setItem("cargo", JSON.stringify(c));
    this.router.navigate(["/cargo/actualizar"]);
  }


  
  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarCargo();
    }
  }
  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarCargo();
    }
  }


}

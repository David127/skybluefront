import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { Trabajador } from 'src/app/models/trabajador';
import { TokenService } from 'src/app/service/token.service';
import { TrabajadorService } from 'src/app/service/trabajador.service';

@Component({
  selector: 'app-trabajador-listar',
  templateUrl: './trabajador-listar.component.html',
  styleUrls: ['./trabajador-listar.component.css']
})
export class TrabajadorListarComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  cargo: Cargo = {

  }
  trabajador: Trabajador = {

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

  constructor(private trabajadorService: TrabajadorService, private tokenService: TokenService, private router: Router) {

  }

  ngOnInit(): void {
    this.cargarTrabajador()
  }

 /**
  * It loads the list of workers
  */
  cargarTrabajador() {
    this.trabajadorService.trabajadorListar(this.page, this.pageSize).forEach(
      (data: any) => {
        this.trabajadores     = data.data;
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

/**
 * If the current page is not the first page, then decrement the page number and reload the data
 */
  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarTrabajador();
    }
  }
/**
 * It increments the page number and calls the cargarTrabajador() function.
 */
  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarTrabajador();
    }
  }

}

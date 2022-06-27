import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/service/cargo.service';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';


@Component({
  selector: 'app-cargo-crear',
  templateUrl: './cargo-crear.component.html',
  styleUrls: ['./cargo-crear.component.css']
})
export class CargoCrearComponent implements OnInit {
  user = new TokenService;
  isLogged: boolean = false;
  authorities: string[] = [];
  usuario: string = this.user.getUsername();
  errMsj: string;
  fecha = new Date();

  isDisabled: boolean = true;
  // variables para enviar a las clases
  
  cargos: Cargo = {
    id: 0,
    nombre: "",
    descripcion: "",
    responsable: ""
  };

  constructor(
    private cargoService: CargoService,
    private noficacionService: NotificationService,
    private router: Router,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    
  }
/**
 * A function that allows you to register a worker in the database.
 */

 registrar() {
  this.cargoService.cargoRegistrar(this.cargos).subscribe(
    data => {
      this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/cargo/listar']);
      
    }, err => {
      if (err.error === null) {
        this.tokenService.logOut();
        this.router.navigate(['/login'])
      }
      this.errMsj = err.error.mensaje || err.error.mesaje;
    })
}
}

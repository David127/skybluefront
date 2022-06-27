import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/service/cargo.service';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/utils/notification.service';

@Component({
  selector: 'app-cargo-actualizar',
  templateUrl: './cargo-actualizar.component.html',
  styleUrls: ['./cargo-actualizar.component.css']
})
export class CargoActualizarComponent implements OnInit {

  cargos: Cargo = {

  }
  objCargo = this.cargos;

  constructor(
    private noficacionService: NotificationService,
    private router: Router,
    private tokenService: TokenService,
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let cargo = localStorage.getItem('cargo')
    this.cargos = JSON.parse(cargo)
  }
  Actualizar(){
    this.cargoService.cargoActualizar(this.cargos).forEach(
      data => {
        this.noficacionService.showSuccess(data.data.message, "success")
        this.router.navigate(['/cargo/listar']);
      })
      .catch(err =>{
        if(err.status === 401){
          this.tokenService.logOut();
          this.router.navigate(['/login'])
        }
      })
  }

}

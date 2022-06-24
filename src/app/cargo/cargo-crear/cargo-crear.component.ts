import { Component, OnInit } from '@angular/core';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/service/cargo.service';

@Component({
  selector: 'app-cargo-crear',
  templateUrl: './cargo-crear.component.html',
  styleUrls: ['./cargo-crear.component.css']
})
export class CargoCrearComponent implements OnInit {

  modelCargo: Cargo = {
    id: 0,
    nombre: "",
    descripcion: "",
    responsable: ""
  };

  constructor(private cargoService: CargoService) { }

  ngOnInit(): void {
    
  }

/*
  Guardar(modelCargo) {
    this.cargoService.CargoSave(modelCargo).subscribe(() => {});
  }*/

}

import { Component, OnInit } from '@angular/core';
import { Trabajador } from 'src/app/models/trabajador';

@Component({
  selector: 'app-trabajador-crear',
  templateUrl: './trabajador-crear.component.html',
  styleUrls: ['./trabajador-crear.component.css']
})
export class TrabajadorCrearComponent implements OnInit {

  modelTrabajador: Trabajador;

  constructor() { }

  ngOnInit(): void {
  }

  Guardar(modelVehiculo: Trabajador) {
    // this.vehiculoService.VehiculoSave(modelVehiculo);
  }
}

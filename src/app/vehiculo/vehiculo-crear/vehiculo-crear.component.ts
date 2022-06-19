import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculoService } from 'src/app/service/vehiculo.service';

@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.component.html',
  styleUrls: ['./vehiculo-crear.component.css']
})
export class VehiculoCrearComponent implements OnInit {

  modelVehiculo: Vehiculo;

  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit(): void {
  }

  Guardar(modelVehiculo: Vehiculo) {
    this.vehiculoService.VehiculoSave(modelVehiculo);
  }

}

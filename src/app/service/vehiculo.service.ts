import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private httpclient: HttpClient) { }

  public VehiculoSave(vehiculo: Vehiculo) {
    return this.httpclient.post<Vehiculo>("http://localhost:8080/vehiculo/registrar", vehiculo);
  }

}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl = `${environment.API_URL}/vehiculo/`;
  constructor(private HttpClient: HttpClient) { }

  public vehiculoListar(page: number, pageSize: number): Observable<any> {

    let httpParams = new HttpParams(
      {
        fromObject: {
          pageSize: pageSize,
          page: page
        }
      }
    );

    return this.HttpClient.post<any>(this.apiUrl + 'listar',
      httpParams.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );

  }

  public vehiculoRegistrar(vehiculoNuevo: Vehiculo): Observable<any> {
    return this.HttpClient.post<any>(this.apiUrl + 'registrar', vehiculoNuevo);

  }

    public vehiculoActualizar(vehiculoNuevo: Vehiculo): Observable<any> {
      return this.HttpClient.put<any>(this.apiUrl + 'actualizar', vehiculoNuevo);
  
    }
  
}

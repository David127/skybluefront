import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private httpClient: HttpClient) { }

  public CargoSave(cargo: Cargo) {
    return this.httpClient.post<Cargo>("http://localhost:8080/cargo/registrar", cargo);
  }

  public CargoList(estado: string, page: number, size: number, order: string, asc: boolean) {

    let httpParams = new HttpParams(
      {
        fromObject: {
          page: page,
          estado: estado,
          order: order,
          asc: asc
        }
      }
    );

    return this.httpClient.post(
      "http://localhost:8080/cargo/listar",
      httpParams.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      }
    )
  }
}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})

export class CargoService {

	private apiUrl = `${environment.API_URL}/cargo/`;
  constructor(private HttpClient: HttpClient) { }

	public cargoListar( page: number, pageSize: number): Observable<any> {

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
	public cargoRegistrar(cargoNuevo: Cargo): Observable<any> {
		return this.HttpClient.post<any>(this.apiUrl + 'registrar', cargoNuevo);

	}
	public cargoActualizar(cargoNuevo: Cargo): Observable<any> {
		return this.HttpClient.put<any>(this.apiUrl + 'actualizar', cargoNuevo);

	}


}

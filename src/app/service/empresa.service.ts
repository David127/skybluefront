import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

	private apiUrl = `${environment.API_URL}/empresa/`;
	constructor(private HttpClient: HttpClient) { }

	public empresaListar(page: number, pageSize: number): Observable<any> {
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

	public empresaRegistrar(trabajadorNuevo: Empresa): Observable<any> {
		return this.HttpClient.post<any>(this.apiUrl + 'registrar', trabajadorNuevo);

	}

	public empresaActualizar(trabajadorNuevo: Empresa): Observable<any> {
		return this.HttpClient.put<any>(this.apiUrl + 'actualizar', trabajadorNuevo);

	}

}

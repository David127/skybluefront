import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conductor } from '../models/conductor';

@Injectable({
    providedIn: 'root'
})

export class ConductorService {

  private apiUrl = `${environment.API_URL}/conductor/`;
    constructor(private HttpClient: HttpClient){ }

    public conductorListar( page: number, pageSize: number): Observable<any>{
      
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

    public conductorRegistrar(conductorNuevo: Conductor): Observable<any> {
      return this.HttpClient.post<any>(this.apiUrl + 'registrar', conductorNuevo);
  
    }  
    public conductorActualizar(conductorNuevo: Conductor): Observable<any> {
      return this.HttpClient.post<any>(this.apiUrl + 'actualizar', conductorNuevo);
  
    }  
}

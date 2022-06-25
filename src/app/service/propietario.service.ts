import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private apiUrl = `${environment.API_URL}/propietario/`;
    constructor(private HttpClient: HttpClient){ }

    public propietarioListar( page: number, pageSize: number): Observable<any>{
      
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
}

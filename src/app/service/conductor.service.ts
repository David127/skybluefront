import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conductor } from "src/app/models/conductor";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ConductorService {
/*
    constructor(private httpclient: HttpClient){}

    public ConductorSave(conductor: Conductor){
        return this.httpclient.post<Conductor>("http://localhost:8080/conductor/registrar",conductor);
    }
    public ConductorList(estado: string, page: number, size: number, order: string, asc: boolean) {

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
    
        return this.httpclient.post(
          "http://localhost:8080/conductor/listar",
          httpParams.toString(),
          {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
          }
        )
    }*/
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
}

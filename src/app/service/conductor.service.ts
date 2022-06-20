import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Conductor } from "../models/conductor";

@Injectable({
    providedIn: 'root'
})

export class ConductorService {

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
    }
}

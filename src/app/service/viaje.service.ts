import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  private apiUrl = `${environment.API_URL}/viaje/`;
  constructor(private http: HttpClient) { }


  public viajeListar(page: number, pageSize: number): Observable<any> {

    let httpParams = new HttpParams(
      {
        fromObject: {
          pageSize: pageSize,
          page: page
        }
      }
    );

    return this.http.post<any>(this.apiUrl + 'listar',
      httpParams.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );

  }
}

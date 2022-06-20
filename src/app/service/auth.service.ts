import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = `${environment.API_URL}/auth/`;
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {

    let httpParams = new HttpParams();
    Object.keys(nuevoUsuario).forEach(function (key) {
      httpParams = httpParams.append(key, nuevoUsuario[key]);
    });
    return this.httpClient.post<any>(this.authURL + 'nuevo',
      httpParams.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  login(loginUsuario: LoginUsuario): Observable<JwtDto> {

    let httpParams = new HttpParams();
    Object.keys(loginUsuario).forEach(function (key) {
      httpParams = httpParams.append(key, loginUsuario[key]);
    });

    return this.httpClient.post<JwtDto>(this.authURL + 'login',
      httpParams.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}

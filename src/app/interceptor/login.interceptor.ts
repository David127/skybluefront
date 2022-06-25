import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { TokenService } from '../service/token.service';
import { LoaderService } from '../utils/loader.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    public loaderService: LoaderService,
    private router: Router
    ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    let intReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) })
    } else {
      this.router.navigate(['/auth/login']);
    }
    return next.handle(intReq).pipe(
      finalize(
        () => {
          this.loaderService.isLoading.next(false);
        }
      )
    ).pipe(catchError(this.ErrorHandling));
  }
  ErrorHandling(error: HttpErrorResponse) {
    if(error.status == 401){
      this.router.navigate(['/login'])
      this.tokenService.logOut();
    }
      
     
    return throwError(error)
  }
}
export const interceptorProvider = [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true}]

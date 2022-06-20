import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { TokenService } from '../service/token.service';
import { LoaderService } from '../utils/loader.service';

@Injectable({
  providedIn: 'root'
})
export class SkybInterceptorService  implements HttpInterceptor {
  constructor(
    private tokenService: TokenService,
    public loaderService: LoaderService,
    private router: Router
  ) { }
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
    // console.error(error);
    return throwError(error)
  }

}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: SkybInterceptorService, multi: true }]


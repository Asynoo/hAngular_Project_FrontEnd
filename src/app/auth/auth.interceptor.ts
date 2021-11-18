import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    });
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
          if (response.status === 401) {
            this.router.navigateByUrl('auth/login')
          }
          return throwError(response);
        }
      ));
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  //constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
    request = request.clone({
      setHeaders: {
        Authorization: 'fred' //`Bearer ${this.auth.getToken()}`
      }
    });
    console.log("HttpRequest headers:" + request.headers.keys());

    return next.handle(request)
            .catch(response => {
        if (response instanceof HttpErrorResponse) {
          console.log('Logging http error', response);
        }

        return Observable.throw(response);
      });
  }
}

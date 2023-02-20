import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let jwtToken: HttpRequest<any>;
   if(req.url === 'http://localhost:9999/auth/login' || req.url === 'http://localhost:9999/user/signup') {
      jwtToken = req.clone({
        setHeaders: { Authorization: `` }
      })
   }
   else {
    let token = sessionStorage.getItem('token');
    jwtToken = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    })
   }
   return next.handle(jwtToken);
  }
}
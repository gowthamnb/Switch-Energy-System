import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/user';

  authenticateUrl = 'http://localhost:9999/auth/login';

  login(loginData: Object): Observable<Login> {
    return this.http.post<Login>(this.authenticateUrl, loginData);
  }

  signUp(signUpData: Object): Observable<Object> {
    return this.http.post(this.url + '/signup', signUpData);
  }
}

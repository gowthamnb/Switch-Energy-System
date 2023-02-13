import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './types';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/user';

  // signUp(signUpData: Object): Observable<User> {
  //   return this.http.post<User>(this.url + '/signup', signUpData);
  // }

  signUp(signUpData: Object): Observable<any>{
    return this.http.post<any>(this.url + '/signup', signUpData);
  }
  
}

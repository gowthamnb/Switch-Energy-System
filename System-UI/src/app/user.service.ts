import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './types';
import { smartmeter } from './smartMeter';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/user';

  // signUp(signUpData: Object): Observable<User> {
  //   return this.http.post<User>(this.url + '/signup', signUpData);
  // }

  signUp(signUpData: Object): Observable<Object>{
    return this.http.post(this.url + '/signup', signUpData);
  }

  displayBills(userId: String): Observable<smartmeter> {
    return this.http.get<smartmeter>(this.url + '/' + userId +'/display');
  }
  
}

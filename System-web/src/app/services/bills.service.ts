import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/bills'

  // chargedBills(userId: string): Observable<> {
  //  return this.http.get(this.url+ '/calculate/', userId);
  // }
}

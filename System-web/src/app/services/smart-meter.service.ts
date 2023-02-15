import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartMeter } from '../interfaces/smartMeter';

@Injectable({
  providedIn: 'root'
})
export class SmartMeterService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/smart-meter';

  getSmartMeters(userId: string): Observable<SmartMeter[]> {
    return this.http.get<SmartMeter[]>(this.url + '/' + userId + '/display');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SmartMeter } from '../interfaces/smartMeter';
import { Provider } from '../interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class SmartMeterService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/smart-meter';

  getSmartMeters(userId: string): Observable<SmartMeter[]> {
    return this.http.get<SmartMeter[]>(this.url + '/' + userId + '/display');
  }

  enrollSmartMeter(userId: string, newSmartMeterProvider: Provider): Observable<SmartMeter>{
    console.log(newSmartMeterProvider);
    return this.http.post<SmartMeter>(this.url + '/' + userId + '/enroll', newSmartMeterProvider);
    
  }
}

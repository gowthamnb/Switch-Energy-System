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

  getAllSmartMeters(): Observable<SmartMeter[]>  {
    return this.http.get<SmartMeter[]>(this.url);
  }

  getSmartMetersRequests(): Observable<SmartMeter[]> {
    return this.http.get<SmartMeter[]>(this.url + '/requests');
  }

  acceptRequest(smartMeterId: String | null | undefined): Observable<string> {
    return this.http.put<string>(this.url + '/' + smartMeterId + '/approve', null);
  }

  declineRequest(smartMeterId: String | null | undefined): Observable<string> {
    return this.http.put<string>(this.url + '/' + smartMeterId + '/reject', null);
  }

  getSmartMeters(userId: string | null): Observable<SmartMeter[]> { 
    return this.http.get<SmartMeter[]>(this.url + '/' + userId + '/display');
  }

  enrollSmartMeter(userId: String | null | undefined, newSmartMeterProvider: String | null | undefined): Observable<SmartMeter>{
    return this.http.post<SmartMeter>(this.url + '/' + userId + '/enroll', newSmartMeterProvider);
  }

  switchProvider(smartMeterId: string, selectedSmartMeterProvider: Provider): Observable<SmartMeter> {
    return this.http.put<SmartMeter>(this.url + '/' + smartMeterId + '/switch-provider', selectedSmartMeterProvider);
  }


}

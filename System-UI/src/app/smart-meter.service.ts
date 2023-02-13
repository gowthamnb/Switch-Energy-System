import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SmartMeterService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9999/smart-meter';

  enrollSwitchMeter(enrollSwitchMeter: Object): Observable<any> {
    return this.http.post<any>(this.url + '/test' +'/enroll', enrollSwitchMeter);
  }
}

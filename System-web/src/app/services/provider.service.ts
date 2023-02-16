import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from 'src/app/interfaces/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  url = 'http://localhost:9999/provider';

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url + '/display');
  }

  enrollProvider(newProviderData: Object): Observable<Object> {
    return this.http.post(this.url + '/enroll', newProviderData);
  }
}

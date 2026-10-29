import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly url = "https://script.google.com/macros/s/AKfycbzM1LXc_kW-R8USHk1qENx5sTEvHV3zCgK4t5V41I-Z7piXTI-sKljK0p5gEW03t_NO/exec";
  
  private readonly http = inject(HttpClient);

  // Gets data from Script's doGET(e)
  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  // Posts data as per Script's doPOST(e)
  postTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>(this.url, transaction, {
      headers: new HttpHeaders({
        // Posts transaction as plaintext to send request as simple to avoid CORS error
        'Content-Type': 'text/plain;charset=utf-8'
      })
    })
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly url = "https://script.google.com/macros/s/AKfycbzl_R0b6rhaGFIHUy8d9_VirvMc2LqIU5g0tmUvFv2m6y7S8pksVWDZQxaDafgPMvYo/exec";
  
  private readonly http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  postTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>(this.url, transaction, {
      headers: new HttpHeaders({
        // Posts transaction as plaintext to send request as simple to avoid CORS error
        'Content-Type': 'text/plain;charset=utf-8'
      })
    })
  }
}

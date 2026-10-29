import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly url = "https://script.google.com/macros/s/AKfycbwDtHq1vPOoBdzrbghiiMAvcrjYk3nJRbltFuGY6PafysRpbCL3-vu7Hj3x-o8tbh93/exec";
  
  private readonly http = inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  /* postTransaction(transaction: Transaction): Observable<any>{
    this.http.post(this.url, this.transaction),
  } */
}

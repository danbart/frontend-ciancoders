import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, SALE } from '../common/constants';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  mySaleUrl = `${API}/${SALE}`;
  constructor(private http: HttpClient) {}

  getSales(): Promise<any> {
    return this.http.get(this.mySaleUrl).toPromise();
  }

  getSalesId(id: number): Promise<any> {
    return this.http.get(this.mySaleUrl + '/' + id).toPromise();
  }
}

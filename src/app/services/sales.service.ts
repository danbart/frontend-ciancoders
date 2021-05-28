import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, DETAIL, SALE } from '../common/constants';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  mySaleUrl = `${API}/${SALE}`;
  constructor(private http: HttpClient) {}

  getSales(): Promise<any> {
    return this.http.get(this.mySaleUrl).toPromise();
  }

  getSalesIdDetail(id: number): Promise<any> {
    return this.http.get(this.mySaleUrl + '/' + id + '/' + DETAIL).toPromise();
  }
  getSalesId(id: number): Promise<any> {
    return this.http.get(this.mySaleUrl + '/' + id).toPromise();
  }

  putSalesIdDetailIdCancel(idSale: number, idDetail: number): Promise<any> {
    return this.http
      .put(this.mySaleUrl + '/' + idSale + '/' + DETAIL + '/' + idDetail, {})
      .toPromise();
  }

  finishBuyId(id: number): Promise<any> {
    return this.http.put(this.mySaleUrl + '/' + id, {}).toPromise();
  }
}

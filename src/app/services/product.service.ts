import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, PRODUCT } from '../common/constants';

const baseUrl = `${API}/${PRODUCT}`;
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProduct() {
    return this.httpClient.get(baseUrl);
  }
}

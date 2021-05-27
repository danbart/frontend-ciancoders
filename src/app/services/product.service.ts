import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, CATEGORY, PRODUCT } from '../common/constants';
import { ProductInterface } from '../common/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl = `${API}/${PRODUCT}`;
  categoryUrl = `${API}/${CATEGORY}`;

  constructor(private http: HttpClient) {}

  getProduct(): Promise<any> {
    return this.http.get(this.productUrl).toPromise();
  }

  getCategory(): Promise<any> {
    return this.http.get(this.categoryUrl).toPromise();
  }

  getCategoryId(id: number): Promise<any> {
    return this.http.get(this.categoryUrl + '/' + id).toPromise();
  }

  postProduct(product: ProductInterface): Promise<any> {
    return this.http.post(this.productUrl, product).toPromise();
  }
}

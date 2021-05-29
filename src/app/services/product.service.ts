import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, CATEGORY, DETAIL, PRODUCT, SALE } from '../common/constants';
import { ProductInterface } from '../common/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl = `${API}/${PRODUCT}`;
  categoryUrl = `${API}/${CATEGORY}`;
  newSale = `${API}/${SALE}`;

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

  getProductoSaleId(id: number): Promise<any> {
    return this.http.get(this.productUrl + '/' + id + '/' + SALE).toPromise();
  }

  postCreateSale(): Promise<any> {
    return this.http.post(this.newSale, {}).toPromise();
  }

  postAddDetail(id: number, product: any): Promise<any> {
    return this.http
      .post(this.newSale + '/' + id + '/' + DETAIL, product)
      .toPromise();
  }
}

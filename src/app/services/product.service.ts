import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API, CATEGORY, PRODUCT } from '../common/constants';
import { CategoryInterface } from '../common/interfaces/category.interface';
import { ProductInterface } from '../common/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productUrl = `${API}/${PRODUCT}`;
  categoryUrl = `${API}/${CATEGORY}`;

  private products: ProductInterface[] = [];
  private categories: CategoryInterface[] = [];

  constructor(private http: HttpClient) {}

  getProduct(): Promise<ProductInterface[]> {
    if (this.products.length > 0) {
      return Promise.resolve(this.products);
    }
    return new Promise((resolve) => {
      this.http
        .get(this.productUrl)
        .subscribe((products: ProductInterface[]) => {
          this.products = products;
          resolve(products);
        });
    });
  }

  getCategory(): Promise<CategoryInterface[]> {
    if (this.categories.length > 0) {
      return Promise.resolve(this.categories);
    }
    return new Promise((resolve) => {
      this.http
        .get(this.categoryUrl)
        .subscribe((categories: CategoryInterface[]) => {
          this.categories = categories;
          resolve(categories);
        });
    });
  }

  getCategoryId(id: number): Promise<CategoryInterface> {
    if (this.categories.length > 0) {
      const category = this.categories.find((c) => c.id === id);
      return Promise.resolve(category);
    }
    return this.getCategory().then((categories) => {
      const category = categories.find((c) => c.id === id);
      return Promise.resolve(category);
    });
  }
}

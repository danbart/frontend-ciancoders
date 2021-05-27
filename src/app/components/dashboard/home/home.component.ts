import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/common/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  product: ProductInterface[] = [];

  lodingPrdoduct = false;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProduct()
      .then((product) => (this.product = product));
  }

  searchCategory(id: number) {
    let category;
    this.productService.getCategoryId(id).then((c) => (category = c.category));
    return category;
  }
}

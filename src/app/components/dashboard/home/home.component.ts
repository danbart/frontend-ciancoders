import { Component, OnInit } from '@angular/core';
import { CategoryInterface } from 'src/app/common/interfaces/category.interface';
import { ProductInterface } from 'src/app/common/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  product: ProductInterface[] = [];
  category: CategoryInterface;
  lodingPrdoduct = false;
  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProduct()
      .then((product) => (this.product = product));
  }

  searchCategory(id: number) {
    return this.productService.getCategoryId(id).then((c) => c.category);
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  product: Product;
  lodingPrdoduct = false;
  constructor() {}
  // public productService: ProductService
  ngOnInit(): void {
    // this.productService.getProduct().subscribe(console.log);
  }
}

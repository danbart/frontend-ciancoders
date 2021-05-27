import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductInterface } from '../../../../common/interfaces/product.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  product: ProductInterface;
  productForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      id_category: [''],
    });
  }

  ngOnInit(): void {}

  saveProduct() {
    console.log(this.productForm.value);
  }
}

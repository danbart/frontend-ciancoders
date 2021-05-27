import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DASHBOARD } from 'src/app/common/constants';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { CategoryInterface } from '../../../../common/interfaces/category.interface';
import { ProductInterface } from '../../../../common/interfaces/product.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  product: ProductInterface;
  category: CategoryInterface;
  productForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      id_category: [''],
    });
  }

  ngOnInit(): void {
    this.productService.getCategory().then((res) => (this.category = res));
  }

  saveProduct() {
    if (!this.productForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Form',
      });
    } else {
      this.productService
        .postProduct(this.productForm.value)
        .then((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.message,
            timer: 1500,
          });
          this.productForm.reset();
          this.router.navigate([`/${DASHBOARD}`]);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: JSON.stringify(err.error),
          });
        });
    }
  }
}

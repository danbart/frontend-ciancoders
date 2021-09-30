import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DASHBOARD, MY_SALES, SALE, USER } from 'src/app/common/constants';
import { ProductInterface } from 'src/app/common/interfaces/product.interface';
import { UserInterface } from 'src/app/common/interfaces/user.interface';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  product: ProductInterface[] = [];
  userInfo: UserInterface;
  sale = SALE;

  productSale = null;

  lodingPrdoduct = false;
  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService
      .getProduct()
      .then((product) => (this.product = product));
    this.userInfo = JSON.parse(localStorage.getItem(USER));
  }

  searchCategory(id: number) {
    let category;
    this.productService.getCategoryId(id).then((c) => (category = c.category));
    return category;
  }

  buyProduct(id: number) {
    this.productService.postCreateSale().then((s) => {
      this.productSale = s;
      Swal.fire({
        title: 'Enter your amount',
        input: 'number',
        customClass: {
          validationMessage: 'my-validation-message',
        },
        preConfirm: (value) => {
          if (!value) {
            Swal.showValidationMessage(
              '<i class="fa fa-info-circle"></i> Your amount is required'
            );
          } else {
            this.productService
              .postAddDetail(this.productSale[0]?.id, {
                id_product: id,
                amount: value,
              })
              .then((res) => {
                this.router.navigate([
                  `${MY_SALES}/${this.productSale[0]?.id}`,
                ]);
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'You shopping adds successfully',
                  showConfirmButton: false,
                  timer: 1500,
                });
              })
              .catch((err) => {
                console.log(err);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: err.error.error,
                });
                this.router.navigate([`${DASHBOARD}/`]);
              });
          }
        },
      });
    });
  }
}

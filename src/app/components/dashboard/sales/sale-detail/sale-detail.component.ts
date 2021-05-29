import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DASHBOARD } from 'src/app/common/constants';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css'],
})
export class SaleDetailComponent implements OnInit {
  public productSale = null;
  idProduct;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idProduct = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.productService
      .getProductoSaleId(this.idProduct)
      .then((res) => {
        return (this.productSale = res);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
        this.router.navigate([`${DASHBOARD}/`]);
      });
  }
}

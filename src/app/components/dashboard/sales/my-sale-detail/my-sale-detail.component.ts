import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MY_SALES } from 'src/app/common/constants';
import Swal from 'sweetalert2';
import { SalesService } from '../../../../services/sales.service';

@Component({
  selector: 'app-my-sale-detail',
  templateUrl: './my-sale-detail.component.html',
  styleUrls: ['./my-sale-detail.component.css'],
})
export class MySaleDetailComponent implements OnInit {
  getSaleDetails: string;
  idSale;
  saleInfo = null;
  constructor(
    public saleService: SalesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idSale = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.saleService
      .getSalesId(this.idSale)
      .then((resp) => (this.saleInfo = resp))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
        this.router.navigate([`${MY_SALES}/`]);
      });
    this.saleService
      .getSalesIdDetail(this.idSale)
      .then((resp) => (this.getSaleDetails = resp))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
        this.router.navigate([`${MY_SALES}/`]);
      });
  }

  finishBuy(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, finish shopping',
    }).then((result) => {
      this.saleService
        .finishBuyId(id)
        .then((resp) => {
          this.router.navigate([`${MY_SALES}/`]);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You shopping ends successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.error,
          });
          this.router.navigate([`${MY_SALES}/`]);
        });
    });
  }

  cancelDetailId(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete detail',
    }).then((result) => {
      this.router.navigate([`${MY_SALES}/`]);
      this.saleService
        .putSalesIdDetailIdCancel(this.idSale, id)
        .then((resp) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You shopping canceled successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.error.error,
          });
          this.router.navigate([`${MY_SALES}/`]);
        });
    });
  }
}

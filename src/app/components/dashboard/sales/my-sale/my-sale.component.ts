import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SalesService } from 'src/app/services/sales.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-sale',
  templateUrl: './my-sale.component.html',
  styleUrls: ['./my-sale.component.css'],
})
export class MySaleComponent implements OnInit {
  mySale;

  constructor(
    public saleService: SalesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.saleService
      .getSales()
      .then((res) => (this.mySale = res))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: JSON.stringify(err.error),
        });
        this.authService.doLogout();
      });
  }
}

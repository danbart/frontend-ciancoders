import { Component, OnInit } from '@angular/core';
import {
  AUTH,
  DASHBOARD,
  LOGIN,
  PRODUCT_ADD,
  PROFILE,
  REGISTER,
} from 'src/app/common/constants';
import { MY_SALES } from '../../common/constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dashboard: string = DASHBOARD;
  profile: string = PROFILE;
  login: string = `${AUTH}/${LOGIN}`;
  register: string = `${AUTH}/${REGISTER}`;
  addProduct: string = PRODUCT_ADD;
  mySales: string = MY_SALES;
  isLoggedIn = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe((resp) => (this.isLoggedIn = resp));
  }

  logout() {
    this.authService.doLogout();
    window.location.reload();
  }
}

import { Component, OnChanges, OnInit } from '@angular/core';
import { AUTH, DASHBOARD, LOGIN, REGISTER } from 'src/app/common/constants';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  dashboard: string = DASHBOARD;
  login = `${AUTH}/${LOGIN}`;
  register = `${AUTH}/${REGISTER}`;
  isLoggedIn = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }
}

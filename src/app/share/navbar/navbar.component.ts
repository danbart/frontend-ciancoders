import { Component, OnInit } from '@angular/core';
import { AUTH, DASHBOARD, LOGIN, REGISTER } from 'src/app/common/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dashboard: string = DASHBOARD;
  login = `${AUTH}/${LOGIN}`;
  register = `${AUTH}/${REGISTER}`;

  constructor() {}

  ngOnInit(): void {}
}

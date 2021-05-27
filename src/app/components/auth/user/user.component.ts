import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { EDIT_PROFILE } from '../../../common/constants';
import { UserInterface } from '../../../common/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: UserInterface;
  editProfile: string = EDIT_PROFILE;
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .getUserProfile()
      .then((user) => (this.user = user))
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
        this.authService.doLogout();
      });
  }
}

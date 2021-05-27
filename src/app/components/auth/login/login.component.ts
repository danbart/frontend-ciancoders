import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ACCESS_TOKEN, DASHBOARD, USER } from 'src/app/common/constants';
import { UserInterface } from 'src/app/common/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  siginForm: FormGroup;
  user: UserInterface;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.siginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  loginUser() {
    this.authService
      .signIn(this.siginForm.value)
      .then((user) => {
        console.log(user);
        localStorage.setItem(ACCESS_TOKEN, user.access_token);
        localStorage.setItem(USER, JSON.stringify(user.user));
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login success',
          timer: 1500,
        });
        this.siginForm.reset();
        this.router.navigate([`${DASHBOARD}/`]);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
      });
  }
}

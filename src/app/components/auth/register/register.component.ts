import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AUTH, DASHBOARD, LOGIN } from 'src/app/common/constants';
import { UserInterface } from 'src/app/common/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  user: UserInterface;
  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      nick_name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.router.navigate([`${DASHBOARD}/`]);
    }
  }

  registerUser() {
    this.authService
      .signUp(this.signupForm.value)
      .then((res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          timer: 1500,
        });
        this.signupForm.reset();
        this.router.navigate([`${AUTH}/${LOGIN}`]);
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

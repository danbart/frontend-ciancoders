import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PROFILE } from 'src/app/common/constants';
import { UserInterface } from 'src/app/common/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: UserInterface;
  editUserForm: FormGroup;
  profile: string = PROFILE;

  constructor(
    public authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editUserForm = this.fb.group({
      name: [''],
      last_name: [''],
      addres: [''],
      document: [''],
    });
  }

  ngOnInit(): void {
    this.authService
      .getUserProfile()
      .then((user) => {
        this.user = user;
        this.editUserForm = this.fb.group({
          name: this.user?.name,
          last_name: this.user?.last_name,
          addres: this.user?.addres,
          document: this.user?.document,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.error.error,
        });
        this.authService.doLogout();
      });
  }

  editUserInfo() {
    this.authService
      .editUserInfo(this.editUserForm.value)
      .then((res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: res.message,
          timer: 1500,
        });
        this.editUserForm.reset();
        this.router.navigate([`/${PROFILE}`]);
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

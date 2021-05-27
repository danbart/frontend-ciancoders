import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN, PROFILE, REGISTER } from 'src/app/common/constants';
import { EDIT_PROFILE } from '../../common/constants';
import { AuthGuard } from './auth.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: LOGIN, component: LoginComponent },
  { path: REGISTER, component: RegisterComponent },
  { path: PROFILE, component: UserComponent, canActivate: [AuthGuard] },
  {
    path: EDIT_PROFILE,
    component: EditUserComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UserComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}

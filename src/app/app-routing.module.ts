import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH } from './common/constants';
import { AuthGuard } from './components/auth/auth.guard';
import { AuthModule } from './components/auth/auth.module';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: `/${DASHBOARD}/` },
  {
    path: AUTH,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTH, DASHBOARD } from './common/constants';
import { AuthModule } from './components/auth/auth.module';

const routes: Routes = [
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
    path: DASHBOARD,
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD, PRODUCT_ADD } from '../../common/constants';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './product/add/add.component';

const routes: Routes = [
  { path: DASHBOARD, component: HomeComponent },
  { path: PRODUCT_ADD, component: AddComponent },
];

@NgModule({
  declarations: [HomeComponent, AddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}

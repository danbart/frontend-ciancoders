import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DASHBOARD, MY_SALES, PRODUCT_ADD, SALE } from '../../common/constants';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './product/add/add.component';
import { MySaleDetailComponent } from './sales/my-sale-detail/my-sale-detail.component';
import { MySaleComponent } from './sales/my-sale/my-sale.component';
import { SaleDetailComponent } from './sales/sale-detail/sale-detail.component';

const routes: Routes = [
  { path: DASHBOARD, component: HomeComponent },
  { path: PRODUCT_ADD, component: AddComponent },
  { path: MY_SALES, component: MySaleComponent },
  { path: MY_SALES + '/:id', component: MySaleDetailComponent },
  { path: DASHBOARD + '/:id/' + SALE, component: SaleDetailComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    MySaleComponent,
    MySaleDetailComponent,
    SaleDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}

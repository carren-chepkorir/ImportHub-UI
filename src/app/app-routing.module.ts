import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { authGuard } from './services/guard/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { OrderComponent } from './admin/admin-dashboard/order/order.component';
import { DashboardLayoutComponent } from './admin/admin-dashboard/dashboard-layout/dashboard-layout.component';
import { PendingPaymentsComponent } from './admin/admin-dashboard/pending-payments/pending-payments.component';
import { IntransitShipmentComponent } from './admin/admin-dashboard/intransit-shipment/intransit-shipment.component';
import { ShipmentDetailsComponent } from './pages/shipment-details/shipment-details.component';
import { DeliveredOrdersComponent } from './admin/admin-dashboard/delivered-orders/delivered-orders.component';
import { FreightComponent } from './admin/admin-dashboard/freight/freight.component';
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'register',
    component: RegisterComponent
  },

  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   // canActivate: [authGuard],
  // },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: '', component: DashboardLayoutComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'payments', component: PendingPaymentsComponent },
      {
        path: 'in-transit', component: IntransitShipmentComponent,

      },
      { path: 'delivered-orders', component: DeliveredOrdersComponent },
      {
        path: 'in-transit/:id',
        component: ShipmentDetailsComponent
      },
      { path: 'payments', component: PendingPaymentsComponent },
        { path: 'freight', component: FreightComponent }

    ],
  },
  {
    path: 'in-transit/:id',
    component: ShipmentDetailsComponent
  }
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: 'dashboard' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

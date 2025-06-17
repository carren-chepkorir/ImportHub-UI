import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './admin/admin-dashboard/sidebar/sidebar.component';
import { OrderComponent } from './admin/admin-dashboard/order/order.component';
import { DashboardLayoutComponent } from './admin/admin-dashboard/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { PendingPaymentsComponent } from './admin/admin-dashboard/pending-payments/pending-payments.component';
import { FormsModule } from '@angular/forms';
import { IntransitShipmentComponent } from './admin/admin-dashboard/intransit-shipment/intransit-shipment.component';
import { ShipmentDetailsComponent } from './pages/shipment-details/shipment-details.component';

// export function kcFactory(kService:KeycloakService){
//   return ()=>kService.init();
// }



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    AdminDashboardComponent,
    SidebarComponent,
    OrderComponent,
    DashboardLayoutComponent,
    PendingPaymentsComponent,
    IntransitShipmentComponent,
    ShipmentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
    RouterModule,
    FormsModule
  ],
  // providers: [{
  //   provide:APP_INITIALIZER,
  //   deps:[KeycloakService],
  //   // useFactory:kcFactory,
  //   multi:true
  // }

  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }

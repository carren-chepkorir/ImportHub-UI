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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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

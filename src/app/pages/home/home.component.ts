import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'src/app/services/keycloak/keycloak.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private keycloakService: KeycloakService,
    private router: Router
  ) {}

  // goToDashboard(): void {
  //   if (this.keycloakService.isLoggedIn()) {
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     this.keycloakService.login(); // redirect to Keycloak login
    // }
  // }
}

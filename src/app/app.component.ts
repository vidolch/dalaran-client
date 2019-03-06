import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userProfile: object;
  isDarkTheme = true;

  constructor(private authService: AuthService) {}

  public login() {
    this.authService.startAuthentication();
  }

  public logout() {
      this.authService.logOut();
  }

  public get username() {
      return this.authService.isLoggedIn() ? this.authService.getClaims()["preferred_username"] : null;
  }
}

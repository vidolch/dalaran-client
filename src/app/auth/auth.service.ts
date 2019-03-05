import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { getClientSettings } from './auth.config';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User = null;
  private manager = new UserManager(getClientSettings());

  constructor(private cookie: CookieService) {
    this.manager.getUser().then(user => {
        this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    this.cookie.set('redirectURL', window.location.pathname, null, '/', window.location.hostname);
    return this.manager.signinRedirect();
  }

  logOut(): Promise<void> {
    return this.manager.signoutRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
}

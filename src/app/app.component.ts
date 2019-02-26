import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userProfile: object;

  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  loadUserProfile(): void {
    this.oauthService.loadUserProfile().then(up => (this.userProfile = up));
  }

  public login() {
      this.oauthService.initImplicitFlow();
  }

  public logout() {
      this.oauthService.logOut();
  }

  public get name() {
      const claims: object = this.oauthService.getIdentityClaims();
      if (!claims) {
        return null;
      }

      return claims['preferred_username'];
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(doc => {
      this.oauthService.tryLogin();
      this.oauthService.loadUserProfile().then(up => {
        this.userProfile = up;
      });
    });

    this.oauthService.events
      .pipe(filter(e => e.type === 'token_expires'))
      .subscribe(e => {
        // tslint:disable-next-line:no-console
        console.debug('received token_expires event', e);
        this.oauthService.silentRefresh();
      });
  }
}

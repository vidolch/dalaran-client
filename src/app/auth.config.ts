import { AuthConfig, NullValidationHandler } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'http://localhost:5005/',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/home/index',

  // URL of the SPA to redirect the user after silent refresh
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'dalaran_ui',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email dalaran_api role',

  showDebugInformation: true,

  sessionChecksEnabled: false
};

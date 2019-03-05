import { UserManagerSettings, WebStorageStateStore } from 'oidc-client';

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:5005/',
      client_id: 'dalaran_ui',
      redirect_uri: window.location.origin + '/callback.html',
      post_logout_redirect_uri: window.location.origin,
      response_type: 'id_token token',
      scope: 'openid profile email dalaran_api role',
      filterProtocolClaims: true,
      loadUserInfo: true,
      userStore: new WebStorageStateStore({ store: window.localStorage })
  };
}

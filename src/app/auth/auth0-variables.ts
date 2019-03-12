interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'XG3vOQy8GczMKcUWCaKSCoq75CcrnLj8',
  domain: 'angular-firebase-app.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};

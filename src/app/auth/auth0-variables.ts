interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'u60Sczj81o7rbMQEIuPnLMaX9mPaB77c',
  domain: 'security-app-ap.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
  // callbackURL: 'https://security-spa.netlify.com/callback'
};

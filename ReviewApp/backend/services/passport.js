// authenticate using passport and passport-google-oauth20
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../../config/keys");

//authenticated through google-passport-oauth20
//https://console.developers.google.com --> for generating a new project to use with google API
//ClientID and ClientSecret -> in config
passport.use(new googleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'  //add this "http://localhost:5000/auth/google/callback to "Authorized redirect URIs" under Credentials in console.developers.google.com ->
}, (accessToken, refreshToken, profile, done) => {
  console.log('access token:', accessToken);
  console.log('refresh token:', refreshToken);
  console.log('profile:', profile);
}));

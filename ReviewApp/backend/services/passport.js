// authenticate using passport and passport-google-oauth20
const passport = require("passport");
const googleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id = _id -> in the database. profile.id =  "googleID" -> in the database
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

//authenticated through google-passport-oauth20
//https://console.developers.google.com --> for generating a new project to use with google API
//ClientID and ClientSecret -> in config
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", //add this "http://localhost:5000/auth/google/callback to "Authorized redirect URIs" under Credentials in console.developers.google.com ->
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //to solve the problem of adding the same profile id everytime you visit the app..we need to call the function below to check if the users profile id exist or not
      User.findOne({ googleID: profile.id }).then(existingUser => {
        if (existingUser) {
          // we already have a user with this profile id
          done(null, existingUser);
        } else {
          // we don't have a user record with this profile id..add new record
          new User({ googleID: profile.id })
            .save()
            .then(user => done(null, user)); //save it to the database
        }
      });
    }
  )
);

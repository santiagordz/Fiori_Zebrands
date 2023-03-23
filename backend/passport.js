require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const session = require('express-session');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, cb) {
      return cb(err, user);
    }
  )
);

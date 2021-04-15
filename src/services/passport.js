const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const users = mongoose.model('users');
passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
      },
      (accessToken, refreshToken, profile, done) => {
        // console.log('accesstoken: ',accessToken);
        // console.log('refreshtoken: ',refreshToken);
        // console.log('profile: ',profile);
        // console.log('done: ',done);
        new users({
          googleId: profile.id,
          displayName: profile.displayName
        }).save();
      }
    )
  );
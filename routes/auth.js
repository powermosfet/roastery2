var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://roastery-toolbox.herokuapp.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.dir({
      accessToken: accessToken,
      refreshToken: refreshToken,
      profile: profile,
    });
    User.findOrCreate({
      authId: profile.id,
      name: profile.displayName,
    }, function(err, user) {
      done(err, user);
    });
  }
));

router.get('/google', passport.authenticate('google', { scope: "https://www.googleapis.com/auth/userinfo.profile" }));
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login', 
    scope: "https://www.googleapis.com/auth/userinfo.profile" 
  }));

module.exports = router;

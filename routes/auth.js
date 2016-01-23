var express = require('express');
var router = express.Router();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: config.auth.google.clientId,
  clientSecret: config.auth.google.clientSecret,
  callbackURL: "https://roastery-toolbox.herokuapp.com/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  console.dir(profile);
  User.findOrCreate({
    authId: profile.id,
  }, function(err, user) {
    if(user) {
      user.name = profile.displayName;
      user.save(function(err, user){
        done(err, user);
      });
    } else {
      done(err);
    }
  });
}
                               ));

router.get('/google',
  passport.authenticate('google', {
    scope: "https://www.googleapis.com/auth/userinfo.profile"
  }));
router.get('/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login', 
    scope: "https://www.googleapis.com/auth/userinfo.profile" 
  }));

module.exports = router;

var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/auth/google', passport.authenticate('google'));
router.get('/auth/google/return',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login' 
  }));

module.exports = router;

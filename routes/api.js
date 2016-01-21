var express = require('express');
var router = express.Router();
var users = require('./users');

router.all('/*', function(req, res, next){
  console.log(req.url);
  if (req.isAuthenticated())
    return next();
  res.send(401);
});
router.use('/users', users);

module.exports = router;

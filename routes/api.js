var express = require('express');
var router = express.Router();
var users = require('./users');
var customers = require('./customers');
var varieties = require('./varieties');
var storages = require('./storages');

// router.all('/*', function(req, res, next){
//   console.log(req.url);
//   if (req.isAuthenticated())
//     return next();
//   res.send(401);
// });
router.use('/users', users);
router.use('/customers', customers);
router.use('/varieties', varieties);
router.use('/storages', storages);

module.exports = router;

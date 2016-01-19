var express = require('express');
var router = express.Router();
var usersHandler = require('../handlers/api/users.js');

/* GET users listing. */
router.get('/', usersHandler);

module.exports = router;

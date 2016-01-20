var express = require('express');
var router = express.Router();
var users = require('../handlers/api/users');

/* GET users listing. */
router.get('/', users.list);

module.exports = router;

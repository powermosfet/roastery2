var express = require('express');
var router = express.Router();
var customers = require('../handlers/api/customers');

/* GET users listing. */
router.get('/',  customers.list);
router.post('/', customers.create);

module.exports = router;

var express = require('express');
var router = express.Router();
var customers = require('../handlers/api/customers');

router.get('/',  customers.list);
router.post('/', customers.create);
router.get('/:id/', customers.detail);
router.put('/:id/', customers.change);

module.exports = router;

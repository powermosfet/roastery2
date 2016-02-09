var express = require('express');
var router = express.Router();
var customers = require('../controllers/api/customers');

router.get('/',  customers.list);
router.get('/open/',  customers.withOpenOrders);
router.post('/', customers.create);
router.get('/:id/', customers.detail);
router.put('/:id/', customers.change);

module.exports = router;

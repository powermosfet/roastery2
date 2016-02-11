var express = require('express');
var router = express.Router();
var transactions = require('../controllers/api/transactions');

/* GET users listing. */
router.get('/',  transactions.list);
router.post('/', transactions.create);
router.get('/:id/', transactions.detail);
router.put('/:id/', transactions.change);
router.delete('/:id/', transactions.remove);

module.exports = router;

var express = require('express');
var router = express.Router();
var storages = require('../handlers/api/storages');

/* GET users listing. */
router.get('/',  storages.list);
router.post('/', storages.create);
router.get('/:id/', storages.detail);
router.put('/:id/', storages.change);
router.delete('/:id/', storages.remove);

module.exports = router;

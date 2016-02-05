var express = require('express');
var router = express.Router();
var storages = require('../handlers/api/storages');

/* GET users listing. */
router.get('/',  storages.list);
router.post('/', storages.create);

module.exports = router;

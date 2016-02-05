var express = require('express');
var router = express.Router();
var variety = require('../handlers/api/variety');

router.get('/',  variety.list);
router.post('/', variety.create);
router.get('/:id/', variety.detail);
router.put('/:id/', variety.change);

module.exports = router;

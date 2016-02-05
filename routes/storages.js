var express = require('express');
var storages = express.storages();
var varieties = require('../handlers/api/varieties');

/* GET users listing. */
storages.get('/',  varieties.list);
storages.post('/', varieties.create);

module.exports = storages;

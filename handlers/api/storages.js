var mongoose = require('mongoose');
var Storage = mongoose.model('Storage');

var storages = {
  list: function(req, res, next) {
    Storage.find({}, function(err, storages) {
      res.send(storages);
    });
  },
  create: function(req, res, next) {
    var storage = new Storage(req.body);
    storage.save(function(err, storage) {
      res.send(storage);
    });
  }
};

module.exports = storages;

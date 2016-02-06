var mongoose = require('mongoose');
var Storage = mongoose.model('Storage');

var storages = {
  list: function(req, res, next) {
    Storage.find({})
        .populate('variety')
        .exec(function(err, storages) {
      res.send(storages);
    });
  },
  create: function(req, res, next) {
    var storage = new Storage(req.body);
    storage.save(function(err, storage) {
      res.send(storage);
    });
  },
  detail: function(req, res, next) {
    Storage.findById(req.params.id, function(err, storage) {
      if(err) {
        res.send(500);
      }
      res.send(storage);
    });
  },
  change: function(req, res, next) {
    Storage.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, storage) {
      if(err) {
        res.send(500);
      }
      res.send(storage);
    });
  },
};

module.exports = storages;

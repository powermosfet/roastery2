var mongoose = require('mongoose');
var Storage = mongoose.model('Storage');

var storages = {
  list: function(req, res, next) {
    Storage.find({})
      .populate('variety')
      .exec(function(err, storages) {
        if(err) {
          res.status(500).send(err);
        }
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
    var update = req.body;
    update.updatedAt = Date.now();
    Storage.findByIdAndUpdate(req.params.id, update, { new: true }, function(err, storage) {
      if(err) {
        res.send(500);
      }
      res.send(storage);
    });
  },
  remove: function(req, res, next) {
    Storage.findById(req.params.id, function(err, storage) {
      if(err) {
        res.send(404);
      }
      storage.remove(function(err) {
        if(err) {
          res.send(500);
        }
        res.send(200);
      });
    });
  },
};

module.exports = storages;

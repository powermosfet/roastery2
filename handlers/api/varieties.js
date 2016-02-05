var mongoose = require('mongoose');
var Variety = mongoose.model('Variety');

var varieties = {
  list: function(req, res, next) {
    Variety.find({}, function(err, varieties) {
      res.send(varieties);
    });
  },
  create: function(req, res, next) {
    var variety = new Variety(req.body);
    variety.save(function(err, variety) {
      res.send(variety);
    });
  },
  detail: function(req, res, next) {
    Variety.findById(req.params.id, function(err, variety) {
      if(err) {
        res.send(500);
      }
      res.send(variety);
    });
  },
  change: function(req, res, next) {
    Variety.findByIdAndUpdate(req.params.id, req.body, function(err, variety) {
      if(err) {
        res.send(500);
      }
      res.send(variety);
    });
  },
};

module.exports = varieties;

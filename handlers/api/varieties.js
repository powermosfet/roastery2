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
  }
};

module.exports = varieties;

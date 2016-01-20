var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = {
  list: function(req, res, next) {
    User.find({}, function(err, users) {
      res.send(users);
    });
  }
};

module.exports = users;

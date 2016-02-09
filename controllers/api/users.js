var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = {
  list: function(req, res, next) {
    User.find({}, function(err, users) {
      res.send(users);
    });
  },
  create: function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err, user) {
      res.send(user);
    });
  }
};

module.exports = users;

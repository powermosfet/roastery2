var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

var customers = {
  list: function(req, res, next) {
    Customer.find({}, function(err, customers) {
      res.send(customers);
    });
  },
  create: function(req, res, next) {
    var customer = new Customer(req.body);
    customer.save(function(err, customer) {
      res.send(customer);
    });
  }
};

module.exports = customers;

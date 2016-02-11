var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

var customers = {
  list: function(req, res, next) {
    Customer.find({})
    .populate('orders.batches.variety')
    .exec(function(err, customers) {
      res.send(customers);
    });
  },
  withOpenOrders: function(req, res, next) {
    Customer.find({'orders.delivered': false})
    .populate('orders.batches.variety')
    .exec(function(err, customers) {
      res.send(customers);
    });
  },
  create: function(req, res, next) {
    var customer = new Customer(req.body);
    customer.save(function(err, customer) {
      res.send(customer);
    });
  },
  detail: function(req, res, next) {
    Customer.findById(req.params.id)
    .populate('orders.batches.variety')
    .exec(function(err, customer) {
      if(err) {
        res.send(500);
      }
      res.send(customer);
    });
  },
  change: function(req, res, next) {
    var changedData = req.body;
    changedData.updatedAt = Date.now();
    Customer.findByIdAndUpdate(req.params.id, changedData, { new: true }, function(err, customer) {
      if(err) {
        res.send(500);
      }
      res.send(customer);
    });
  },
  remove: function(req, res, next) {
    Customer.findById(req.params.id, function(err, customer) {
      if(err) {
        res.send(404);
      }
      customer.remove(function(err) {
        if(err) {
          res.send(500);
        }
        res.send(200);
      });
    });
  },
};

module.exports = customers;

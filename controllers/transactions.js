var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');

var transactions = {
  list: function(req, res, next) {
    var qParams = {};
    if(req.query.account) {
      qParams['$or'] = [ 
        {'from': req.params.account}, 
        {'to': req.params.account}, 
      ];
    }
    Transaction.find(qParams)
    .exec(function(err, transactions) {
      res.send(transactions);
    });
  },
  create: function(req, res, next) {
    var transaction = new Transaction(req.body);
    transaction.save(function(err, transaction) {
      res.send(transaction);
    });
  },
  detail: function(req, res, next) {
    Transaction.findById(req.params.id)
    .exec(function(err, transaction) {
      if(err) {
        res.send(500);
      }
      res.send(transaction);
    });
  },
  change: function(req, res, next) {
    var changedData = req.body;
    changedData.updatedAt = Date.now();
    Transaction.findByIdAndUpdate(req.params.id, changedData, { new: true }, function(err, transaction) {
      if(err) {
        res.send(500);
      }
      res.send(transaction);
    });
  },
  remove: function(req, res, next) {
    Transaction.findById(req.params.id, function(err, transaction) {
      if(err) {
        res.send(404);
      }
      transaction.remove(function(err) {
        if(err) {
          res.send(500);
        }
        res.send(200);
      });
    });
  },
};

module.exports = transactions;

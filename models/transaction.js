var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account'
  },
  amount: Number,
  transactionTime: Date,
  createdAt: Date,  
  updatedAt: Date,
});

TransactionSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

TransactionSchema.pre('save', function(next, done){
  if(!this.transactionTime) {
    this.transactionTime = Date.now();
  }
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Transaction', TransactionSchema);
module.exports = TransactionSchema;

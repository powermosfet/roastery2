var mongoose = require('mongoose');

var BatchSchema = new mongoose.Schema({
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

BatchSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

BatchSchema.pre('save', function(next, done){
  if(!this.transactionTime) {
    this.transactionTime = Date.now();
  }
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Batch', BatchSchema);
module.exports = BatchSchema;

var mongoose = require('mongoose');
var BatchSchema = require('./batch');

var OrderSchema = new mongoose.Schema({
  description: String,
  delivered: Boolean,
  paid: Boolean,
  batches: [BatchSchema],
  createdAt: Date,  
  updatedAt: Date,
});

OrderSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

OrderSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Order', OrderSchema);
module.exports = OrderSchema;

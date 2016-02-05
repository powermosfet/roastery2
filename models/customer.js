var mongoose = require('mongoose');
var OrderSchema = require('./order');

var CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  orders: [OrderSchema],
  createdAt: Date,  
  updatedAt: Date,
});

CustomerSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

CustomerSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Customer', CustomerSchema);
module.exports = CustomerSchema;

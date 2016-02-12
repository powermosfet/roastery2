var mongoose = require('mongoose');
var OrderSchema = require('./order').schema;
var AccountSchema = require('./account').schema;
var Account = require('./account').model;

var CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  orders: [OrderSchema],
  account: AccountSchema,
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
  if(!this.account) {
    this.account = new Account();
  }
  next();
});

mongoose.model('Customer', CustomerSchema);
module.exports = CustomerSchema;

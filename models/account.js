var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
  createdAt: Date,  
  updatedAt: Date,
});

AccountSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

AccountSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Account', AccountSchema);
module.exports = AccountSchema;

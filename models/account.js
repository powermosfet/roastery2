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

module.exports.schema = AccountSchema;
module.exports.model = mongoose.model('Account', AccountSchema);

var mongoose = require('mongoose');
var VarietySchema = require('./variety');

var StorageSchema = new mongoose.Schema({
  variety: VarietySchema,
  amount: Number,
  createdAt: Date,  
  updatedAt: Date,
});

StorageSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

StorageSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('Storage', StorageSchema);
module.exports = StorageSchema;

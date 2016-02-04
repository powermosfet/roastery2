var mongoose = require('mongoose');

var VarietySchema = new mongoose.Schema({
  country: String,
  description: String,
  createdAt: Date,  
  updatedAt: Date,
});

VarietySchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

VarietySchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = VarietySchema;

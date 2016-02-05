var mongoose = require('mongoose');
var VarietySchema = require('./variety');

var BatchSchema = new mongoose.Schema({
  variety: VarietySchema,
  roastlevel: String,
  program: String,
  ambientTemp: Number,
  finalTemp: Number,
  completedAt: Date,
  createdAt: Date,  
  updatedAt: Date,
});

BatchSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

BatchSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = BatchSchema;
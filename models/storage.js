var mongoose = require('mongoose');
var VarietySchema = require('./variety');

var StorageSchema = new mongoose.Schema({
  variety: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variety'
  },
  amount: Number,
  originalAmount: Number,
  cost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  },
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

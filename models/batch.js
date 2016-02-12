var mongoose = require('mongoose');

var BatchSchema = new mongoose.Schema({
  variety: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Variety'
  },
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

mongoose.model('Batch', BatchSchema);
module.exports = BatchSchema;

var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var UserSchema = new mongoose.Schema({
  authId: String,
  name: String,
  email: String,
  createdAt: Date,  
  updatedAt: Date,
});

UserSchema.plugin(findOrCreate);
UserSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

UserSchema.pre('save', function(next, done){
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

mongoose.model('User', UserSchema);
module.exports = UserSchema;

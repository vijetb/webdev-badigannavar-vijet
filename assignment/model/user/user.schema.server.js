var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  //websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'webdev.user'});

module.exports = UserSchema;

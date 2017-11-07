var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.setModel = setModel;
UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
// UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
// UserModel.addWebsiteToUser = addWebsiteToUser;
// UserModel.deleteWebsiteForUser = deleteWebsiteForUser;

module.exports = UserModel;

function setModel(_model) {
  model = _model;
}


function createUser(user) {
  return UserModel.create(user);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function findUserById(userId) {
  return UserModel.findOne({_id: userId});
}

function deleteUser(userId) {
  return UserModel.deleteOne({_id:userId});
}

function updateUser(user) {
  return UserModel.updateOne({_id:user._id}, user);
}

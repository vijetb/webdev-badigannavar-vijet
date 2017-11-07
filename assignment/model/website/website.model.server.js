var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server');
var WebsiteModel = mongoose.model('WebsiteModel', WebsiteSchema);

WebsiteModel.setModel = setModel;
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsiteForUser = findAllWebsiteForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;
module.exports = WebsiteModel;

function setModel(_model) {
  model = _model;
}

function createWebsiteForUser(userId, website) {
  return WebsiteModel.create(website);
}

function findAllWebsiteForUser(userId) {
  return WebsiteModel.find({developerId: userId});
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findOne({_id:websiteId});
}

function updateWebsite(website) {
  return WebsiteModel.updateOne({_id:website._id},website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.deleteOne({_id:websiteId});
}

var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.setModel = setModel;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

function setModel(_model) {
  model = _model;
}

function createPage(page) {
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({websiteId:websiteId});
}

function findPageById(pageId) {
  return PageModel.findOne({_id:pageId});
}

function updatePage(page) {
  return PageModel.updateOne({_id:page._id}, page);
}

function deletePage(pageId) {
  return PageModel.deleteOne({_id:pageId});
}

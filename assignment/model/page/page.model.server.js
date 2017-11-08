var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server');
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.setModel = setModel;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
PageModel.reorderWidgetsWithinPage = reorderWidgetsWithinPage;

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

function reorderWidgetsWithinPage(pageId, startPos, endPos) {
  return PageModel.findPageById(pageId)
    .then(function (page) {
        var pageWidgets = page.widgets;
        pageWidgets.splice(endPos, 0, pageWidgets.splice(startPos, 1)[0]);
        page.widgets = pageWidgets;
        return page.save();
      });

    // , function(err, page) {
    //   var pageWidgets = page.widgets;
    //   pageWidgets.splice(endPos, 0, pageWidgets.splice(startPos, 1)[0]);
    //   page.widgets = pageWidgets;
    //   page.save(function(err, page) {
    //     deferred.resolve(page);
    //   });
    // });
}


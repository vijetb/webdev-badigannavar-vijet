var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server');
var PageSchema = require('../page/page.schema.server');
var WidgetModel = mongoose.model('WidgetModel', WidgetSchema);
var PageModel = mongoose.model('PageModel', PageSchema);

WidgetModel.setModel = setModel;
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetForPage = findAllWidgetForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
// WidgetModel.reorderWidget = reorderWidget;
module.exports = WidgetModel;

function setModel(_model) {
  model = _model;
}

function createWidget(widget) {
    tempWidget = null;
    return WidgetModel.create(widget)
      .then(function (newWidget) {
        tempWidget = newWidget;
        PageModel.findPageById(widget.pageId)
          .then(function (page) {
            page.widgets.push(tempWidget);
            return page.save();
          })
      })
}

function findAllWidgetForPage(pageId) {
  return PageModel.findPageById(pageId)
    .then(function (page) {
      return page.widgets;
  });
}

function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widget) {
  return WidgetModel.updateOne({_id: widget._id}, widget)
    .then(function (status) {
      PageModel.update({_id: widget.pageId,'widgets._id' :widget._id}, {$set: { "widgets.$" : widget }})
        .then(function (status) {
          return status;
        })
    });
}

function deleteWidget(pageId, widgetId) {
  return WidgetModel.deleteOne({_id: widgetId})
    .then(function (status) {
      PageModel.update({_id: widget.pageId}, {$pull:{'widgets': {_id:widget._id}}})
        .then(function (status) {
          return status;
        })
    });
}

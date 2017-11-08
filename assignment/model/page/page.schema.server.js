var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server')

var PageSchema = mongoose.Schema({
  websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  widgets: [widgetSchema],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'webdev.page'});

module.exports = PageSchema;

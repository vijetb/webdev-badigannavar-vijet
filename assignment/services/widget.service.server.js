module.exports = function(app, model) {
  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads' });

  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/:pageId/widget/:widgetId', deleteWidget);
  app.put("/api/page/:pageId/widget", sortWidgets);

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var widget = req.body;

    var width = req.body.width;
    if(width === "") {
      widget.width = 100;
    }
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;
    widget.widgetType =  'IMAGE';

    var filename      = myFile.filename;
    widget.url = 'assets/uploads/'+filename;

    var callbackUrl   = "/user/" + userId +"/website/"+websiteId+"/page/"+pageId+"/widget";

    if(widgetId === ""){
      model.widgetModel.createWidget(widget)
        .then(function (wid) {
          res.redirect(callbackUrl);
        }, function (err) {
          res.json(null);
        })
    }else {
      widget._id = widgetId;
      model.widgetModel.updateWidget(widget)
        .then(function (status) {
          res.redirect(callbackUrl);
        }, function (err) {
          res.json(null);
        })
    }
  }

  function createWidget(req, res) {
    pageId = req.params['pageId'];
    widget = req.body;

    console.log(widget);
    model.widgetModel.createWidget(widget)
      .then(function (wid) {
        res.json(widget);
      }, function (err) {
        console.log(err);
        res.json(null);
      })
  }

  function findAllWidgetsForPage(req, res) {
    pageId = req.params['pageId'];
    model.widgetModel.findAllWidgetForPage(pageId)
      .then(function (widgets) {
        res.json(widgets);
      }, function (err) {
        res.json(null);
      })

  }

  function findWidgetById(req, res) {
    widgetId = req.params['widgetId'];
    model.widgetModel.findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.json(null);
      })
  }

  function updateWidget(req, res) {
    widgetId = req.params['widgetId'];
    widget = req.body;
    model.widgetModel.updateWidget(widget)
      .then(function (status) {
        res.json({success:true});
      }, function (err) {
        res.json(null);
      })
  }

  function deleteWidget(req, res) {
    widgetId = req.params['widgetId'];
    pageId = req.params['pageId'];
    console.log(req.body);
    model.widgetModel.deleteWidget(pageId, widgetId)
      .then(function (status) {
        console.log(status);
        res.json({})
      }, function (err) {
        res.json(null);
      })
  }

  function sortWidgets(req, res) {
    var pageId = req.params['pageId'];
    var start = req.query['initial'];
    var end = req.query['final'];

    model.widgetModel.reorderWidget(pageId, start, end)
      .then(function (status) {
        res.json({success:true});
      }, function (err) {
          res.json({success:false});
        }
      );
  }
}

module.exports = function(app, model) {
  var multer = require('multer');
  var upload = multer({ dest: __dirname + '/../../dist/assets/uploads' });

  console.log(__dirname);
  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 5, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100', 'url': 'http://lorempixel.com/400/200/'},
    { '_id': '422', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100', 'url': './src/assets/uploads/97558eca14058498c15df72e86b14d9c.jpg'},
    { '_id': '456', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'},
    { '_id': '567', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '678', 'widgetType': 'YOUTUBE', 'pageId': '321', 'width': '100', 'url': 'https://www.youtube.com/embed/AM2Ivdi9c4E' },
    { '_id': '789', 'widgetType': 'HTML', 'pageId': '321', 'text': '<p>Lorem ipsum</p>'}
  ];
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.put("/api/page/:pageId/widget", sortWidgets);

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    newWidget = false;
    if(widgetId===""){
      widgetId = new Date().getMilliseconds().toString();
      newWidget = true;
    }
    var width = req.body.width;
    if(width===undefined) {
      width = 100;
    }
    var myFile        = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    url = 'assets/uploads/'+filename;
    widget = {
      '_id':widgetId,
      'widgetType': 'IMAGE',
      'pageId': pageId,
      'width': width,
      'url' : url
    }

    if(newWidget===true){
      widgets.push(widget);
    }else {
      for ( w in widgets){
        if(widgets[w]._id === widgetId){
          widgets[w] = widget;
          break;
        }
      }
    }

    var callbackUrl   = "/user/" + userId +"/website/"+websiteId+"/page/"+pageId+"/widget";
    res.redirect(callbackUrl);
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
        // console.log(status);
        res.json({success:true});
      }, function (err) {
        res.json(null);
      })
  }

  function deleteWidget(req, res) {
    widgetId = req.params['widgetId'];
    model.widgetModel.deleteWidget(widgetId)
      .then(function (widget) {
        res.json({})
      }, function (err) {
        res.json(null);
      })
  }

  function sortWidgets(req, res) {
    var pageId = req.params['pageId'];
    var start = req.query['initial'];
    var end = req.query['final'];

    var results = [];
    var indexes = [];
    var i = 0;
    while(i < widgets.length) {
      if(widgets[i].pageId === pageId){
        results.push(widgets[i]);
        // indexes.push(w);
        widgets.splice(i,1);
        i=0;
        continue;
      }
      i++;
    }

    results.splice(end, 0, results.splice(start, 1)[0]);
    for(var w in results){
      widgets.push(results[w]);
    }

    res.json({success:true})
  }
}

module.exports = function(app) {
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

  app.post('/api/page/:pageId/widget', createWidget);
  app.get('/api/page/:pageId/widget', findAllWidgetsForPage);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
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
    widget = req.body;
    widget._id = new Date().getMilliseconds().toString();
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    pageId = req.params['pageId'];
    tempWidgets = []
    for (i = 0  ; i < widgets.length ; ++i ) {
      if (widgets[i].pageId === pageId) {
         tempWidgets.push(widgets[i]);
      }
    }
    res.json(tempWidgets);
  }

  function findWidgetById(req, res) {
    widgetId = req.params['widgetId'];
    for (i=0 ; i < widgets.length ; ++i ) {
      if (widgets[i]._id === widgetId) {
        res.json(widgets[i]);
        return;
      }
    }
    return res.json(null);
  }

  function updateWidget(req, res) {
    widgetId = req.params['widgetId'];
    widget = req.body;
    for (i ; i < widgets.length ; ++i ) {
      if (widgets[i]._id === widgetId) {
          widgets[i] = widget;
          res.json({success:true});
          return;
      }
    }
    res.json({success:false});
  }

  function deleteWidget(req, res) {
    widgetId = req.params['widgetId'];
    for(var w in widgets) {
      if (widgets[w]._id === widgetId) {
        widgets.splice(w, 1);
        res.json({})
        return;
      }
    }
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

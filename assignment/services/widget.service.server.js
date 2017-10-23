module.exports = function(app) {
  widgets = [
    { '_id': '123', 'widgetType': 'HEADING', 'pageId': '321', 'size': 5, 'text': 'GIZMODO'},
    { '_id': '234', 'widgetType': 'HEADING', 'pageId': '321', 'size': 4, 'text': 'Lorem ipsum'},
    { '_id': '345', 'widgetType': 'IMAGE', 'pageId': '321', 'width': '100', 'url': 'http://lorempixel.com/400/200/'},
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
}

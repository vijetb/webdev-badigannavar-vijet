module.exports = function(app, model) {

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function createPage(req, res) {
    page = req.body;
    model.pageModel.createPage(page)
      .then(function (p) {
        res.json(p);
      }, function (err) {
        res.json(err);
      })
  }

  function findAllPagesForWebsite(req, res) {
    websiteId = req.params['websiteId'];
    model.pageModel.findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      })
  }

  function findPageById(req, res) {
    pageId = req.params['pageId'];
    model.pageModel.findPageById(pageId)
      .then(function (p) {
        res.json(p);
      }, function (err) {
        res.json(err);
      })
  }

  function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params['pageId'];
    model.pageModel.updatePage(page)
      .then(function (p) {
        res.json({success:true});
      }, function (err) {
        res.json({success:false});
      })
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    model.pageModel.deletePage(pageId)
      .then(function (p) {
        res.json({success:true});
      }, function (err) {
        res.json({success:false});
      })
  }
}

module.exports = function(app) {
  pages = [
    { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
    { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
    { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
  ]

  app.post('/api/website/:websiteId/page', createPage);
  app.get('/api/website/:websiteId/page', findAllPagesForWebsite);
  app.get('/api/page/:pageId', findPageById);
  app.put('/api/page/:pageId', updatePage);
  app.delete('/api/page/:pageId', deletePage);

  function createPage(req, res) {
    page = req.body;
    page._id = new Date().getMilliseconds().toString();
    this.pages.push(page);
    return res.json(page);
  }

  function findAllPagesForWebsite(req, res) {
    websiteId = req.params['websiteId'];
    tempPages = [];
    for (i=0; i < pages.length; ++i) {
      if (pages[i].websiteId === websiteId) {
          tempPages.push(pages[i]);
      }
    }
    return res.json(tempPages);
  }

  function findPageById(req, res) {
    pageId = req.params['pageId'];
    for(var p in pages){
      if(pages[p]._id === pageId){
        res.json(pages[p]);
        return;
      }
    }
    res.json(null);
  }

  function updatePage(req, res) {
    var page = req.body;
    var pageId = req.params['pageId'];

    for(var p in pages) {
      if (pages[p]._id === pageId) {
          pages[p] = page;
          res.json({success:true});
          return;
      }
    }
    return res.json({success:false});
  }

  function deletePage(req, res) {
    var pageId = req.params['pageId'];
    for(var p in pages) {
      if (pages[p]._id === pageId) {
        pages.splice(p, 1);
        res.json({})
        return;
      }
    }
  }
}

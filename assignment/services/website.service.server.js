module.exports = function(app, model) {

  app.post('/api/user/:userId/website',createWebsite);
  app.get('/api/user/:userId/website',findAllWebsitesForUser);
  app.get('/api/website/:websiteId',findWebsiteById);
  app.delete('/api/website/:websiteId',deleteWebsite);
  app.put('/api/website/:websiteId',updateWebsite);

  function createWebsite(req, res) {
    var userId = req.params['userId'];
    var tempWebsite = req.body;
    model.websiteModel.createWebsiteForUser(userId, tempWebsite)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.json(null);
      });
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    model.websiteModel.findAllWebsiteForUser(userId)
      .then(function (websites) {
        if(websites) {
          res.json(websites);
        }else{
          res.json([]);
        }
      }, function (err) {
        res.json(null);
      });
  }

  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    model.websiteModel.findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website);
      }, function (err) {
        res.json(null);
      });
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    model.websiteModel.deleteWebsite(websiteId)
      .then(function (website) {
        res.json({})
      }, function (err) {
        res.json(null);
      });
  }

  function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];

    model.websiteModel.updateWebsite(website)
      .then(function (status) {
        res.json({success:true});
      }, function (err) {
        res.json({success:false});
      });
  }
}

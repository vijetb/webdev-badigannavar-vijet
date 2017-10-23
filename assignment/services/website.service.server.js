module.exports = function(app) {

  websites = [
    { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
    { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
    { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
    { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
    { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
    { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
    { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
  ]

  app.post('/api/user/:userId/website',createWebsite);
  app.get('/api/user/:userId/website',findAllWebsitesForUser);
  app.get('/api/website/:websiteId',findWebsiteById);
  app.delete('/api/website/:websiteId',deleteWebsite);
  app.put('/api/website/:websiteId',updateWebsite);

  function createWebsite(req, res) {
    tempWebsite = req.body;
    tempWebsite._id = new Date().getMilliseconds().toString();
    websites.push(tempWebsite);
    return res.json(tempWebsite);
  }

  function findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    var results = [];
    for(var w in websites){
      if(websites[w].developerId === userId){
        results.push(websites[w]);
      }
    }
    res.json(results);
  }
  function findWebsiteById(req, res) {
    var websiteId = req.params['websiteId'];
    for(var w in websites){
      if(websites[w]._id == websiteId){
        res.json(websites[w]);
        return;
      }
    }
    res.json(null);
  }

  function deleteWebsite(req, res) {
    var websiteId = req.params['websiteId'];
    for(var w in websites) {
      if (websites[w]._id == websiteId) {
        websites.splice(w, 1);
        res.json({})
        return;
      }
    }
  }

  function updateWebsite(req, res) {
    var website = req.body;
    var websiteId = req.params['websiteId'];

    for(var w in websites) {
      if (websites[w]._id === websiteId) {
          websites[w] = website;
          res.json({success:true});
        return;
      }
    }
    return res.json({success:false});
  }
}

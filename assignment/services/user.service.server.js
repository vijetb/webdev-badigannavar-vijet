module.exports = function(app, model) {

  app.post('/api/user', createUser);
  app.get('/api/user', findUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  function createUser(req, res) {
    var user = req.body;

    model.userModel.createUser(user)
      .then(function (status) {
        res.json(status);
      }, function (err) {
        res.json(null);
      });

  }

  function findUser(req, res){
    var username = req.query['username'];
    var password = req.query['password'];
    if(password === undefined) {
      findUserByUsername(req, res);
    }else{
      findUserByCredentails(req,res);
    }
  }

  function findUserByUsername(req, res)
  {
     var username = req.query['username'];
     model.userModel.findUserByUsername(username)
      .then(function (u) {
        res.json(u);
      }, function (err) {
        res.json(null);
      });
  }

  function findUserByCredentails(req,res)
  {
    var username = req.query['username'];
    var password = req.query['password'];

    model.userModel.findUserByUsername(username)
      .then(function (u) {
        if(u && u.username === username && u.password === password ){
          res.json(u);
        }else{
          res.json(null);
        }
      }, function (err) {
        res.json(null);
      });
  }

  function findUserById(req, res){

    var userId = req.params['userId'];
    model.userModel.findUserById(userId)
      .then(function (u) {
        res.json(u);
      }, function (err) {
        res.json(null);
      });
  }

  function updateUser(req, res){
    var userId = req.params['userId'];
    var user = req.body;

    model.userModel.updateUser(user)
      .then(function (u) {
        res.json({success:true});
      }, function (err) {
        res.json({success:false});
      });
  }

  function deleteUser(req, res){
    var userId = req.params.uid;
    model.userModel.deleteUser(userId)
      .then(function (status) {
        res.json(status);
      }, function (err) {
        res.json(null);
      });
  }
}

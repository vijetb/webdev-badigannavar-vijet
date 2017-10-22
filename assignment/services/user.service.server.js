module.exports = function(app) {

  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  , email:"alice@gmail.com"},
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  , email:"bob@gmail.com" },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"   , email:"charly@gmail.com"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi"  , email:"jannunzi@gmail.com"}
  ];
  app.post('/api/user', createUser);
  app.get('/api/user', findUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);
  
  function createUser(req, res) {
    var user = req.body;
    user._id = new Date().getMilliseconds().toString();
    users.push(user, 0);
    res.send(user);
    return;
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
     users.find(function (user) {
       if(user.username === username){
         res.json(user);
         return;
       }
     });
     res.json(null);
  }
  
  function findUserByCredentails(req,res)
  {
    var username = req.query['username'];
    var password = req.query['password'];
    for(var u in users){
      if(users[u].username === username && users[u].password === password ){
        res.json(users[u]);
        return;
      }
    }
    res.json(null);
  }
  
  function findUserById(req, res){
    var userId = req.params['userId'];
    for(var u in users){
      if(users[u]._id === userId){
        res.json(users[u]);
        return;
      }
    }
    res.json(null);
  }
  
  function updateUser(req, res){
    var userId = req.params['userId'];
    user = req.body;
    i = 0;
    for (i ; i < users.length ; ++i ) {
      if (users[i]._id === userId) {
        users[i] = user;
        res.json({success:true});
        return;
      }
    }
    res.json({success:false});
  }

  function deleteUser(req, res){
    var userId = req.params.uid;
    i = 0;
    for (i ; i < users.length ; ++i ) {
      if (users[i]._id === userId) {
        users.splice(i, 1);
      }
    }
  }
}

var express = require('express');
var router = express.Router();
const {getUsers, getOneUser} = require('../db/db')
// const Users = require('../db/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
  // const users = Users()
  getUsers() // -> promise fetch(uri) -> results
  .then(function(users) {
    res.render('users/index', {
      title: 'Users',
      users: users
    })
  })
  .catch(function(err){
    res.status(404).json({
      err: err.message
    })
  })

  // res.send('respond with a resource');
});

router.get('/show/:id', function(req, res){
  const {id} = req.params

  getOneUser(id)
  .then(function(user) {
    if(!user) {
      res.send(404).json({err: "User not found!"});
    }
    res.render('users/show', {
      title: `About ${user.name}`,
      user
    })
  })
  .catch(function(err){
    res.status(404).json({
      err: err.message
    })
  })


})


module.exports = router;

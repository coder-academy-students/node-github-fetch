var express = require('express');
var router = express.Router();
//pull in the two functions that you can run to get data
const {getUsers, getOneUser} = require('../db/db')

//code commented out gets users from json as object
// const Users = require('../db/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const users = Users()
  getUsers() // -> promise fetch(uri) -> results -> users
  .then(function(users) {
    res.render('users/index', {
      title: 'Users',
      users: users
    })
  }) //catch errors from ANY promise
  .catch(function(err){
    res.status(404).json({
      err: err.message
    })
  })

  // res.send('respond with a resource');
});

// :id will be whatever (1 or 2 or 3 etc.)
router.get('/show/:id', function(req, res){
  //decontruct the params to get id from the url
  const {id} = req.params

  getOneUser(id) // gets one user returned as promise
  .then(function(user) {
    //if user undefined
    if(!user) {
      res.send(404).json({err: "User not found!"});
    }

    //render out users page
    res.render('users/show', {
      title: `About ${user.name}`,
      user
    })
  })
  //catch any error in any promise (one catch all)
  .catch(function(err){
    res.status(404).json({
      err: err.message
    })
  })


})

module.exports = router;

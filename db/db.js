/*
An example of how a database driver would behave
Putting the database code here instead of the routes means
you can "do it once" and call it anywhere (and have only one place to fix)
This makes it easier for you and keeps it DRY
*/

const fetch = require('node-fetch')
const uri = 'https://raw.githubusercontent.com/coder-factory-academy/jsondb/master/db.json'

//function that when run returns a promise of users
function getUsers() {
 return fetch(uri).then(function(res) {
     return res.json()
  })
}

//function that when run returns a promise with ONE user
function getOneUser(id) {
  return fetch(uri).then(function(res){
    return res.json()
  })
  .then(function(users){
    //loop through the array of users until you find the one you want
    //forEach will map all where as find stop once it finds a match
    const user = users.find(function(user) {
        //condition to match
        if(user.id === id){
            return user;
        }
    });
    //finally return the found user and it will be wrapped in a promise by the .then()
    return user
  })
}

//export both functions so they can be run elsewhere
module.exports = { getUsers, getOneUser}

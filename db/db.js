const fetch = require('node-fetch')
const uri = 'https://raw.githubusercontent.com/coder-factory-academy/jsondb/master/db.json'

function getUsers() {
 return fetch(uri).then(function(res) {
     return res.json()
  })
}

function getOneUser(id) {
  console.log(id)
  return fetch(uri).then(function(res){
    return res.json()
  })
  .then(function(users){

    const user = users.find(function(user) {
    if(user.id === id){
        console.log("match")
        return user;
    }});
    return user
  })
}

module.exports = { getUsers, getOneUser}

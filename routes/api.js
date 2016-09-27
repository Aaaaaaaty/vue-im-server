var express = require('express')
var router = express.Router()
var userHandler = require('../modules/userHandler.js')

router.get('/login', function(req,res) {
  // var user = req.body
  // userHandler.login(user, function(obj) {
  //   res.json(obj)
  // })
  console.log(req.body)
})


console.log(111)
 
// var user = {
//   username: 'abc',
//   password: '123',
//   _id: '57ea68d4e791d93bda5955c2'
// }
// userHandler.deleteUser(user, function(obj) {
//   // res.json(obj)
//   console.log(obj)
// })

// userHandler.getUserList(function(obj) {
//   // res.json(obj)
//   console.log(obj.data.user)
// })

module.exports = router
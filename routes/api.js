var express = require('express')
var router = express.Router()
var userHandler = require('../modules/userHandler.js')

router.post('/login', function(req,res) {
  var user = req.body
  userHandler.login(user, function(obj) {
    res.json(obj)
  })
})

// var user = {
//   username: 'abc',
//   password: '123'
// }
// userHandler.login(user, function(obj) {
//   res.json(obj)
// })

module.exports = router
var mongoose = require('./db.js')
var UserSchema = mongoose.Schema({
    username: String,
    password: String
})

var UserModule = mongoose.model('User', UserSchema)

function User(user) {
    this.username = user.username
    this.password = user.password
}

User.prototype.save = function(callback) {
  var user = {
    username: this.username,
    password: this.password
  }
  var newUser = new UserModule(user)
  newUser.save(function (err, user) {
    if (err) {
      return callback(err)
    }
    return callback(null, user)
  })
}

User.get = function(username, callback) {
  UserModule.findOne({username: username}, function(err, user) {
    if(err) {
      return callback(err)
    } else {
      return callback(null, user)
    }
  })
}

User.delete = function(user, callback) {
  var id = user._id
  UserModule.findByIdAndRemove(id, function(err) {
    if(err) {
      return callback(err)
    } else {
      return callback(null, id)
    }
  })
}

User.getUserList = function(callback) {
  UserModule.find({}, function(err, users) {
    if(err) {
      return callback(err)
    }
    callback(null, users)
  })
}

module.exports = User

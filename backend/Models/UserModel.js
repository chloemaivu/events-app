const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userName: String,
  password: String,
  token: String
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema=new Schema({})
var email = new Schema({
  email: { type: String, required: true }
});

module.exports = mongoose.model("email", userSchema, "user");
const mongoose = require("mongoose")
const Schema = require('mongoose').Schema;

const profileSchema = new mongoose.Schema({
  name: {type: String, required: true},
  avatar: {type: String, required: true},
  biography: {type: String, required: true},
  hobbies: {type: String, required: true},
  post: {type: String, required: true},
},
{
  timestamps: true
})

module.exports = mongoose.model("Profile", profileSchema)




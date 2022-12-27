const mongoose = require("mongoose")

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

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile


const mongoose = require("mongoose")
const { Schema, model } = mongoose


const profileSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  hairColor: {type: String, required: true},
  region: {type: String, required: true},
  hometown: {type: String, required: true},
  family: {type: String, required: true},
  friends: {type: String, required: true},
  pokemon: {type: String, required: true},
  trainerClass: {type: String, required: true},
  badge: {type: String, required: true},
},
{
  timestamps: true
})

const Profile = model("Profile",profileSchema)
module.exports = Profile




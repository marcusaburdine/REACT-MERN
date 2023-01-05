const mongoose = require('mongoose');
const Schema = mongoose.Schema


const profileSchema = new Schema({
  name: { type: String, },
  age: { type: Number,  },
  hairColor: { type: String, },
  region: { type: String,  },
  hometown: { type: String, },
  family: { type: String, },
  friends: { type: String, },
  pokemon: { type: String, },
  trainerClass: { type: String, },
  badge: { type: String, },
},
  {
    timestamps: true
  })

  module.exports = mongoose.model("Profile", profileSchema)





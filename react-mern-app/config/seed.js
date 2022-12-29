require('dotenv').config();
require('./database');

const profile = require('../models/profile');


(async function() {

  await Profile.deleteMany({});
  const Profile = await Profile.create([
    {name: 'Marcus'},
    {avatar: 'none'},
    {biography: 'none'},
    {hobbies: 'none'},
    {post: 'none'},
    
  ]);
  console.log(profile)
  process.exit();

})();

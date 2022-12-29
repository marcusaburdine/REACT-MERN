const Profile = require('../../models/profile')

module.exports = {
  index,
  show
};

async function index(req, res) {
  try{
    const profile = await Profile.find({}).exec();
    // re-sort based upon the sortOrder of the categories
    
    res.status(200).json(profile);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const profile = await Profile.findById(req.params.id);
    res.status(200).json(profile);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}



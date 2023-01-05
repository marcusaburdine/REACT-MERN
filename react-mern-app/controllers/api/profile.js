const Profile = require('../../models/profile')

module.exports = {
    index,
    create,
    edit,
    remove,
    show
}

async function index(req, res) {
    try {
        console.log(req.profile._id)
        const profile = await Profile.find({ profile: req.profile._id })
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function create(req, res) {
    try {
        const profile = await Profile.create(req.body)
        console.log(profile)
        res.status(200).json(profile)
    } catch (err) {
        console.log('error is in controller')
        res.status(400).json(err)
    }
}

async function edit(req, res) {
    try {
        const profile = await Profile.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function remove(req, res) { 
    try {
        const profile = await Profile.findByIdAndDelete(req.params.id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function show(req, res) {
    try {
        const profile = await Profile.findById(req.params.id);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

const express = require("express")
const Profile = require('../../models/profile')
const router = express.Router()


router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find({});
    res.render("/", { profile });
  } catch (err) {
    res.json({ err });
  }
});

  //New
  router.get("/new", (req, res) => {
    res.render("Profile/ProfileNew")
  })

  //DELETE
  router.delete("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the fruit
    Profile.findByIdAndRemove(id)
      .then((profile) => {
        // redirect to main page after deleting
        res.redirect("/profile");
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

   //UPDATE
   router.put("/:id", async (req, res) => {
    try {
      const id = req.params.id;
      req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
      req.body.cast = req.body.cast.split(",")
      await Profile.findByIdAndUpdate(id, req.body)
      res.redirect(`/profile/${id}`)
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  })

   // CREATE
   router.post("/", async (req, res) => {
    try {
      req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
      req.body.cast = req.body.cast.split(",")
      console.log(req.body)
      const createdProfile = await Profile.create(req.body)
      res.redirect("/profile")
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  })

   //Edit 
   router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the fruit from the database
    Profile.findById(id)
      .then((profile) => {
        // render Edit page and send fruit data
        res.render("Profile/ProfileEdit", { profile });
      })
      // send error as json
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  
   //Show Route
   router.get("/:id", async (req, res) => {
    const id = req.params.id
  
    try {
      const profile = await Profile.findById(id)
      res.render("Profile/ProfileShow", { profile })
    } catch (error){
      console.log(error);
      res.json({ error });
    }
  })
  module.exports = router



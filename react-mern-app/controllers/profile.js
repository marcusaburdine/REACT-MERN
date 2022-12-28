const Profile = require('../models/profile')
const express = require("express")
const router = express.Router()


// router.get('/seed', (req, res)=>{
//   Profile.create([
//       {
//         name:"Marcus",
//         avatar:"none",
//         biography:"none",
//         hobbies: "none",
//         post: "none",
//       }
      
//   ], (err, data)=>{
//       res.redirect('/profile');
//   })
// })



 // Index route
 router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find({});
    res.render("pages/Profile/Profile", { profile });
  } catch (err) {
    res.json({ err });
  }
});

//New
router.get("/new", (req, res) => {
  res.render("pages/Profile/Profile")
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
    await Movie.findByIdAndUpdate(id, req.body)
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
    const createdMovie = await Movie.create(req.body)
    res.redirect("/movies")
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
  Movie.findById(id)
    .then((movie) => {
      // render Edit page and send fruit data
      res.render("movies/Edit", { movie });
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
    res.render("/profile", { profile })
  } catch (error){
    console.log(error);
    res.json({ error });
  }
})

module.exports = router
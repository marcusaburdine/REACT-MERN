const User = require('../../models/profile')
const express = require("express")
const router = express.Router()

//NEW
router.get("/new", (req, res) => {
    res.render("pokemon/New")
  })

  //DELETE
router.delete("/:id", (req, res) => {
    Fruit.findByIdAndDelete(req.params.id, (err, data) => {
      res.redirect("/pokemon")
    })
  })

  //UPDATE
router.put("/:id", (req, res) => {
  req.body.readyToEat = req.body.readyToEat === "on" ? true : false
  Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
    if(!err){
      res.status(200).redirect(`/profile/${req.params.id}`)
    } else {
      res.status(400).send(err)
    }
  })
})

// CREATE
router.post("/", (req, res) => {
    if (req.body.readyToEat === "on"){
      req.body.readyToEat = true
    } else {
      req.body.readyToEat = false
    }

    Profile.create(req.body, (error, createdProfile) => {
        if (!error) {
          // redirects after creating fruit, to the Index page
          res.status(200).redirect("/")
        } else {
          res.status(400).send(error)
        }
      })
    })

    // EDIT
router.get("/:id/edit", (req, res) => {
    Fruit.findById(req.params.id, (err, foundProfile) => {
      if (!err) {
        res.status(200).render("/Edit", {profile: foundProfile})
      } else {
        res.status(400).send({ msg: err.message })
      }
    })
  })

  //SHOW
router.get("/:id", (req, res) => {
    // findById 1st arg: the id of the fruit we want to find 
    // Callback 1st arg: error
    // Callback 2nd arg: the found fruit object
  Fruit.findById(req.params.id, (error, foundPokemon) => {
    if (!error) {
      res
        .status(200)
        .render("pokemon/Show", {
          pokemon: foundPokemon
        })
    } else {
      res
        .status(400)
        .send(error)
    }
  })
})

module.exports = router


const data = [
  {
      id: 1,
      name: "Marcus",
      avatar: "This is an avatar",
      biography: " This is a biography",
      hobbies: "This is a hobbie(s)",
      post:"This is a post"
  }
]
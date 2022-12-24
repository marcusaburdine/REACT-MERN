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
      res.status(200).redirect(`/pokemon/${req.params.id}`)
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

    Fruit.create(req.body, (error, createdFruit) => {
        if (!error) {
          // redirects after creating fruit, to the Index page
          res.status(200).redirect("/pokemon")
        } else {
          res.status(400).send(error)
        }
      })
    })

    // EDIT
router.get("/:id/edit", (req, res) => {
    Fruit.findById(req.params.id, (err, foundFruit) => {
      if (!err) {
        res.status(200).render("pokemon/Edit", {fruit: foundFruit})
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
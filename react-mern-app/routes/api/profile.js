const express = require("express")
const router = express.Router()
const profileCtrl = require("../../controllers/api/profile")




//  GET 
router.get('/', profileCtrl.index);

// POST /api/users
router.post("/", profileCtrl.create)

//  DELETE 
router.delete('/:id', profileCtrl.remove);

//  PUT 
router.put('/:id/', profileCtrl.edit);

//  GET 
router.get('/:id', profileCtrl.show);

module.exports = router
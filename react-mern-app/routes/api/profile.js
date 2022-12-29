const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profile');

// GET /api/items
router.get('/new', profileCtrl.index);
// GET /api/items/:id
router.get('/:id', profileCtrl.show);

//NEW
router.get("/new", (req, res) => {
    res.render("pages/Profile/Profile")
  })

module.exports = router;
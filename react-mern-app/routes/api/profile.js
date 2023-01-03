const express = require('express');
const router = express.Router();
const profileCtrl = require('../../controllers/api/profile');

// GET /api/items
router.get('/', profileCtrl.create);
// GET /api/items/:id


module.exports = router;
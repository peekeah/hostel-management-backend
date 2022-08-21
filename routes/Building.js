const express = require('express');
const building = require('../controllers/Building');

const router = express.Router();

router.post('/add-building', building.addBuilding);
router.patch('/update-building', building.updateBuilding);

module.exports = router;
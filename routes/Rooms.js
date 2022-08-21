const express = require('express');
const router = express.Router();
const room = require('../controllers/Rooms');

// router.get('/:id', getRoom);
router.post('/assign-room', room.assignRoom);
router.patch('/update-room', room.updateRoom);

module.exports = router;
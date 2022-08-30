const express = require('express');
const router = express.Router();
const room = require('../controllers/Rooms');

router.get('/', room.getRooms);
router.post('/assign-room', room.assignRoom);
router.patch('/update-room', room.updateRoom);

module.exports = router;
const { rooms } = require("../models/Room");

exports.assignRoom = async (req, res, next) => {
  try {
    const response = await new rooms({ ...req.body }).save();
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send(err.message);
  }
};

exports.updateRoom = async (req, res, next) => {
  try {
    const response = await rooms
      .find({ building_name: req.body.building_name })
      .findOneAndUpdate({ room_no: req.body.room_no }, { ...req.body });
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
};

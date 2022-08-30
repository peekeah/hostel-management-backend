const { restart } = require("nodemon");
const { buildings } = require("../models/Building");

exports.getBuildings = async (req, res, next) => {
  try {
    const response = await buildings.find({});
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
};

exports.addBuilding = async (req, res, next) => {
  try {
    const building = await buildings.findOne({
      building_name: req.body.building_name,
    });
    if (building) return res.send("Buiding Already Exist");

    const response = await new buildings({
      ...req.body,
    });

    response.save();
    await res.send(response);
  } catch (err) {
    console.log(err);
    res.status(404).send(err.message);
  }
};

exports.updateBuilding = async (req, res, next) => {
  try {
    const response = await buildings.findOneAndUpdate(
      { building_name: req.body.building_name },
      { ...req.body }
    );
    res.send(response);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

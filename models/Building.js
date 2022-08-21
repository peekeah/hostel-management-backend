const mongoose = require("mongoose");
const { rooms } = require("../models/Room");

const buildingSchema = mongoose.Schema({
    building_name: "string",
    no_of_floors: "number",
    rooms_per_floor: "number"
});

module.exports.buildings = mongoose.model("buildings", buildingSchema);

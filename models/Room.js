const { Schema, model } = require("mongoose");

const roomSchema = Schema({
    building_name: String,
    room_no: Number,
    allocated_student: String,
    student_institution: String,
});

exports.rooms = model("rooms", roomSchema);

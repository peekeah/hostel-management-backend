const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const buildingsRouter = require("./routes/Building");
const roomsRouter = require("./routes/Rooms");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/", async (req, res, next) => {
    next();
});
app.get("/", async (req, res, next) => {
    res.send("Hostel Management App");
});
app.use("/buildings", buildingsRouter);
app.use("/rooms", roomsRouter);

const PORT = process.env.PORT || 80;

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

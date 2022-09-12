require("dotenv").config();
const log = require("debug")("holidays:server");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const HolidaysController = require("./controllers/HolidaysController");

const PORT = process.env.PORT ?? 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`I'm connected to MONGOOSE at ${MONGO_URI}`);
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/", HolidaysController); //holidays controller

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
});

app.listen(PORT, () => {
  log(`Express listing on ${PORT}`);
});

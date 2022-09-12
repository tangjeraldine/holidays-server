require("dotenv").config();
const log = require("debug")("holidays:server");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT ?? 3000;
const app = express();
const MONGO_URI =
  "mongodb+srv://jeraldinetyp:sei38-jeraldine@cluster0.apmd9q9.mongodb.net/test?authSource=admin&replicaSet=atlas-7jnjqb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`I'm connected to MONGOOSE at ${MONGO_URI}`);
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
});

app.listen(PORT, () => {
  log(`Express listing on ${PORT}`);
});

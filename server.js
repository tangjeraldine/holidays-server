require("dotenv").config();
const log = require("debug")("holidays:server");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT ?? 3000;
const app = express();
const MONGO_URI =
  "mongodb+srv://jeraldinetyp:sei38-jeraldine@cluster0.apmd9q9.mongodb.net/test?authSource=admin&replicaSet=atlas-7jnjqb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`I'm connected to MONGOOSE at ${MONGO_URI}`);
});

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send({ msg: "Holidays" });
});

app.listen(PORT, () => {
  log(`Express listing on ${PORT}`);
});

const mongoose = require("mongoose");

const holidaySchema = new mongoose.Schema({
  name: { type: String, required: true },
  celebrated: { type: Boolean, default: false },
  description: { type: String, default: "Best holiday ever!" },
  likes: { type: Number, default: 0 },
  tags: [{ type: String }],
});

const Holidays = mongoose.model("Holidays", holidaySchema);

module.exports = Holidays;

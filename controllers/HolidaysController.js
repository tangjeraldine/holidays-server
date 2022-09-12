const express = require("express");
const Holidays = require("../models/holidays");
const router = express.Router();

router.get("/holidays", async (req, res) => {
  try {
    const allHolidays = await Holidays.find();
    res.status(200).send(allHolidays);
  } catch (error) {
    res.status(500).send({ error: "No holidays found" });
  }
});

// Seed Route
router.get("/holidays/seed", async (req, res) => {
  const newHolidays = [
    {
      name: "New Year",
      celebrated: true,
      description: "Best holiday ever? New Resolutions to lose weight",
      likes: 5000000,
      tags: ["yay", "no work"],
    },
    {
      name: "Christmas",
      celebrated: true,
      description: "Mariah Carey attacks",
      likes: 4000,
      tags: ["sales everywhere", "no work"],
    },
    {
      name: "National Day",
      celebrated: true,
      description: "Watch sgreans cry tears of joy on tv",
      likes: 731810,
      tags: ["food promo", "no work"],
    },
  ];

  try {
    const seedHolidays = await Holidays.create(newHolidays);
    res.send(seedHolidays);
  } catch (err) {
    res.status(500).send({ error: "No holidays found" });
  }
});

module.exports = router;

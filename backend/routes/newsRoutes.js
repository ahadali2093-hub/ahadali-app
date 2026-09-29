const express = require("express");

const Station = require("../models/Station");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/", async (req, res) => {
  try {
    const stations = await Station.find().sort({
      createdAt: -1,
    });

    res.json(stations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin
router.post("/", protect, async (req, res) => {
  try {
    const station = await Station.create(req.body);

    res.status(201).json(station);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin
router.put("/:id", protect, async (req, res) => {
  try {
    const station =
      await Station.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!station) {
      return res.status(404).json({
        message: "Station not found",
      });
    }

    res.json(station);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin
router.delete("/:id", protect, async (req, res) => {
  try {
    await Station.findByIdAndDelete(req.params.id);

    res.json({
      message: "Station deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
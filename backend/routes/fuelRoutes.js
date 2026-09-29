const express = require("express");

const FuelPrice = require("../models/FuelPrice");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Public - get prices
router.get("/", async (req, res) => {
  try {
    const prices = await FuelPrice.find().sort({
      createdAt: -1,
    });

    res.json(prices);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin - add price
router.post("/", protect, async (req, res) => {
  try {
    const { name, price, unit } = req.body;

    const fuel = await FuelPrice.create({
      name,
      price,
      unit,
    });

    res.status(201).json(fuel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin - update price
router.put("/:id", protect, async (req, res) => {
  try {
    const fuel = await FuelPrice.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!fuel) {
      return res.status(404).json({
        message: "Fuel price not found",
      });
    }

    res.json(fuel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Admin - delete price
router.delete("/:id", protect, async (req, res) => {
  try {
    await FuelPrice.findByIdAndDelete(req.params.id);

    res.json({
      message: "Fuel price deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
const express = require("express");

const FuelPrice = require("../models/FuelPrice");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// =========================
// GET ALL FUEL PRICES
// GET /api/fuels
// =========================
router.get("/", async (req, res) => {
  try {
    const prices = await FuelPrice.find().sort({
      createdAt: -1,
    });

    res.status(200).json(prices);
  } catch (error) {
    console.error("Get fuel prices error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// ADD FUEL PRICE
// POST /api/fuels
// =========================
router.post("/", protect, async (req, res) => {
  try {
    const { name, price, unit } = req.body;

    if (!name || price === undefined || !unit) {
      return res.status(400).json({
        message: "Name, price and unit are required",
      });
    }

    const fuel = await FuelPrice.create({
      name,
      price,
      unit,
    });

    res.status(201).json(fuel);
  } catch (error) {
    console.error("Create fuel price error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// UPDATE FUEL PRICE
// PUT /api/fuels/:id
// =========================
router.put("/:id", protect, async (req, res) => {
  try {
    const fuel = await FuelPrice.findOneAndUpdate(
      { _id: req.params.id },
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

    res.status(200).json(fuel);
  } catch (error) {
    console.error("Update fuel price error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

// =========================
// DELETE FUEL PRICE
// DELETE /api/fuels/:id
// =========================
router.delete("/:id", protect, async (req, res) => {
  try {
    const fuel = await FuelPrice.findByIdAndDelete(req.params.id);

    if (!fuel) {
      return res.status(404).json({
        message: "Fuel price not found",
      });
    }

    res.status(200).json({
      message: "Fuel price deleted successfully",
    });
  } catch (error) {
    console.error("Delete fuel price error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
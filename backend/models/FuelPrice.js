const mongoose = require("mongoose");

const fuelPriceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true
    },

    unit: {
      type: String,
      default: "Liter"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "FuelPrice",
  fuelPriceSchema
);
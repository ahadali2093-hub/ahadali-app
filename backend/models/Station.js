const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    city: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    phone: {
      type: String
    },

    openingHours: {
      type: String,
      default: "24 Hours"
    },

    latitude: {
      type: Number
    },

    longitude: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Station",
  stationSchema
);
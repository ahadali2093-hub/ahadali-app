const express = require("express");

const Station = require("../models/Station");
const protect = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const cloudinary = require("../config/cloudinary");

const router = express.Router();

const uploadImage = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream =
      cloudinary.uploader.upload_stream(
        {
          folder: "petropak/stations",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

    stream.end(buffer);
  });
};

// PUBLIC
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

// ADMIN - CREATE
router.post(
  "/",
  protect,
  upload.single("image"),
  async (req, res) => {
    try {
      let image = "";
      let imagePublicId = "";

      if (req.file) {
        const result = await uploadImage(
          req.file.buffer
        );

        image = result.secure_url;
        imagePublicId = result.public_id;
      }

      const station = await Station.create({
        name: req.body.name,
        city: req.body.city,
        address: req.body.address,
        phone: req.body.phone,
        openingHours: req.body.openingHours,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        image,
        imagePublicId,
      });

      res.status(201).json(station);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// ADMIN - EDIT
router.put(
  "/:id",
  protect,
  upload.single("image"),
  async (req, res) => {
    try {
      const station =
        await Station.findById(req.params.id);

      if (!station) {
        return res.status(404).json({
          message: "Station not found",
        });
      }

      const fields = [
        "name",
        "city",
        "address",
        "phone",
        "openingHours",
        "latitude",
        "longitude",
      ];

      fields.forEach((field) => {
        if (req.body[field] !== undefined) {
          station[field] = req.body[field];
        }
      });

      if (req.file) {
        if (station.imagePublicId) {
          await cloudinary.uploader.destroy(
            station.imagePublicId
          );
        }

        const result = await uploadImage(
          req.file.buffer
        );

        station.image = result.secure_url;
        station.imagePublicId =
          result.public_id;
      }

      await station.save();

      res.json(station);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// ADMIN - DELETE
router.delete("/:id", protect, async (req, res) => {
  try {
    const station =
      await Station.findById(req.params.id);

    if (!station) {
      return res.status(404).json({
        message: "Station not found",
      });
    }

    if (station.imagePublicId) {
      await cloudinary.uploader.destroy(
        station.imagePublicId
      );
    }

    await station.deleteOne();

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
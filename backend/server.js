const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const fuelRoutes = require("./routes/fuelRoutes");
const stationRoutes = require("./routes/stationRoutes");
const newsRoutes = require("./routes/newsRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "PetroPak API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/fuels", fuelRoutes);
app.use("/api/stations", stationRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/contacts", contactRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on http:localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error.message);
  });
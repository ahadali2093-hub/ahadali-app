const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const Admin = require("./models/Admin");

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne({
      email: "admin@petropak.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@12345",
      10
    );

    await Admin.create({
      name: "PetroPak Admin",
      email: "admin@petropak.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully.");
    console.log("Email:  maherahad49@gmail.com");
    console.log("Password: ahad ali@12345");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

createAdmin();
const express = require("express");
const router = express.Router();

// database part
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
mongoose.connect(
  "mongodb+srv://dbUser:yearbook2021@cluster0.tfcmwn3.mongodb.net/?retryWrites=true&w=majority"
); // will put this in an env later
const conn = mongoose.connection;
conn.on("error", (error) => console.log(error));
conn.once("open", () => console.log("Connected to Database!"));

// create new user
router.post("/createNewUser", async (req, res) => {
  // define a schema first
  try {
    const docs = await userModel.find({ uid: req.body.googleId });
    if (docs.length == 0) {
      try {
        const user = await userModel.create(req.body);
        res.status(201).json({ newUser: user });
      } catch (error) {
        res.status(404).json({ message: error });
      }
    } else {
      res.status(201).json({ newUser: docs.at(0) });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
// read user data

module.exports = { router, conn };

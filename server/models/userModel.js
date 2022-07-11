const mongoose = require("mongoose");

// create an schema
const userModel = mongoose.model(
  "users",
  mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
  })
);

module.exports = userModel;

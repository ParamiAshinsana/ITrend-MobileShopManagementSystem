const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  filename: String,
  filepath: String, // Store only the file path instead of binary data
});

module.exports = mongoose.model("Image", imageSchema);


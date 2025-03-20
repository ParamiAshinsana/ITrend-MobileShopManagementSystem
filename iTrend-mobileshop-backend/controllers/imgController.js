const Image = require("../models/Image");

exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const newImage = new Image({
      filename: req.file.filename,
      filepath: `/uploads/${req.file.filename}`, // Save file path instead of data
    });

    await newImage.save();
    res.json({ message: "Image uploaded successfully", image: newImage });
  } catch (error) {
    res.status(500).json({ message: "Error uploading image", error });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find({}, { imageData: 0 }); // Exclude binary data
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving images", error });
  }
};

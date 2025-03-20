const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadImage, getImages } = require("../controllers/imageController");

const router = express.Router();

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage });

// Routes
router.post("/upload", upload.single("image"), uploadImage);
router.get("/images", getImages);

module.exports = router;

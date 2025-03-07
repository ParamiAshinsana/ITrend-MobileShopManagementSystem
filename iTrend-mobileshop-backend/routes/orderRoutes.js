// const express = require("express");
// const { createOrder, getOrdersByUser } = require("../controllers/orderController");

// const router = express.Router();

// router.post("/", createOrder);
// router.get("/:userId", getOrdersByUser);

// module.exports = router;

// routes/orderRoutes.js
const express = require("express");
const { createOrder, getOrders } = require("../controllers/orderController"); // Ensure the correct path to the controller
const router = express.Router();

// POST route to create an order
router.post("/", createOrder);

// GET route to retrieve all orders (optional)
router.get("/", getOrders);

module.exports = router;


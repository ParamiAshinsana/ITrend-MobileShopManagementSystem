const express = require("express");
const router = express.Router();
const {
  placeOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/orderController");

// Place an order
router.post("/placeOrder", placeOrder);

// Get all orders
router.get("/getAllOrders", getAllOrders);

// Get order by ID
router.get("/getOrder/:orderId", getOrderById);

// Update order status
router.put("/updateOrderStatus/:orderId", updateOrderStatus);

// Delete an order
router.delete("/deleteOrder/:orderId", deleteOrder);

module.exports = router;

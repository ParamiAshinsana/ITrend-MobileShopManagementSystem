const Order = require("../models/orderModel");

// Create an order
const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;

    if (!userId || !items || items.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const order = new Order({
      userId,
      items,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get orders by user ID
const getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { createOrder, getOrdersByUser };

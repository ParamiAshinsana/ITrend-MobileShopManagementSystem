const Order = require("../models/orderModel");
const User = require("../models/userModel");
const Item = require("../models/itemModel");

// Place a new order
exports.placeOrder = async (req, res) => {
  try {
    const { userId, items, paymentMethod } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let totalAmount = 0;
    let orderItems = [];

    for (const orderItem of items) {
      const { itemId, quantity } = orderItem;

      // Fetch item details
      const item = await Item.findById(itemId);
      if (!item) return res.status(404).json({ message: `Item with ID ${itemId} not found` });

      // Calculate total price
      totalAmount += item.price * quantity;
      
      orderItems.push({
        item: item._id,
        quantity,
        price: item.price
      });
    }

    // Create order
    const newOrder = new Order({
      user: user._id,
      items: orderItems,
      totalAmount,
      paymentMethod,
      orderStatus: "Pending"
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error placing order", error: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "fullName email").populate("items.item", "brand model price");
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error: error.message });
  }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId).populate("user", "fullName email").populate("items.item", "brand model price");
    
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order", error: error.message });
  }
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.orderStatus = orderStatus;
    await order.save();

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error: error.message });
  }
};

// Delete an order
exports.deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findByIdAndDelete(orderId);
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error: error.message });
  }
};

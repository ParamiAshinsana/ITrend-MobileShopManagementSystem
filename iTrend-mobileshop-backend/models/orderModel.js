const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  items: [
    {
      item: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Item", // Reference to Item model
        required: true 
      },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true } // Store price at the time of order
    }
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["Cash", "Card", "Online"], required: true },
  orderStatus: { type: String, enum: ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"], default: "Pending" },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);

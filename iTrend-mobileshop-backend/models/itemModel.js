const mongoose = require('mongoose');

// Define schema for the item model
const itemSchema = new mongoose.Schema({
  type: { 
    type: String, 
    required: true, 
    enum: ['mobile-phone', 'mobile-accessory'], // To distinguish between mobile phones and accessories
  },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String },
  color: { type: String, required: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['Available', 'Out of Stock'],
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // Link to Orders
});

// Ensure unique combination of brand and model
itemSchema.index({ brand: 1, model: 1, color:1 }, { unique: true });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

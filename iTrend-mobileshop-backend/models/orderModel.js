// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     items: [
//       {
//         productId: { type: String, required: true },
//         name: { type: String, required: true },
//         price: { type: Number, required: true },
//         quantity: { type: Number, required: true },
//       }
//     ],
//     totalAmount: { type: Number, required: true },
//     status: { type: String, enum: ["Pending", "Processing", "Shipped", "Delivered"], default: "Pending" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);




const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
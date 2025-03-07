// const Order = require("../models/orderModel");

// // Create an order
// const createOrder = async (req, res) => {
//   try {
//     const { userId, items, totalAmount } = req.body;

//     if (!userId || !items || items.length === 0) {
//       return res.status(400).json({ message: "Invalid order data" });
//     }

//     const order = new Order({
//       userId,
//       items,
//       totalAmount,
//     });

//     await order.save();
//     res.status(201).json({ message: "Order placed successfully", order });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// // Get orders by user ID
// const getOrdersByUser = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const orders = await Order.find({ userId }).sort({ createdAt: -1 });

//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error });
//   }
// };

// module.exports = { createOrder, getOrdersByUser };


// controllers/orderController.js
const Order = require("../models/orderModel"); // Import the Order model

// Controller to create an order
const createOrder = async (req, res) => {
    try {
        const { userId, items } = req.body;

        // Validate input data
        if (!userId || !items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "User ID and at least one item are required" });
        }

        // Ensure each item has required fields
        for (const item of items) {
            if (!item.productId || !item.name || !item.price || !item.quantity || !item.total) {
                return res.status(400).json({ message: "Each item must have productId, name, price, quantity, and total" });
            }
        }

        // Create a new order
        const newOrder = new Order({
            userId,
            items,
            createdAt: new Date(),
        });

        // Save order to the database
        await newOrder.save();

        res.status(201).json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// Controller to get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("userId", "name email"); // Populating user details
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { createOrder, getOrders };














































































































// // controllers/orderController.js
// const Order = require('../models/orderModel');  // Import the Order model

// // Controller to create an order
// const createOrder = async (req, res) => {
//     try {
//         // Extract order data from the request body
//         const { product, quantity, totalPrice, customerName } = req.body;

//         // Validate input data
//         if (!product || !quantity || !totalPrice || !customerName) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Create a new order using the Order model
//         const newOrder = new Order({
//             product,
//             quantity,
//             totalPrice,
//             customerName,
//             status: 'Pending',  // Default status is 'Pending'
//             createdAt: new Date(),
//         });

//         // Save the order to the database
//         await newOrder.save();

//         // Log the order details in the console
//         console.log("New Order Created:");
//         console.log(`ID: ${newOrder._id}`);
//         console.log(`Product: ${newOrder.product}`);
//         console.log(`Quantity: ${newOrder.quantity}`);
//         console.log(`Total Price: ${newOrder.totalPrice}`);
//         console.log(`Customer Name: ${newOrder.customerName}`);
//         console.log(`Status: ${newOrder.status}`);
//         console.log(`Created At: ${newOrder.createdAt}`);

//         // Send success response
//         res.status(201).json({ message: "Order created successfully", order: newOrder });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// // Controller to get all orders (optional)
// const getOrders = async (req, res) => {
//     try {
//         const orders = await Order.find();
//         res.status(200).json(orders);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// module.exports = { createOrder, getOrders };



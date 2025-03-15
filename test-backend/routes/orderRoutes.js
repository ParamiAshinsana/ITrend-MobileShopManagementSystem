const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// Place an order
router.post('/', async (req, res) => {
    const { customerId, products, totalAmount } = req.body;
    try {
        const newOrder = new Order({ customerId, products, totalAmount });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: 'Error placing order' });
    }
});

// Get all orders for a customer
router.get('/:customerId', async (req, res) => {
    try {
        const orders = await Order.find({ customerId: req.params.customerId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching orders' });
    }
});

module.exports = router;

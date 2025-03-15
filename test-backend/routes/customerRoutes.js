const express = require('express');
const Customer = require('../models/customer');
const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
    const { username, email, password, name, address } = req.body;
    try {
        const newCustomer = new Customer({ username, email, password, name, address });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: 'Error signing up' });
    }
});

// Sign In (no major authentication for now)
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.findOne({ email, password });
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error signing in' });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching customers' });
    }
});

// Get customer by ID
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error fetching customer' });
    }
});

// Update customer details
router.put('/:id', async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ message: 'Error updating customer' });
    }
});

// Delete customer
router.delete('/:id', async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Customer deleted' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting customer' });
    }
});

module.exports = router;

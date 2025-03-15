const express = require('express');
const router = express.Router();
const {
  addItem,
  updateItem,
  deleteItem,
  getItem,
  getAllItems,
} = require('../controllers/itemController');

// Add a new item
router.post('/items', addItem);

// Update an item by itemId
router.put('/items/:itemId', updateItem);

// Delete an item by itemId
router.delete('/items/:itemId', deleteItem);

// Get a single item by itemId
router.get('/items/:itemId', getItem);

// Get all items
router.get('/items', getAllItems);

module.exports = router;

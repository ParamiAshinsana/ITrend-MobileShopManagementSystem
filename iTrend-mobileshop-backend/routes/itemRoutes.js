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
router.post('/addItems', addItem);

// Update an item by itemId
router.put('/updateItems/:itemId', updateItem);

// Delete an item by itemId
router.delete('/deleteItems/:itemId', deleteItem);

// Get a single item by itemId
router.get('/getItems/:itemId', getItem);

// Get all items
router.get('/getAllItems', getAllItems);

module.exports = router;

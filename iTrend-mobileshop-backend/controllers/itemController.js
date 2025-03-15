const Item = require('../models/itemModel');

// Add a new item
exports.addItem = async (req, res) => {
  const { type, brand, model, description, color, price, stockQuantity, status } = req.body;

  try {
    // Check if the item already exists by brand and model
    const existingItem = await Item.findOne({ brand, model });
    if (existingItem) {
      return res.status(400).json({ message: 'This item already exists.' });
    }

    // Create and save the new item
    const newItem = new Item({
      type,
      brand,
      model,
      description,
      color,
      price,
      stockQuantity,
      status,
    });

    await newItem.save();
    res.status(201).json({ message: 'Item added successfully', item: newItem });
  } catch (error) {
    res.status(500).json({ message: 'Error adding item', error: error.message });
  }
};

// Update an existing item by itemId
exports.updateItem = async (req, res) => {
  const { itemId } = req.params;
  const { type, brand, model, description, color, price, stockQuantity, status } = req.body;

  try {
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Update the item with new data
    item.type = type || item.type;
    item.brand = brand || item.brand;
    item.model = model || item.model;
    item.description = description || item.description;
    item.color = color || item.color;
    item.price = price || item.price;
    item.stockQuantity = stockQuantity || item.stockQuantity;
    item.status = status || item.status;

    await item.save();
    res.status(200).json({ message: 'Item updated successfully', item });
  } catch (error) {
    res.status(500).json({ message: 'Error updating item', error: error.message });
  }
};

// Delete an item by itemId
exports.deleteItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const item = await Item.findByIdAndDelete(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting item', error: error.message });
  }
};

// Get a single item by itemId
exports.getItem = async (req, res) => {
  const { itemId } = req.params;

  try {
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching item', error: error.message });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
};

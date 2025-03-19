import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddItem.css";

const AddItem: React.FC = () => {
  const [formData, setFormData] = useState({
    type: "",
    brand: "",
    model: "",
    description: "",
    color: "",
    price: "",
    stockQuantity: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/items/addItem", formData);
      alert("Item added successfully!");
      navigate("/items");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Type:</label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Brand:</label>
            <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Model:</label>
            <input type="text" name="model" value={formData.model} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Color:</label>
            <input type="text" name="color" value={formData.color} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Stock Quantity:</label>
            <input type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Add Item</button>
      </form>
    </div>
  );
};

export default AddItem;

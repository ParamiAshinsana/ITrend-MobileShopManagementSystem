import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smart Watch", price: 79.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Bluetooth Speaker", price: 39.99, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Gaming Mouse", price: 29.99, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Mechanical Keyboard", price: 69.99, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Portable Charger", price: 19.99, image: "https://via.placeholder.com/150" },
];

const Products = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-danger fw-bold">${product.price.toFixed(2)}</p>
                <button className="btn btn-primary">Add to Cart 🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

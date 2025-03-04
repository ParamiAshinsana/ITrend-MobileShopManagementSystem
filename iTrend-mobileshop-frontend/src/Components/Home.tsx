import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: 499.99, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/150" },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-warning text-center py-5">
        <h1 className="fw-bold text-danger">Welcome to ShopEase</h1>
        <p className="fs-5">Your one-stop shop for all tech gadgets</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Now 🛒
        </Link>
      </div>

      {/* Featured Products */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-danger fw-bold">${product.price.toFixed(2)}</p>
                  <button className="btn btn-success">Add to Cart 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

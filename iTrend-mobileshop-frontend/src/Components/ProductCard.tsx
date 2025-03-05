import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        <Link to={`/product/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <img src={image} className="card-img-top" alt={name} width="150" height="250" />
        </Link>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-danger fw-bold">${price.toFixed(2)}</p>
          <button className="btn btn-success">Add to Cart 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

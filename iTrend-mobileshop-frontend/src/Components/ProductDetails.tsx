import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./productsData";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const product = products.find((p) => p.id === parseInt(id || "0"));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img src={product.image} alt={product.name} className="img-fluid" style={{ maxHeight: "400px" }} />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-danger fw-bold">${product.price.toFixed(2)}</p>
          <p><strong>Storage:</strong> {product.storage}</p>
          <p>{product.description}</p>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <label className="me-2"><strong>Quantity:</strong></label>
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <span className="mx-2">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          {/* Buttons */}
          <button className="btn btn-success me-2">Add to Cart 🛒</button>
          <button className="btn btn-primary">Buy Now 🚀</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const AddToCart: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get product data from navigation state
  const initialProduct: CartItem | null = location.state || null;

  // State for cart items
  const [cartItems, setCartItems] = useState<CartItem[]>(initialProduct ? [initialProduct] : []);

  // Function to update quantity
  const handleQuantityChange = (id: string, amount: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id: string) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        cartItems.map(({ id, name, price, image, quantity }) => (
          <div key={id} className="flex items-center justify-between p-4 border rounded-lg mb-4 shadow-md">
            <img src={image} alt={name} className="w-20 h-20 object-cover rounded" />
            
            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-gray-600">${price.toFixed(2)}</p>
              
              <div className="flex items-center mt-2">
                <button 
                  onClick={() => handleQuantityChange(id, -1)} 
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >-</button>
                
                <span className="px-4">{quantity}</span>
                
                <button 
                  onClick={() => handleQuantityChange(id, 1)} 
                  className="px-3 py-1 bg-gray-300 rounded-md"
                >+</button>
              </div>
            </div>

            <button 
              onClick={() => handleRemoveItem(id)} 
              className="bg-red-500 text-white px-3 py-1 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      <button 
        onClick={() => navigate("/")} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default AddToCart;

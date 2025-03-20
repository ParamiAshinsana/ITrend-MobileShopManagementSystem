import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ItemCardProps {
    _id: string;  // MongoDB ObjectId as a string
    brand: string;
    model: string;
    price: number;
    description: string;
  }
  

const ItemCard: React.FC<ItemCardProps> = ({  _id, brand, model, price, description }) => {
  const navigate = useNavigate();
  
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupItem, setPopupItem] = useState<ItemCardProps | null>(null);

//   const handleAddToCart = () => {
//     // navigate("/addtocart", { state: { id, brand, model, price, quantity: 1 } });
//                 // Get current cart count from local storage or set to 0 if not available
//             let cartCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
            
//             // Increase count by 1
//             cartCount += 1;

//             // Store updated count in local storage
//             localStorage.setItem("cartCount", cartCount.toString());

//             // Navigate to cart page (if needed)
//             navigate("/addtocart", { state: { id, brand, model, price, quantity: 1 } });

//             // Trigger event to update navbar
//             window.dispatchEvent(new Event("storage"));
//   };









const handleAddToCart = (_id: string, brand: string, model: string, price: number) => {
    const userId = localStorage.getItem("userId"); // Get signed-in user's ID
  
    if (!userId) {
      alert("Please sign in to add items to your cart.");
      return;
    }
  
    // Define user-specific cart key
    const userCartKey = `cart_${userId}`;
  
    // Retrieve existing cart data (ensure it's an array)
    let existingCart = JSON.parse(localStorage.getItem(userCartKey) || "[]");
  
    // Ensure it's an array (fix potential corrupt storage issues)
    if (!Array.isArray(existingCart)) {
      existingCart = [];
    }
  
    // Log to confirm we are adding the correct item
    console.log("Adding Item:", { _id, brand, model, price });
  
    // Check if item already exists in the cart
    const existingItemIndex = existingCart.findIndex((item: any) => item._id === _id);
  
    if (existingItemIndex !== -1) {
      // Update quantity if the item exists
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // Add new item to cart with unique _id (MongoDB ObjectId)
      existingCart.push({ _id, brand, model, price, quantity: 1 });
    }
  
    // Save updated cart to local storage
    localStorage.setItem(userCartKey, JSON.stringify(existingCart));
  
    // Log the updated cart to check the result
    console.log("Updated Cart:", existingCart);
  
    // Update cart count in local storage
    let cartCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
    cartCount += 1;
    localStorage.setItem("cartCount", cartCount.toString());
  
    // Trigger event to update navbar/cart
    window.dispatchEvent(new Event("storage"));
  };
  













// const handleAddToCart = (id: string, brand: string, model: string, price: number) => {
//     const userId = localStorage.getItem("userId"); // Get signed-in user's ID
  
//     if (!userId) {
//       alert("Please sign in to add items to your cart.");
//       return;
//     }
  
//     // Retrieve existing cart data for the user
//     const userCartKey = `cart_${userId}`;
//     const existingCart = JSON.parse(localStorage.getItem(userCartKey) || "[]");
  
//     // Check if item already exists in the cart
//     const existingItemIndex = existingCart.findIndex((item: any) => item.id === id);
  
//     if (existingItemIndex !== -1) {
//       // Item already in cart, update quantity
//       existingCart[existingItemIndex].quantity += 1;
//     } else {
//       // Add new item to cart
//       existingCart.push({ id, brand, model, price, quantity: 1 });
//     }
  
//     // Save updated cart to local storage
//     localStorage.setItem(userCartKey, JSON.stringify(existingCart));
  
//     // Handle cart count logic
//     let cartCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
//     cartCount += 1;
//     localStorage.setItem("cartCount", cartCount.toString());
  
//     // Navigate to cart page (if needed)
//     navigate("/addtocart", { state: { id, brand, model, price, quantity: 1 } });
  
//     // Trigger event to update navbar
//     window.dispatchEvent(new Event("storage"));
//   };
  

  const handleCardClick = () => {
    setPopupItem({ _id, brand, model, price, description });
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    setPopupItem(null);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm" onClick={handleCardClick}>
        
          <div className="card-body text-center">
            <h5 className="card-title">{brand} {model}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-danger fw-bold">${price.toFixed(2)}</p>
            <button className="btn btn-success" onClick={(e) => { e.stopPropagation(); handleAddToCart(_id, brand, model, price); }}>
              Add to Cart 🛒
            </button>
          </div>    
        
      </div>

      {isPopupVisible && (
        <div
          className="popup-overlay"
          onClick={handleClosePopup}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            {popupItem && (
              <>
                <h5>{popupItem.brand} {popupItem.model}</h5>
                <p>{popupItem.description}</p>
                <p className="text-danger fw-bold">${popupItem.price.toFixed(2)}</p>
                <button className="btn btn-success">
                  Add to Cart 🛒
                </button>
                {/* <button className="btn btn-success" onClick={handleAddToCart}>
                  Add to Cart 🛒
                </button> */}
              </>
            )}
            <button
              className="btn btn-secondary mt-2"
              onClick={handleClosePopup}
              style={{ width: "100%" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemCard;

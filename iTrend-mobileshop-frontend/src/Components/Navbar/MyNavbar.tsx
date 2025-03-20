import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Navbar = () => {

  const [cartCount, setCartCount] = useState<number>(0);

  // useEffect(() => {
  //   // Load cart count from local storage on mount
  //   const savedCartCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
  //   setCartCount(savedCartCount);

  //   // Listen for storage updates
  //   const handleStorageChange = () => {
  //     const updatedCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
  //     setCartCount(updatedCount);
  //   };

  //   window.addEventListener("storage", handleStorageChange);
    
  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  useEffect(() => {
    // Get the current userId from localStorage
    const userId = localStorage.getItem("userId");

    if (userId) {
      // If user is signed in, get the cart data for the specific user
      const userCartKey = `cart_${userId}`;
      const userCart = JSON.parse(localStorage.getItem(userCartKey) || "[]");

      // Calculate the total quantity in the cart for the signed-in user
      const totalCartCount = userCart.reduce((total: number, item: any) => total + item.quantity, 0);
      setCartCount(totalCartCount);
    } else {
      // No user signed in, reset cart count
      setCartCount(0);
    }

    // Listen for storage updates (e.g., when cartCount is updated)
    const handleStorageChange = () => {
      const updatedUserId = localStorage.getItem("userId");
      if (updatedUserId) {
        const updatedCartKey = `cart_${updatedUserId}`;
        const updatedCart = JSON.parse(localStorage.getItem(updatedCartKey) || "[]");
        const updatedCartCount = updatedCart.reduce((total: number, item: any) => total + item.quantity, 0);
        setCartCount(updatedCartCount);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-danger" to="/">
          ShopEase
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/products">
                Products
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link text-light" to="/favorites">
              <i className="bi bi-heart fs-3"></i>
              </Link>
            </li>


            {/* <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">
              <i className="bi bi-cart fs-3"></i>
              </Link>
            </li> */}

           <li className="nav-item position-relative">
              <Link className="nav-link text-light" to="/cart">
                <i className="bi bi-cart fs-3"></i>
                {cartCount > 0 && (
                  <span 
                    className="position-absolute bottom-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.75rem", padding: "5px 7px"}}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>


            
            
            
            <li className="nav-item ">
              <Link className="nav-link text-light" to="/signin">
              <i className="bi bi-person fs-3 mb-3"></i>
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">
                Cart 🛒
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/orders">
                Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/signin">
                SignIn
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

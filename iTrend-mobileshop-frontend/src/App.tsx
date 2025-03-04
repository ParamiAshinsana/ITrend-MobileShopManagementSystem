import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./Components/Navbar/MyNavbar";
import Product from "./Components/Product";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup";

// const Home = () => <h2 className="text-center mt-5">Welcome to ShopEase!</h2>;
// const Products = () => <h2 className="text-center mt-5">Our Products</h2>;
const Cart = () => <h2 className="text-center mt-5">Your Cart</h2>;
const Orders = () => <h2 className="text-center mt-5">Your Orders</h2>;
const Profile = () => <h2 className="text-center mt-5">Your Profile</h2>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Img1 from "../assets/item_img_3391.jpeg";
import Img2 from "../assets/item_img_3416.jpeg";
import Img3 from "../assets/item_img_3558.jpeg";
import Img4 from "../assets/item_img_3483.jpg";
import Img5 from "../assets/item_img_3577.jpeg";
import Img6 from "../assets/item_img_34632.jpeg";

const featuredProducts = [
  { id: 1, name: "Smartphone", price: 499.99, image: Img1},
  { id: 2, name: "Laptop", price: 999.99, image: Img2  },
  { id: 3, name: "Wireless Earbuds", price: 79.99, image: Img3 },
  { id: 4, name: "Smartwatch", price: 299.99, image: Img4 },
  { id: 5, name: "Tablet", price: 599.99, image: Img5 },
  { id: 6, name: "Gaming Headset", price: 129.99, image: Img6 },
];

const backgroundImages = [
  "https://i.gadgets360cdn.com/large/iPhone_13_colours_leak_1626162021772.jpg",
  "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/5CDF4DAD-4F2E-490F-A0B2-669BF1F93689.jpeg",
  "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/09/apple-iphone-16-hero.jpg",
];

const Home = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 3000); // Change background every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">ShopEase</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* Hero Section with Dynamic Background */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <h1 className="fw-bold">Welcome to ShopEase</h1>
        <p className="fs-4">Discover the latest smartphones and accessories at unbeatable prices</p>
        <Link to="/products" className="btn btn-light btn-lg mt-3">Shop Now 🛒</Link>
      </div>

      {/* Featured Products */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          {featuredProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} width="150" height="250" />
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;









































// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const featuredProducts = [
//   { id: 1, name: "Smartphone", price: 499.99, image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/150" },
//   { id: 3, name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/150" },
//   { id: 4, name: "Smartphone", price: 499.99, image: "https://via.placeholder.com/150" },
//   { id: 5, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/150" },
//   { id: 6, name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/150" },
//   { id: 7, name: "Smartphone", price: 499.99, image: "https://via.placeholder.com/150" },
//   { id: 8, name: "Laptop", price: 999.99, image: "https://via.placeholder.com/150" },
//   { id: 9, name: "Wireless Earbuds", price: 79.99, image: "https://via.placeholder.com/150" },
// ];

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="bg-warning text-center py-5">
//         <h1 className="fw-bold text-danger">Welcome to ShopEase</h1>
//         <p className="fs-5">Your one-stop shop for all tech gadgets</p>
//         <Link to="/products" className="btn btn-primary btn-lg">
//           Shop Now 🛒
//         </Link>
//       </div>

//       {/* Featured Products */}
//       <div className="container mt-5">
//         <h2 className="text-center mb-4">Featured Products</h2>
//         <div className="row">
//           {featuredProducts.map((product) => (
//             <div className="col-md-4 mb-4" key={product.id}>
//               <div className="card shadow-sm">
//                 <img src={product.image} className="card-img-top" alt={product.name} />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text text-danger fw-bold">${product.price.toFixed(2)}</p>
//                   <button className="btn btn-success">Add to Cart 🛒</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

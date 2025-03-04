import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About ShopEase</h5>
            <p className="small">
              ShopEase is your go-to destination for the latest tech gadgets at unbeatable prices. Shop with confidence and convenience!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p className="small mb-1"><i className="bi bi-envelope"></i> support@shopease.com</p>
            <p className="small mb-1"><i className="bi bi-phone"></i> +1 234 567 890</p>
            <p className="small"><i className="bi bi-geo-alt"></i> 123 Tech Street, Silicon Valley, CA</p>

            {/* Social Media Icons */}
            <div>
              <a href="#" className="text-light me-2"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-2"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="small mb-0">&copy; {new Date().getFullYear()} ShopEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

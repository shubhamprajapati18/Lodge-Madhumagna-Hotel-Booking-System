import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // Will create CSS later

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3>Lodge Madhumagna</h3>
          <p>Experience clean, peaceful, and budget-friendly accommodation in Udala, Mayurbhanj. </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weddings-events">Weddings</Link>
            </li>
            <li>
              <Link to="/accommodation">Rooms</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>College Road, Udala, Mayurbhanj,Odisha-757041.</p>
          <p>+91-8249310027 , 9114560027</p>
          <p>lodge.madhumagna@gmail.com</p>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Lodge Madhumagna. All rights reserved. HQ8X
        </p>
        <p style={{fontSize: '0.75rem', opacity: 0.7, marginTop: '4px'}}>
          Developed by <strong>HQ8X Technologies</strong>
        </p>
        <Link to="/admin/login" className="admin-link">
          Owner Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

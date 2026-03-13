import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content" data-aos="fade-up" data-aos-duration="1500">
        <span className="hero-welcome-text">Welcome to Lodge Madhumagna</span>

        <h1 className="hero-title">
          Affordable Comfort,
          <br />
          Trusted Hospitality Since 1996
        </h1>

        <p className="hero-desc">
          Experience clean, peaceful, and budget-friendly accommodation in Udala, Mayurbhanj. Perfect for travellers, families, and business guests looking for a relaxing stay.
        </p>

        <div className="hero-buttons">
          <Link to="/contact-us" className="hero-btn btn-gold">
            BOOK NOW
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn btn-dark-green"
          >
            WHATSAPP BOOKING
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
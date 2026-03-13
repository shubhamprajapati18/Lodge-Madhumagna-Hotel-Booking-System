import React from "react";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../common/FeatureCard";
import {
  FaBed,
  FaTint,
  FaBroom,
  FaShoppingBag,
  FaParking,
  FaWifi,
  FaTv,
  FaUtensils,
  FaRoute,
  FaSmile
} from "react-icons/fa";
import "./OurFacilities.css";

const OurFacilities = () => {
  const facilities = [
    {
      icon: <FaBed />,
      title: "Comfortable Rooms",
      description: "(AC & Non-AC) with attached bathrooms"
    },
    {
      icon: <FaTint />,
      title: "24-Hour Water Supply",
      description: "Uninterrupted water supply for your convenience"
    },
    {
      icon: <FaBroom />,
      title: "Clean and Hygienic",
      description: "Maintaining high standards of cleanliness"
    },
    {
      icon: <FaShoppingBag />,
      title: "Nearby Market",
      description: "Easy market and transport access"
    },
    {
      icon: <FaParking />,
      title: "Free Parking",
      description: "Safe and secure free parking facility"
    },
    {
      icon: <FaWifi />,
      title: "Free Wi-Fi",
      description: "High-speed internet access across the lodge"
    },
    {
      icon: <FaTv />,
      title: "Flat Screen LED TV",
      description: "In-room entertainment"
    },
    {
      icon: <FaUtensils />,
      title: "Food Arrangement*",
      description: "Available on request"
    },
    {
      icon: <FaRoute />,
      title: "Tour and Travels*",
      description: "Assistance with your travel plans"
    },
    {
      icon: <FaSmile />,
      title: "Friendly Hospitality",
      description: "Dedicated staff to ensure a pleasant stay"
    }
  ];

  return (
    <section className="section facilities-section bg-light" id="our-facilities">
      <div className="container">
        <SectionTitle
          title="Our Facilities"
          subtitle="Short Preview"
          centered={true}
        />
        <div className="facilities-compact-grid">
          {facilities.map((facility, index) => (
            <div className="facility-compact-card" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="facility-icon">
                {facility.icon}
              </div>
              <div className="facility-content">
                <h4>{facility.title}</h4>
                <p>{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;

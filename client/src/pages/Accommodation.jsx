import React from "react";
import RoomCard from "../components/common/RoomCard";
import headerImage from "../assets/Room2.png";
import PageHeader from "../components/common/PageHeader";
import "./Accommodation.css";

import z1 from "../assets/z1.png";
import z2 from "../assets/z2.png";
import z3 from "../assets/z3.png";
import z4 from "../assets/z4.png";
import z5 from "../assets/z5.png";

const Accommodation = () => {
  const rooms = [
    {
      id: 1,
      title: "Double Bed A/C Room",
      type: "Double",
      capacity: 2,
      
      description: "Comfortable air-conditioned room with a double bed, attached bathroom, and modern amenities for a relaxing stay.",
      image: z1,
      amenities: ["A/C", "Attached Bathroom", "Free Wi-Fi", "LED TV"]
    },
    {
      id: 2,
      title: "Single Bed A/C Room",
      type: "Single",
      capacity: 1,
      
      description: "Cozy air-conditioned room tailored for solo travelers. Features comfortable bedding, attached bath, and Wi-Fi.",
      image: z2,
      amenities: ["A/C", "Attached Bathroom", "Free Wi-Fi", "LED TV"]
    },
    {
      id: 3,
      title: "Double Bed Non-A/C Room",
      type: "Double",
      capacity: 2,
      
      description: "Spacious non-A/C room with a double bed and essential amenities. Budget-friendly for families or friends.",
      image: z3,
      amenities: ["Attached Bathroom", "Fan", "Free Wi-Fi", "LED TV"]
    },
    {
      id: 4,
      title: "Single Bed Non-A/C Room",
      type: "Single",
      capacity: 1,
      
      description: "Our most economical option for solo travelers, featuring a simple, clean, non-A/C room with standard amenities.",
      image: z4,
      amenities: ["Attached Bathroom", "Fan", "Free Wi-Fi", "LED TV"]
    },
    {
      id: 5,
      title: "Single Bed Non-A/C Room",
      type: "Single",
      capacity: 1,
      
      description: "Our most economical option for solo travelers, featuring a simple, clean, non-A/C room with standard amenities.",
      image: z5,
      amenities: ["Attached Bathroom", "Fan", "Free Wi-Fi", "LED TV"]
    }
  ];

  return (
    <div className="page accommodation-page">
      <PageHeader
        title="Luxury Accommodation"
        subtitle="Stay in Comfort & Style"
        bgImage={headerImage}
      />

      <section className="section">
        <div
          className="container"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontSize: "1.1rem",
              color: "#555",
            }}
          >
            Experience the finest hospitality at Lodge Madhumagna. Each room is
            thoughtfully designed to provide you with the utmost comfort and
            luxury.
          </p>
        </div>
        <div className="container rooms-grid">
          {rooms.map((room, index) => (
            <RoomCard key={index} {...room} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accommodation;

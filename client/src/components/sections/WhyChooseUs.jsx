import React from "react";
import SectionTitle from "../common/SectionTitle";
import {
  FaSwimmingPool,
  FaLeaf,
  FaMapMarkerAlt,
  FaGlassCheers,
  FaBed,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaGlassCheers />,
      title: "Clean & Comfortable Rooms ",
      description:
        "Well-maintained rooms(AC & Non-AC) designed for a relaxing stay",
    },
    {
      icon: <FaBed />,
      title: "Affordable Pricing",
      description:
        "Budget-friendly accommodation for all travellers",
    },
    {
      icon: <FaSwimmingPool />,
      title: "Convenient Location",
      description:
        "Easy access from major roads and nearby attractions",
    },
    {
      icon: <FaLeaf />,
      title: "Friendly Hospitality",
      description:
        "Helpful and welcoming staff ready to assist you",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Peaceful Environment ",
      description:
        "Ideal for rest after travel or work",
    },
  ];

  return (
    <section className="section bg-light" id="why-choose-us">
      <div className="container">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Experience Excellence"
          centered={true}
        />
        <div className="facilities-compact-grid">
          {features.map((feature, index) => (
            <div className="facility-compact-card" key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <div className="facility-icon">
                {feature.icon}
              </div>
              <div className="facility-content">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

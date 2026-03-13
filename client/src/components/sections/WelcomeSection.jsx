import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import Button from "../common/Button";
import "./WelcomeSection.css";
import welcomeImage from "../../assets/a1.png";

const WelcomeSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section welcome-section" id="welcome">
      <div className="container welcome-container">
        <div className="welcome-image" data-aos="fade-right">
          <img src={welcomeImage} alt="Lodge Madhumagna Welcome" />
          <div className="image-overlay-box">
            <h4>Comfort Redefined</h4>
          </div>
        </div>
        <div className="welcome-text" data-aos="fade-left">
          <SectionTitle
            title="Welcome to Lodge Madhumagna"
            subtitle="The Jewel of Mayurbhanj"
            centered={false}
          />
          <p>
            Welcome to Lodge Madhumagna, your trusted destination for
            comfortable and affordable lodging in Udala, Mayurbhanj. Our lodge
            is designed to provide guests with a clean, safe, and relaxing
            environment after a long journey or busy day.
          </p>
          <p>
            Our rooms are thoughtfully maintained to ensure cleanliness, safety,
            and comfort for every guest. After a long journey or a busy day, you
            can unwind in a calm environment designed to make your stay
            enjoyable and stress-free.
          </p>

          <div className={`expanded-content ${expanded ? "show" : ""}`}>
            <p>
              Whether you are visiting for business, travel, or a short getaway,
              our rooms offer the comfort and convenience you need. With
              friendly service and a peaceful atmosphere, Lodge Madhumagna
              ensures every guest feels at home.
            </p>
          </div>

          <button
            className="read-more-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

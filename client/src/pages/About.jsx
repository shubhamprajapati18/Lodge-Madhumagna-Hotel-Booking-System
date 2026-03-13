import React from "react";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";
import FeatureCard from "../components/common/FeatureCard";
import headerImage from "../assets/a1.png";
import {
  FaSolarPanel,
  FaCloudRain,
  FaRecycle,
  FaEye,
  FaBullseye,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="page about-page">
      <PageHeader
        title="About Us"
        subtitle="Our Journey & Vision"
        bgImage={headerImage}
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="Our Story" centered={false} />
          <div className="story-content" data-aos="fade-up">
            <p>
              Lodge Madhumagna was established in 1996 as the first lodge in Udala with a simple mission — to provide travellers with a comfortable, clean, and affordable place to stay in Udala, Mayurbhanj. Over the years, the lodge has built a strong reputation for its peaceful environment, warm hospitality, and reliable service.
            </p>
            <p>
              Conveniently located in the heart of Udala, Lodge Madhumagna offers easy access to local markets, transport facilities, and nearby attractions, making it a preferred choice for tourists, business visitors, and families. Our rooms are designed to provide a relaxing and pleasant stay while maintaining high standards of cleanliness and comfort.
            </p>
            <p>
              For nearly three decades, we have proudly welcomed guests from different parts of the country who value a homely atmosphere and quality accommodation at reasonable prices. Lodge Madhumagna continues to grow as a trusted and dependable place to stay in Udala.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <SectionTitle title="Mission & Vision" center={true} />
          <div className="mission-grid">
            <FeatureCard
              icon={<FaEye />}
              title="Our Vision"
              description="Our vision is to become one of the most trusted and preferred lodges in Udala, Mayurbhanj, known for cleanliness, comfort, and reliable guest service."
            />
            <FeatureCard
              icon={<FaBullseye />}
              title="Our Mission"
              description="Our mission is to provide guests with safe, comfortable, and affordable accommodation, ensuring every visitor experiences warm hospitality and excellent service."
            />
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;

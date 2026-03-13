import React, { useState } from "react";
import API_URL from "../../config";
import SectionTitle from "../common/SectionTitle";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./TestimonialSlider.css";

// Fetched from API

const TestimonialSlider = () => {
  const [testimonials] = useState([
    {
      text: "Lodge Madhumagna is an exceptional choice for anyone seeking a comfortable stay without breaking the bank. The rooms are clean and provide a refreshing atmosphere. Highly recommended for budget travellers.",
      rating: 5,
      name: "Guest",
      role: "Verified Guest",
    },
    {
      text: "I had a great time at Lodge Madhumagna. The booking process was easy, the rooms were comfortable, and the staff were very friendly and helpful.",
      rating: 5,
      name: "Guest",
      role: "Verified Guest",
    },
    {
      text: "A clean and quiet place to stay. Perfect for relaxing after a long journey.",
      rating: 5,
      name: "Guest",
      role: "Verified Guest",
    }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  if (testimonials.length === 0) return null;

  return (
    <section className="section testimonial-section">
      <div className="container">
        <SectionTitle
          title="Guest Stories"
          subtitle="What People Say"
          centered={true}
        />

        <div className="testimonial-slider" data-aos="fade-up">
          <button className="slider-btn prev-btn" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          <div className="testimonial-card">
            <div className="quote-icon">
              <FaQuoteLeft />
            </div>
            <p className="testimonial-text">
              {testimonials[currentIndex].text}
            </p>
            <div className="testimonial-rating">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="testimonial-user">
              {testimonials[currentIndex].image && (
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                />
              )}
              <div className="user-info">
                <h4>{testimonials[currentIndex].name}</h4>
                <span>{testimonials[currentIndex].role}</span>
              </div>
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

import React, { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import SectionTitle from "../components/common/SectionTitle";
import Button from "../components/common/Button";
import supabase from "../supabaseClient";
import headerImage from "../assets/hero.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
// import { toast } from 'react-toastify'; // If installed, else use alert
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("inquiries").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          status: "New",
        },
      ]);

      if (error) throw error;

      alert("Thank you for your inquiry! We will get back to you shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="page contact-page">
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        bgImage={headerImage}
      />

      <section className="section">
        <div className="container contact-container">
          <div className="contact-info" data-aos="fade-right">
            <SectionTitle title="Reach Out to Us" centered={false} />
            <p className="contact-desc">
              Whether you are planning a grand wedding, a corporate event, or a
              relaxing getaway, our team is here to assist you.
            </p>

            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>
                  Lodge Madhumagna, Udala-Baripada Road (College Road), Udala,
                  Mayurbhanj, Odisha – 757041, India
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div>
                <h4>Phone / WhatsApp</h4>
                <p>+91 8249310027</p>
                <p>+91 9114560027</p>
                <p>
                  <a href="https://wa.me/918249310027" target="_blank" rel="noreferrer" style={{color: 'var(--color-emerald-dark)', textDecoration: 'none'}}>
                    WhatsApp Us
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>lodge.madhumagna@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <FaClock className="info-icon" />
              <div>
                <h4>Working Hours</h4>
                <p>Open 24 Hours</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper" data-aos="fade-left">
            <h3>Send an Inquiry</h3>
            <p style={{marginBottom: '20px', color: 'var(--color-text-dark)'}}>
              Need a comfortable and affordable stay? Book your room today and experience the exceptional hospitality of Lodge Madhumagna.
            </p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Phone"
                  />
                </div>
              </div>


              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <Button text="Send Message" type="primary" onClick={() => {}} />
              {/* Button component renders <button> if no 'to' prop, but type='primary' might confuse it with html type? 
                  My Button component uses onClick. If inside form, default button type is submit. 
                  My Button component renders <button className...> without type attr, so it defaults to submit.
                  Let's check Button.jsx. It renders <button ...>. Yes.
              */}
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3688.0772740919325!2d86.5677222!3d21.5799021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c394d7ab3fafb%3A0xa49079e798fed043!2sLODGE%20MADHUMAGNA!5e0!3m2!1sen!2sin!4v1709462800000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;

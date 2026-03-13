import React, { useState, useEffect } from "react";
import SectionTitle from "../components/common/SectionTitle";
import PageHeader from "../components/common/PageHeader";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import headerImage from "../assets/z6.png";
import "./Gallery.css";

import imgZ7 from "../assets/z7.png";
import imgZ6 from "../assets/z6.png";
import imgZ5 from "../assets/z5.png";
import imgZ4 from "../assets/z4.png";
import imgZ3 from "../assets/z3.png";
import imgZ2 from "../assets/z2.png";
import imgZ1 from "../assets/z1.png";
import imgA1 from "../assets/a1.png";
import imgHero from "../assets/hero.png";
import imgZ8 from "../assets/z8.png";
import imgZ9 from "../assets/z9.png";
import imgZ10 from "../assets/z10.png";

const Gallery = () => {
  const [images] = useState([
    { id: 1, src: imgZ7, category: "Accommodation", alt: "Double Bed A/C Room" },
    { id: 2, src: imgZ6, category: "Accommodation", alt: "Single Bed A/C Room" },
    { id: 3, src: imgZ5, category: "Accommodation", alt: "Double Bed Non-A/C Room" },
    { id: 4, src: imgZ4, category: "Accommodation", alt: "Single Bed Non-A/C Room" },
    { id: 5, src: imgZ3, category: "Weddings", alt: "Wedding Setup" },
    { id: 6, src: imgZ2, category: "Events", alt: "Event Setup" },
    { id: 7, src: imgZ1, category: "Accommodation", alt: "Lodge Exterior" },
    { id: 8, src: imgA1, category: "Accommodation", alt: "Reception Area" },
    { id: 9, src: imgHero, category: "Accommodation", alt: "Reception Area" },
    { id: 10, src: imgZ8, category: "Accommodation", alt: "Reception Area" },
    { id: 11, src: imgZ9, category: "Accommodation", alt: "Reception Area" },
    { id: 12, src: imgZ10, category: "Accommodation", alt: "Reception Area" },
  ]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filters = ["All", "Accommodation", "Weddings", "Events"];

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImageIndex]);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (direction) => {
    if (selectedImageIndex === null) return;
    const newIndex =
      (selectedImageIndex + direction + filteredImages.length) %
      filteredImages.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="page gallery-page">
      <PageHeader
        title="Photo Gallery"
        subtitle="Capturing Moments"
        bgImage={headerImage}
      />

      <section className="section">
        <div className="container">
          <SectionTitle title="Our Collection" centered={true} />

          

          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
                data-aos="fade-up"
              >
                <img src={image.src} alt={image.alt} />
                <div className="gallery-overlay">
                  <span>View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="lightbox-overlay">
          <button className="close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <button
            className="nav-btn prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(-1);
            }}
          >
            <FaChevronLeft />
          </button>
          <img
            src={filteredImages[selectedImageIndex].src}
            alt={filteredImages[selectedImageIndex].alt}
            className="lightbox-image"
          />
          <button
            className="nav-btn next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage(1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

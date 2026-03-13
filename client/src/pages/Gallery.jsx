import React, { useState, useEffect } from "react";
import SectionTitle from "../components/common/SectionTitle";
import PageHeader from "../components/common/PageHeader";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import headerImage from "../assets/z6.png";
import "./Gallery.css";

// Images fetched from API

const Gallery = () => {
  const [images] = useState([
    { id: 1, src: "/src/assets/z7.png", category: "Accommodation", alt: "Double Bed A/C Room" },
    { id: 2, src: "/src/assets/z6.png", category: "Accommodation", alt: "Single Bed A/C Room" },
    { id: 3, src: "/src/assets/z5.png", category: "Accommodation", alt: "Double Bed Non-A/C Room" },
    { id: 4, src: "/src/assets/z4.png", category: "Accommodation", alt: "Single Bed Non-A/C Room" },
    { id: 5, src: "/src/assets/z3.png", category: "Weddings", alt: "Wedding Setup" },
    { id: 6, src: "/src/assets/z2.png", category: "Events", alt: "Event Setup" },
    { id: 7, src: "/src/assets/z1.png", category: "Accommodation", alt: "Lodge Exterior" },
    { id: 8, src: "/src/assets/a1.png", category: "Accommodation", alt: "Reception Area" },
    { id: 9, src: "/src/assets/hero.png", category: "Accommodation", alt: "Reception Area" },
    { id: 10, src: "/src/assets/z8.png", category: "Accommodation", alt: "Reception Area" },
    { id: 11, src: "/src/assets/z9.png", category: "Accommodation", alt: "Reception Area" },
    { id: 12, src: "/src/assets/z10.png", category: "Accommodation", alt: "Reception Area" },

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

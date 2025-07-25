// components/Hero.tsx
import React from "react";
import "./../../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background video */}
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src="/images/team.jpg" alt="" /> */}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="home-hero-title">
          Revolutionizing Water{" "}
          <span className="highlight">Waste Management</span>
        </h1>
        <p className="home-hero-subtitle">
          Sustainable solutions for cleaner water, smarter cities, and a
          healthier planet.
        </p>
        <div className="hero-buttons">
          <a
            href="https://wa.me/+201016409170"
            target="_blank"
            className="hero-custom-btn"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

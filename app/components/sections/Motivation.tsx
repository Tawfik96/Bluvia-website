import "./../../styles/Motivation.css";
import React, { useState, useRef, useEffect } from "react";

interface MotivationProps {
  beforeImage?: string;
  afterImage?: string;
  heading?: string;
  bulletPoints?: string[];
}

const Motivation: React.FC<MotivationProps> = ({
  beforeImage = "/images/before.png",
  afterImage = "/images/after.png",
  heading = "Why Water Treatment Matters?",
  bulletPoints = [
    " Helps industrial facilities comply with increasingly strict environmental regulations by removing harmful pollutants from wastewater before discharge. ",
    "Prevents corrosion, scaling, and microbial growth in vital infrastructure like boilers, cooling towers, and piping systems. Proper treatment significantly extends the lifespan of high-value industrial assets.",
    "Ensures that water used in manufacturing processes meets required purity and quality standards, which is especially critical in sectors like food processing, electronics, and pharmaceuticals. ",
    "Enables wastewater recycling and recovery of valuable resources such as heat, chemicals, or metals. By reducing dependency on freshwater sources and minimizing waste disposal costs.",
  ],
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <section className="motivation-section">
      <div className="motivation-container">
        <div className="image-comparison" ref={containerRef}>
          <div className="image-container">
            <img
              src={beforeImage}
              alt="Before"
              className="comparison-image before-image"
            />
            <div
              className="after-image-container"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={afterImage}
                alt="After"
                className="comparison-image after-image"
              />
            </div>
          </div>

          <div
            className="slider-line"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div className="slider-handle">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="slider-icon"
              >
                <path
                  d="M8 7L4 12L8 17M16 7L20 12L16 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2 className="motivation-heading">{heading}</h2>
          <ul className="motivation-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="motivation-item">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Motivation;

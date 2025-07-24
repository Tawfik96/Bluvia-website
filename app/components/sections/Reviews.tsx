import React, { useState, useEffect, useRef } from "react";
// import "./../../styles/Reviews.css";

interface Review {
  name: string;
  role: string;
  quote: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Ahmed",
    role: "Marketing Director",
    quote:
      "Universal Water Solutions transformed our operations. Their reliability and support are unmatched.",
  },
  {
    name: "John Musa",
    role: "Factory Manager",
    quote:
      "Their water treatment systems helped us cut costs while boosting efficiency. Highly recommended!",
  },
  {
    name: "Fatima Nabil",
    role: "Municipal Engineer",
    quote:
      "Professional, responsive, and always on time. A top-tier industrial partner!",
  },
  {
    name: "Omar Khaled",
    role: "Sustainability Officer",
    quote:
      "Their innovative solutions are a game-changer for our sustainability goals. Exceptional service!",
  },
];

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-carousel">
        <div
          className="testimonial-list"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {reviews.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="quote">"{t.quote}"</p>
              <p className="name">{t.name}</p>
              <p className="role">{t.role}</p>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

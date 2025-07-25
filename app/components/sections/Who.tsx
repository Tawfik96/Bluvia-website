import React from "react";
import "./../../styles/Who.css";

const WhoSection: React.FC = () => {
  return (
    <section className="who-section">
      <div className="corner top-left" />

      <h2 className="who-header">water is what matters</h2>
      <p className="who-paragraph">
        At Bluvia, we believe that{" "}
        <span className="blue-text">clean water</span> is the foundation of
        life. Our mission is to revolutionize{" "}
        <span className="blue-text">industrial water treatment</span> by
        providing sustainable and efficient solutions.Our advanced technologies
        are designed to meet the evolving needs of diverse sectors, from
        manufacturing to energy production. Together, we can build a cleaner,
        safer, and more water-resilient world. Through innovation and
        dedication, we aim to ensure that{" "}
        <span className="blue-text">water resources</span> are preserved and
        optimized for a better tomorrow.
      </p>

      <div className="corner bottom-right" />
    </section>
  );
};

export default WhoSection;

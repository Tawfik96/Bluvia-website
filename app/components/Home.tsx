// src/components/sections/Home.tsx
import React from "react";
import "../styles/Home.css";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Reviews from "./sections/Reviews";
import Motivation from "./sections/Motivation";
import Features from "./sections/Features";
import Who from "./sections/Who";
import CallToAction from "./sections/CallToAction";
import Testing from "./sections/Testing";

interface HomeProps {
  showSection: (section: string) => void;
}

const Home: React.FC<HomeProps> = ({ showSection }) => {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <Hero />
      </section>
      <section id="who" className="who-section">
        <Who />
      </section>

      <section id="motivation" className="motivation-section">
        <Motivation />
      </section>

      <section id="features" className="features-section">
        <Features />
      </section>

      <section id="projects" className="projects-section">
        <Projects />
      </section>

      <section id="reviews" className="reviews-section">
        <Reviews />
      </section>

      <section id="testing" className="testing-section">
        <Testing />
      </section>

      <section id="call-to-action" className="call-to-action-section">
        <CallToAction />
      </section>

      {/* <section className="cta-section">
        <h2>Ready to Make an Impact on Water Waste?</h2>
        <p>
          Contact us today to learn how we can help your city, company, or
          organization reduce water waste sustainably.
        </p>
        <a href="#contact-form" className="cta-button">
          Get in Touch
        </a>
      </section>

      <section id="contact-form" className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-grid">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="your@email.com" />
            </div>
          </div>
          <div>
            <label>Message</label>
            <textarea
              rows={5}
              placeholder="Tell us about your project or questions..."
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section> */}
    </div>
  );
};

export default Home;

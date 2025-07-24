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

      {/* <section id="testing" className="testing-section">
        <Testing />
      </section> */}

      <section id="call-to-action" className="call-to-action-section">
        <CallToAction />
      </section>
    </div>
  );
};

export default Home;

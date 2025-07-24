"use client";
// // src/pages/index.tsx
// import type { NextPage } from "next";
// import Head from "next/head";
// import { useState } from "react";
// import Layout from "./components/Layout";
// import HomeSection from "./components/Home";
// import AboutSection from "./components/About";
// import ContactSection from "./components/Contact";

// const Home: NextPage = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   const showSection = (sectionName: string) => {
//     setActiveSection(sectionName);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div>
//       <Head>
//         <title>Bluvia - Industrial Water Waste Solutions</title>
//         <meta
//           name="description"
//           content="Revolutionary industrial water waste solutions"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Layout activeSection={activeSection} showSection={showSection}>
//         {activeSection === "home" && <HomeSection showSection={showSection} />}
//         {activeSection === "about" && <AboutSection />}
//         {activeSection === "contact" && <ContactSection />}
//       </Layout>
//     </div>
//   );
// };

// export default Home;

import type { NextPage } from "next";

import React, { useEffect, useState } from "react";
import "./temp_style.css";

const WaterTreatment: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.target.classList.contains("stats-section")
        ) {
          if (!countersAnimated) {
            animateCounters();
            setCountersAnimated(true);
          }
        }
      });
    }, observerOptions);

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const animateCounters = () => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target") || "0");
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          if (target >= 1000000) {
            counter.textContent = (current / 1000000).toFixed(1) + "M";
          } else if (target >= 1000) {
            counter.textContent = (current / 1000).toFixed(0) + "K";
          } else {
            counter.textContent = Math.floor(current).toString();
          }
          requestAnimationFrame(updateCounter);
        } else {
          if (target >= 1000000) {
            counter.textContent = (target / 1000000).toFixed(1) + "M";
          } else if (target >= 1000) {
            counter.textContent = (target / 1000).toFixed(0) + "K";
          } else {
            counter.textContent = target.toString();
          }
        }
      };

      updateCounter();
    });
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleServiceCardHover = (
    e: React.MouseEvent<HTMLDivElement>,
    isEntering: boolean
  ) => {
    const card = e.currentTarget;
    if (isEntering) {
      card.style.transform = "translateY(-10px) scale(1.02)";
    } else {
      card.style.transform = "translateY(0) scale(1)";
    }
  };

  return (
    <div>
      <nav className={`nav ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            AquaTech
          </a>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className="active"
                onClick={(e) => handleSmoothScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleSmoothScroll(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <section className="hero" id="home">
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>
        <div className="hero-content">
          <h1>Advanced Water Treatment Solutions</h1>
          <p>
            Pioneering sustainable water management with cutting-edge technology
            for municipal, industrial, and commercial applications worldwide.
          </p>
          <div className="cta-buttons">
            <a
              href="#services"
              className="btn btn-primary"
              onClick={(e) => handleSmoothScroll(e, "#services")}
            >
              Explore Solutions
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Get Consultation
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 16l-4-4h8z" />
          </svg>
        </div>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="section" id="services">
        <div className="section-title">
          <h2>Our Water Treatment Services</h2>
          <p>
            Comprehensive solutions for every water treatment challenge, backed
            by decades of expertise and innovation.
          </p>
        </div>
        <div className="services-grid">
          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">💧</div>
            <h3>Municipal Water Treatment</h3>
            <p>
              Complete wastewater treatment systems for cities and
              municipalities, ensuring safe discharge and environmental
              protection with advanced biological and chemical processes.
            </p>
          </div>

          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">🏭</div>
            <h3>Industrial Water Solutions</h3>
            <p>
              Customized treatment solutions for manufacturing facilities,
              including process water recycling, contaminant removal, and zero
              liquid discharge systems.
            </p>
          </div>

          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">♻️</div>
            <h3>Water Recycling Systems</h3>
            <p>
              Innovative technologies for water reuse and recycling, reducing
              consumption and costs while meeting the highest quality standards
              for various applications.
            </p>
          </div>

          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">⚡</div>
            <h3>Advanced Oxidation</h3>
            <p>
              State-of-the-art oxidation processes for treating complex
              contaminants, pharmaceuticals, and emerging pollutants using UV,
              ozone, and electrochemical methods.
            </p>
          </div>

          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">🔬</div>
            <h3>Water Quality Monitoring</h3>
            <p>
              Real-time monitoring and control systems with IoT integration,
              providing continuous water quality assessment and automated
              process optimization.
            </p>
          </div>

          <div
            className="service-card"
            onMouseEnter={(e) => handleServiceCardHover(e, true)}
            onMouseLeave={(e) => handleServiceCardHover(e, false)}
          >
            <div className="service-icon">🛠️</div>
            <h3>Maintenance & Support</h3>
            <p>
              Comprehensive maintenance programs and 24/7 technical support to
              ensure optimal performance and maximum uptime of your water
              treatment systems.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-title">
          <h2>Our Impact in Numbers</h2>
          <p>
            Trusted by organizations worldwide for reliable, efficient water
            treatment solutions.
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number" data-target="500">
              0
            </span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="50">
              0
            </span>
            <span className="stat-label">Countries Served</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="1000000">
              0
            </span>
            <span className="stat-label">Liters Treated Daily</span>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-target="25">
              0
            </span>
            <span className="stat-label">Years of Experience</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">AquaTech Solutions</div>
          <p>
            Leading the future of water treatment with innovative, sustainable
            solutions for a cleaner world.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              📧
            </a>
            <a href="#" className="social-link">
              📱
            </a>
            <a href="#" className="social-link">
              🌐
            </a>
            <a href="#" className="social-link">
              💼
            </a>
          </div>
          <p>&copy; 2025 AquaTech Solutions. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default WaterTreatment;

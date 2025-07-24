// import React from "react";
// import "../styles/Navbar.css"; // Make sure this path is correct based on your project structure

// interface NavbarProps {
//   activeSection: string;
//   showSection: (section: string) => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ activeSection, showSection }) => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <h1>Bluvia</h1>
//         </div>
//         <div className="navbar-tabs">
//           {["home", "about", "contact"].map((section) => (
//             <button
//               key={section}
//               onClick={() => showSection(section)}
//               className={`navbar-tab ${
//                 activeSection === section ? "active" : ""
//               }`}
//             >
//               {section === "home"
//                 ? "Home"
//                 : section === "about"
//                 ? "About Us"
//                 : "Contact"}
//             </button>
//           ))}
//         </div>
//         <div className="navbar-placeholder" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";

interface NavbarProps {
  activeSection: string;
  showSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, showSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    showSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo and Brand */}
        <div className="navbar-brand" onClick={() => handleNavClick("home")}>
          <div className="logo">
            {/* Same SVG from 2nd navbar */}
            {/* <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="url(#logoGradient)"
                stroke="url(#strokeGradient)"
                strokeWidth="2"
              />
              <path
                d="M30 35C30 35 35 25 50 25C65 25 70 35 70 35"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M25 50C25 50 30 40 50 40C70 40 75 50 75 50"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M30 65C30 65 35 55 50 55C65 55 70 65 70 65"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="35" cy="75" r="3" fill="white" opacity="0.8" />
              <circle cx="50" cy="78" r="2" fill="white" opacity="0.6" />
              <circle cx="65" cy="75" r="3" fill="white" opacity="0.8" />
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <linearGradient
                  id="strokeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg> */}
            <img
              src="/images/only_logo.png"
              alt="Bluvia logo"
              width={60}
              height={60}
            />
          </div>
          <div className="brand-text">
            <span className="company-name">Bluvia</span>
            <span className="company-tagline">Water Treatment Solutions</span>
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="navbar-nav">
          {["home", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${
                activeSection === section ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section);
              }}
            >
              <span className="nav-text">
                {section === "home"
                  ? "Home"
                  : section === "about"
                  ? "About"
                  : "Contact"}
              </span>
              <div className="nav-indicator" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="navbar-cta">
          <button
            className="cta-button"
            onClick={() => handleNavClick("contact")}
          >
            Get Quote
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          {["home", "about", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="mobile-nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section);
              }}
            >
              {section === "home"
                ? "Home"
                : section === "about"
                ? "About"
                : "Contact"}
            </a>
          ))}
          <div className="mobile-cta-divider" />
          <button
            className="mobile-cta-button"
            onClick={() => handleNavClick("quote")}
          >
            Get Free Quote
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import "../styles/Navbar.css"; // Make sure this path is correct based on your project structure

interface NavbarProps {
  activeSection: string;
  showSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, showSection }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>Bluvia</h1>
        </div>
        <div className="navbar-tabs">
          {["home", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => showSection(section)}
              className={`navbar-tab ${
                activeSection === section ? "active" : ""
              }`}
            >
              {section === "home"
                ? "Home"
                : section === "about"
                ? "About Us"
                : "Contact"}
            </button>
          ))}
        </div>
        <div className="navbar-placeholder" />
      </div>
    </nav>
  );
};

export default Navbar;

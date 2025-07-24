// FeaturesSection.tsx
import React from "react";
import "./../../styles/Features.css";

const WhatWeOffer: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Water Quality Testing & Analysis",
      description:
        "Comprehensive laboratory analysis and real-time monitoring systems to ensure water quality meets industry standards and regulatory requirements.",
    },
    {
      id: 2,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      title: "Custom Treatment System Design",
      description:
        "Tailored water treatment solutions designed specifically for your industrial processes, optimizing efficiency and minimizing operational costs.",
    },
    {
      id: 3,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Regulatory Compliance Support",
      description:
        "Complete documentation and reporting services to ensure full compliance with environmental regulations and industry standards.",
    },
    {
      id: 4,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path d="M6 10V18" stroke="currentColor" strokeWidth="2" />
          <path d="M18 6V18" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Equipment Maintenance & Support",
      description:
        "Preventive maintenance programs and 24/7 technical support to ensure optimal system performance and minimize downtime.",
    },
    {
      id: 5,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7.5 4.21L12 6.81L16.5 4.21"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M7.5 19.79V14.6L3 12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M21 12L16.5 14.6V19.79"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M12 12.01V21.8"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Chemical Treatment Programs",
      description:
        "Specialized chemical treatment solutions including corrosion inhibitors, scale preventers, and biocides for comprehensive water system protection.",
    },
    {
      id: 6,
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 3V9C3 10.1046 3.89543 11 5 11H9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M21 3V9C21 10.1046 20.1046 11 19 11H15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M3 21V15C3 13.8954 3.89543 13 5 13H9"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M21 21V15C21 13.8954 20.1046 13 19 13H15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      title: "Process Water Recycling",
      description:
        "Advanced recycling systems that reduce water consumption, minimize waste discharge, and lower operational costs while maintaining process quality.",
    },
  ];

  return (
    <section className="what-we-offer">
      <div className="floating-elements">
        <div className="floating-bubble bubble-1"></div>
        <div className="floating-bubble bubble-2"></div>
        <div className="floating-bubble bubble-3"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">
            Advanced industrial water treatment solutions engineered for
            efficiency, sustainability, and regulatory compliance across all
            industrial sectors.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="water-animation"></div>
              <div className="service-icon">
                <div className="icon-bg">{service.icon}</div>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;

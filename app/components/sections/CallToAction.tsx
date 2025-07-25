import React from "react";
import "./../../styles/CallToAction.css";

const CallToAction: React.FC = () => {
  const handleGetQuote = () => {
    // Add your quote form logic here
    console.log("Get Quote clicked");
  };

  const handleContactUs = () => {
    // Add your contact logic here
    console.log("Contact Us clicked");
  };

  const handleCallNow = () => {
    // Add your phone call logic here
    console.log("Call Now clicked");
  };

  return (
    <section className="call-to-action">
      <div className="cta-background-elements">
        <div className="bg-bubble bg-bubble-1"></div>
        <div className="bg-bubble bg-bubble-2"></div>
        <div className="bg-bubble bg-bubble-3"></div>
        <div className="bg-wave"></div>
      </div>

      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Ready to Optimize Your
              <span className="highlight"> Water Treatment</span> Process?
            </h2>
            <p className="cta-subtitle">
              Get expert consultation and customized solutions for your
              industrial water treatment needs. Our team of specialists is ready
              to help you improve efficiency, ensure compliance, and reduce
              costs.
            </p>

            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span>Free Initial Consultation</span>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          <div className="cta-actions">
            <div className="primary-actions">
              <a href="https://wa.me/+201016409170" target="_blank">
                <button className="cta-button primary" onClick={handleGetQuote}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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
                  Learn More
                </button>
              </a>
              <a href="https://wa.me/+201016409170" target="_blank">
                <button
                  className="cta-button secondary"
                  onClick={handleContactUs}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Contact Us
                </button>
              </a>
            </div>

            <div className="contact-info">
              <div className="urgent-contact">
                <span className="urgent-label">Need Immediate Assistance?</span>
                <a href="https://wa.me/+201016409170" target="_blank">
                  <button className="phone-button" onClick={handleCallNow}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59344 1.99522 8.06456 2.16708 8.43717 2.48353C8.80978 2.79999 9.06027 3.23945 9.14999 3.72C9.31945 4.68007 9.62473 5.60273 10.06 6.47C10.2004 6.765 10.2573 7.09334 10.2244 7.41784C10.1914 7.74235 10.0699 8.05017 9.86999 8.3L8.44999 9.72C9.85376 12.1892 11.8408 14.1762 14.31 15.58L15.73 14.16C15.9798 13.9601 16.2876 13.8386 16.6121 13.8056C16.9367 13.7727 17.265 13.8296 17.56 13.97C18.4273 14.4053 19.3499 14.7105 20.31 14.88C20.7955 14.9697 21.2398 15.2238 21.5581 15.6011C21.8765 15.9784 22.0468 16.4549 22.04 16.94L22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    Call Now: +201016409170
                  </button>
                </a>
              </div>

              <div className="response-time">
                <div className="response-indicator">
                  <div className="pulse-dot"></div>
                  <span>Typically respond within 2 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

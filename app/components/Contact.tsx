// src/components/sections/Contact.tsx
import React from "react";
import "../styles/contact.css"; // adjust path if needed

const ContactSection: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact-outer">
        <div className="contact-inner">
          {/* Header */}
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>
              Ready to transform your water management? Get in touch with our
              experts today.
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Info + Hours */}
            <div className="contact-info-col">
              <h2 className="contact-subheading">Get In Touch</h2>

              <ul className="contact-info-list">
                {/* Address */}
                <li className="contact-info-item">
                  <span className="contact-icon contact-icon--addr">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Address</h3>
                    <p>
                      New Cairo, ISA
                      <br />
                      (Final site TBD)
                    </p>
                  </div>
                </li>

                {/* Phone */}
                <li className="contact-info-item">
                  <span className="contact-icon contact-icon--phone">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Phone</h3>
                    <p>+20 111 092 6911</p>
                  </div>
                </li>

                {/* Email */}
                <li className="contact-info-item">
                  <span className="contact-icon contact-icon--email">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>Email</h3>
                    <p>info@bluvia.com</p>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="contact-info-item">
                  <span className="contact-icon contact-icon--wa">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"
                        fill="currentColor"
                      />
                      <path
                        d="M12.05 21.785a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26C2.17 6.443 6.605 2.009 12.057 2.009c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884h-.004z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3>WhatsApp</h3>
                    <p>+20 111 092 6911</p>
                  </div>
                </li>
              </ul>

              {/* Working Hours */}
              <h2 className="contact-subheading contact-hours-heading">
                Working Hours
              </h2>
              <table
                className="contact-hours-table"
                aria-label="Office working hours"
              >
                <tbody>
                  <tr>
                    <th scope="row">Saturday:Thursday</th>
                    <td>09:00 – 18:00</td>
                  </tr>

                  <tr>
                    <th scope="row" className="contact-hours-closed">
                      Friday
                    </th>
                    <td className="contact-hours-closed">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Contact Form */}
            <div className="contact-form-col">
              <h2>Send Us a Message</h2>
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent successfully!");
                }}
              >
                <div className="contact-form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Your company" />
                </div>

                <div className="contact-form-group contact-form-group--full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your water treatment needs..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;

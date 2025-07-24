import React from "react";
import "./../styles/About.css";

const AboutUs: React.FC = () => {
  const stats = [
    {
      number: "10+",
      label: "Years Experience",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      number: "30+",
      label: "Projects Completed",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12L11 14L15 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      number: "8+",
      label: "Industrial Clients",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21L12 19L16 21Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 9.5913 17.3679 11.1174 16.2426 12.2426C15.1174 13.3679 13.5913 14 12 14C10.4087 14 8.88258 13.3679 7.75736 12.2426C6.63214 11.1174 6 9.5913 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M2 22C2 18.6863 4.68629 16 8 16H16C19.3137 16 22 18.6863 22 22"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every project, ensuring solutions that exceed industry requirements and client expectations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Innovation Focus",
      description:
        "Continuously adopting cutting-edge technologies and methodologies to provide the most efficient and sustainable water treatment solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9.663 17H4C4 13.5 7 10.5 11 10.5C15 10.5 18 13.5 18 17H12.337"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12C10.1046 12 11 11.1046 11 10C11 8.89543 10.1046 8 9 8C7.89543 8 7 8.89543 7 10C7 11.1046 7.89543 12 9 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M13 8L15 10L21 4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "Environmental Responsibility",
      description:
        "Committed to sustainable practices that protect the environment while delivering cost-effective water treatment solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "Client Partnership",
      description:
        "Building long-term relationships through transparent communication, reliable service, and dedicated support throughout every project lifecycle.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M23 21V19C23 17.9391 22.5786 16.9217 21.8284 16.1716C21.0783 15.4214 20.0609 15 19 15C17.9391 15 16.9217 15.4214 16.1716 16.1716C15.4214 16.9217 15 17.9391 15 19V21"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="16" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
    },
  ];

  // const team = [
  //   {
  //     name: "Dr. Michael Chen",
  //     position: "Chief Executive Officer",
  //     credentials: "Ph.D. Environmental Engineering",
  //     description:
  //       "Over 20 years of experience in industrial water treatment with expertise in regulatory compliance and system optimization.",
  //     image: "/api/placeholder/300/300",
  //   },
  //   {
  //     name: "Eng. Abdo",
  //     position: "Director of Operations",
  //     credentials: "M.Eng. Chemical Engineering",
  //     description:
  //       "Specializes in project management and quality assurance, ensuring seamless execution of complex treatment systems.",
  //     image: "/images/3bdo.png",
  //   },
  //   {
  //     name: "Eng. Amr",
  //     position: "Lead Process Engineer",
  //     credentials: "B.S. Process Engineering, PE",
  //     description:
  //       "Expert in membrane technologies and advanced oxidation processes with focus on energy-efficient solutions.",
  //     image: "/images/amr.png",
  //   },
  //   {
  //     name: "Dr. Lisa Wang",
  //     position: "Research & Development Manager",
  //     credentials: "Ph.D. Water Chemistry",
  //     description:
  //       "Leads innovation initiatives and develops custom treatment solutions for challenging water quality requirements.",
  //     image: "/api/placeholder/300/300",
  //   },
  // ];

  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Our Company</h1>
            <p className="hero-subtitle">
              Leading industrial water treatment specialists with over 10 years
              of proven expertise in delivering innovative, sustainable, and
              cost-effective solutions across diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2 className="section-title">Our Story</h2>
              <p className="overview-paragraph">
                Founded in 2024, our company emerged from a simple mission: to
                provide reliable, efficient, and environmentally responsible
                water treatment solutions for industrial facilities. What
                started as a small team of dedicated engineers has grown into a
                leading provider of comprehensive water treatment services.
              </p>
              <p className="overview-paragraph">
                Today, we serve clients across multiple industries including oil
                & gas, pharmaceutical, manufacturing, and municipal sectors. Our
                success is built on a foundation of technical excellence,
                innovative problem-solving, and unwavering commitment to client
                satisfaction.
              </p>
              <p className="overview-paragraph">
                We understand that each facility has unique challenges and
                requirements. That's why we take a consultative approach,
                working closely with our clients to design customized solutions
                that not only meet their immediate needs but also provide
                long-term value and operational efficiency.
              </p>
            </div>
            <div className="overview-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Our Mission</h3>
              </div>
              <p className="card-description">
                To deliver innovative, reliable, and sustainable water treatment
                solutions that enable our clients to operate efficiently while
                protecting the environment and ensuring regulatory compliance.
                We strive to be the trusted partner for all industrial water
                treatment needs.
              </p>
            </div>

            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h3 className="card-title">Our Vision</h3>
              </div>
              <p className="card-description">
                To be the leading provider of industrial water treatment
                solutions, recognized for our technical expertise, innovative
                approaches, and commitment to environmental stewardship. We
                envision a future where clean water is accessible and
                sustainable for all industrial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="company-values">
        <div className="container">
          <div className="values-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="values-subtitle">
              The principles that guide our decisions and define our commitment
              to excellence
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="team-subtitle">
              Meet the experienced professionals leading our mission to deliver
              exceptional water treatment solutions
            </p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-position">{member.position}</p>
                  <p className="member-credentials">{member.credentials}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;

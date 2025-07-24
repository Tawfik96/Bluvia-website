import React, { useState } from "react";
import "./../../styles/Testing.css";

interface Project {
  id: number;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  duration: string;
  capacity: string;
}

const PreviousProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number>(1);

  const projects: Project[] = [
    {
      id: 1,
      title: "Advanced Reverse Osmosis System",
      client: "PetroTech Industries",
      industry: "Oil & Gas",
      description:
        "Complete water treatment solution for offshore drilling operations requiring ultra-pure water for enhanced oil recovery processes.",
      challenge:
        "High salinity seawater treatment with strict quality requirements for injection water, operating in harsh marine environment with limited maintenance windows.",
      solution:
        "Implemented a multi-stage RO system with pre-treatment filtration, chemical dosing, and automated monitoring. Custom corrosion-resistant materials for marine conditions.",
      results: [
        "99.8% salt removal efficiency",
        "50% reduction in operational costs",
        "Zero unplanned downtime in first year",
        "Exceeded quality standards by 15%",
      ],
      image: "/images/tanks.png",
      tags: ["Reverse Osmosis", "Marine Environment", "Oil & Gas"],
      duration: "8 months",
      capacity: "500,000 GPD",
    },
    {
      id: 2,
      title: "Industrial Wastewater Recycling Plant",
      client: "MegaSteel Corporation",
      industry: "Steel Manufacturing",
      description:
        "Zero liquid discharge system for steel manufacturing facility, treating process water and cooling tower blowdown for complete recycling.",
      challenge:
        "High metal content wastewater with varying flow rates and contamination levels. Regulatory pressure for zero discharge compliance.",
      solution:
        "Designed integrated treatment system combining chemical precipitation, membrane bioreactor, and evaporation crystallizer for complete water recovery.",
      results: [
        "100% water recovery achieved",
        "80% reduction in fresh water consumption",
        "Full regulatory compliance",
        "$2M annual savings in water costs",
      ],
      image: "/images/story.jpg",
      tags: ["Zero Discharge", "Metal Treatment", "Water Recycling"],
      duration: "12 months",
      capacity: "1.2 MGD",
    },
    {
      id: 3,
      title: "Pharmaceutical Grade Water System",
      client: "BioPharm Solutions",
      industry: "Pharmaceutical",
      description:
        "USP Grade purified water system for pharmaceutical manufacturing, meeting FDA validation requirements and Good Manufacturing Practice standards.",
      challenge:
        "Stringent quality requirements for pharmaceutical production, validation documentation, and continuous monitoring with full traceability.",
      solution:
        "Multi-barrier approach with multimedia filtration, activated carbon, RO, EDI, and UV sterilization. Complete automation with data logging and validation protocols.",
      results: [
        "USP monograph compliance achieved",
        "FDA validation completed successfully",
        "99.99% system reliability",
        "Reduced validation time by 40%",
      ],
      image: "/images/team.jpg",
      tags: ["USP Water", "FDA Validation", "Pharmaceutical"],
      duration: "6 months",
      capacity: "100,000 GPD",
    },
    {
      id: 4,
      title: "Municipal Water Treatment Upgrade",
      client: "City of Riverside",
      industry: "Municipal",
      description:
        "Comprehensive upgrade of aging municipal water treatment facility to meet new drinking water standards and increase capacity for growing population.",
      challenge:
        "Aging infrastructure, increasing demand, new regulatory requirements, and need for operational efficiency improvements while maintaining continuous service.",
      solution:
        "Phased upgrade approach with advanced oxidation, membrane filtration, and smart monitoring systems. Minimal service disruption during construction.",
      results: [
        "40% capacity increase achieved",
        "All new standards exceeded",
        "35% improvement in energy efficiency",
        "Enhanced water quality for 50,000 residents",
      ],
      image: "/api/placeholder/600/400",
      tags: ["Municipal", "Drinking Water", "Infrastructure"],
      duration: "18 months",
      capacity: "5 MGD",
    },
  ];

  const handleProjectClick = (projectId: number) => {
    setActiveProject(projectId);
  };

  const activeProjectData =
    projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <section className="previous-projects">
      <div className="projects-background">
        <div className="bg-pattern"></div>
        <div className="floating-elements">
          <div className="float-element element-1"></div>
          <div className="float-element element-2"></div>
          <div className="float-element element-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Previous Projects</h2>{" "}
        </div>

        <div className="projects-content">
          {/* Project Navigation */}
          <div className="project-navigation">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`nav-item ${
                  activeProject === project.id ? "active" : ""
                }`}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="nav-number">{project.id}</div>
                <div className="nav-info">
                  <h4 className="nav-title">{project.title}</h4>
                  <p className="nav-industry">{project.industry}</p>
                </div>
                <div className="nav-indicator">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="project-details">
            <div className="project-image">
              <img
                src={activeProjectData.image}
                alt={activeProjectData.title}
              />
              <div className="image-overlay">
                <div className="project-specs">
                  <div className="spec-item">
                    {/* <span className="spec-label">Duration:</span>
                    <span className="spec-value">
                      {activeProjectData.duration}
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="project-info">
              <div className="project-header">
                <h3 className="project-title">{activeProjectData.title}</h3>
                <div className="client-info">
                  <span className="client-name">
                    {activeProjectData.client}
                  </span>
                </div>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                repellat quis culpa hic sint possimus rerum doloremque, quod
                similique delectus? Architecto mollitia voluptatem sed sint,
                atque perspiciatis excepturi provident. Iusto dolores numquam
                sint nulla reprehenderit sapiente eaque reiciendis ad quasi,
                consectetur repellat corrupti? Maiores ex sequi fugit ea. Quod
                cumque aliquam natus ea iusto, nulla expedita alias consequuntur
                nisi quidem ad, velit voluptate, odio mollitia tempora? Dolore
                placeat voluptatem ea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousProjects;

// components/Projects.tsx (or adjust path as needed)
import "./../../styles/Projects.css"; // Ensure this path is correct
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  risks?: string[];
}

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({
  projects = [
    {
      id: 1,
      title: "Pharmaceutical Industry",
      description:
        "Wastewater from pharmaceutical factories contains active chemical compounds, antibiotics, and complex organic substances that require advanced treatment to prevent environmental and public health risks.",
      image: "/images/pharma.jpg",
      risks: [
        "Groundwater and surface water contamination",
        "Ecosystem disruption due to drug residues",
        "Increased antibiotic resistance in bacteria",
      ],
    },
    {
      id: 2,
      title: "Textile Industry ",
      description:
        "Textile wastewater includes dyes, chemical fixatives, and heavy metals from bleaching and dyeing. Without treatment, it severely impacts aquatic life and soil quality.",
      image: "/images/textile.jpg",
      risks: [
        "Pollution of rivers and lakes with toxic dyes",
        "Oxygen depletion in water bodies",
        "Chemical accumulation in soil and groundwater",
      ],
    },
    {
      id: 3,
      title: "Food Processing Industry ",
      description:
        "Food industry wastewater is rich in organic matter, fats, oils, and biological residues. If untreated, it leads to odor, algal overgrowth, and contamination of water resources.",
      image: "/images/food2.jpeg",
      risks: [
        "Strong odors due to organic decomposition",
        "Algae blooms from nutrient overload",
        "Contamination of drinking and irrigation water",
      ],
    },
    {
      id: 4,
      title: "Paper and Cardboard Industry ",
      description:
        "This wastewater contains organic pollutants, cellulose residues, and bleaching agents, which contribute to visual pollution and biodiversity loss if not treated properly.",
      image: "/images/paper.jpg",
      risks: [
        "Visual and chemical pollution of water bodies",
        "Decline in water quality",
        "Harm to aquatic biodiversity",
      ],
    },
    {
      id: 5,
      title: "Metal Plating Industry ",
      description:
        "Wastewater from metal finishing contains heavy metals like chromium, lead, and strong acids or bases. It poses high toxicity and long-term damage to infrastructure and ecosystems.",
      image: "/images/metal2.jpg",
      risks: [
        "Toxicity to aquatic life",
        "Heavy metal bioaccumulation",
        "Corrosion of public drainage systems",
      ],
    },
    {
      id: 6,
      title: "Domestic Sewage",
      description:
        "Generated from daily human activities, this wastewater contains organic matter, pathogens, nitrogen, and phosphorus. Proper treatment is crucial to avoid disease spread and environmental harm.",
      image: "/images/sewage2.jpg",
      risks: [
        "Spread of infectious diseases",
        "Pollution of groundwater and surface water",
        "Ecological imbalance from high organic load",
      ],
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const cardsPerView = 3;
  const totalSlides = Math.max(0, projects.length - cardsPerView + 1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalSlides - 1 ? totalSlides - 1 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, totalSlides - 1));
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Industries </h2>

        <div className="carousel-container">
          <button
            className="nav-button nav-button-left"
            onClick={prevSlide}
            aria-label="Previous projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="carousel-wrapper">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-content">
                        <h3 className="white-project-title">{project.title}</h3>
                        <p className="project-description">
                          {project.description}
                        </p>
                        {project.risks && project.risks.length > 0 && (
                          <ul className="project-risks">
                            <h4>Risks</h4>
                            {project.risks.map((risk, riskIndex) => (
                              <li key={riskIndex}>{risk}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {project.risks && project.risks.length > 0 && (
                      <ul className="project-risks">
                        <h4>Risks:</h4>
                        {project.risks.map((risk, riskIndex) => (
                          <li key={riskIndex}>{risk}</li>
                        ))}
                      </ul>
                    )}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-button nav-button-right"
            onClick={nextSlide}
            aria-label="Next projects"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="pagination-dots">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

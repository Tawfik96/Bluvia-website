// components/Projects.tsx (or adjust path as needed)
import "./../../styles/Projects.css"; // Ensure this path is correct
import React, { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({
  projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/images/before.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/images/team.jpg",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Socket.io"],
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather conditions, forecasts, and interactive maps using multiple weather APIs.",
      image: "/images/story.jpg",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
      link: "#",
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "An analytics dashboard for social media metrics with data visualization, trend analysis, and automated reporting capabilities.",
      image: "/images/after.png",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL"],
      link: "#",
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
        <h2 className="projects-title">Our Projects</h2>

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
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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

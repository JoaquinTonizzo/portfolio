import { useState, useEffect, useRef } from 'react';
import { FaGamepad, FaBox, FaBullseye, FaExternalLinkAlt, FaRocket, FaCalendarAlt, FaCheckCircle, FaMobile, FaGlobe, FaLock, FaDatabase, FaUtensils, FaUsers, FaGraduationCap, FaShoppingCart, FaStore } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Projects.css';

function Projects() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  const getProjectDescription = (projectId) => {
    const descriptions = {
      1: t('project1Description'),
      2: t('project2Description'),
      3: t('project3Description'),
      4: t('project4Description'),
      5: t('project5Description'),
      6: t('project6Description')
    };
    return descriptions[projectId];
  };

  const projects = [
    {
      id: 1,
      title: "SIGRH+",
      description: t('project1Description'),
      image: "/portfolio/sigrh+.png",
      link: "https://github.com/JoaquinTonizzo/SIGRH-",
      demo: "https://github.com/JoaquinTonizzo/SIGRH",
      tech: ["React", "Tailwind CSS", "Flask", "MySQL"],
      type: <FaUsers />,
      year: "2025",
      status: t('projectStatus')
    },
    {
      id: 2,
      title: "E-commerce React",
      description: t('project2Description'),
      image: "/portfolio/ecommerce-react.png",
      link: "https://github.com/JoaquinTonizzo/e-commerce-react",
      demo: "https://github.com/JoaquinTonizzo/e-commerce-react",
      tech: ["React", "CSS", "Firebase"],
      type: <FaShoppingCart />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 3,
      title: "Gestor Académico PL/pgSQL",
      description: t('project3Description'),
      image: "/portfolio/plpgsql.png",
      link: "https://github.com/JoaquinTonizzo/tp-final-bases-de-datos",
      demo: "https://github.com/JoaquinTonizzo/tp-final-bases-de-datos",
      tech: ["PostgreSQL", "PL/pgSQL", "Go", "BoltDB"],
      type: <FaGraduationCap />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 4,
      title: "E-commerce JavaScript",
      description: t('project4Description'),
      image: "/portfolio/ecommerce-js.png",
      link: "https://github.com/JoaquinTonizzo/e-commerce-js",
      demo: "https://github.com/JoaquinTonizzo/e-commerce-js",
      tech: ["JavaScript", "HTML", "CSS"],
      type: <FaStore />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 5,
      title: "Lost Galaxian",
      description: t('project5Description'),
      image: "/portfolio/lost-galaxian.jpg",
      link: "https://github.com/JoaquinTonizzo/lost-galaxian",
      demo: "https://github.com/JoaquinTonizzo/lost-galaxian",
      tech: ["Java", "POO"],
      type: <FaGamepad />,
      year: "2023",
      status: t('projectStatus')
    },
    {
      id: 6,
      title: "Albor",
      description: t('project6Description'),
      image: "/portfolio/albor.png",
      link: "https://github.com/JoaquinTonizzo/albor-mermeladas",
      demo: "https://github.com/JoaquinTonizzo/albor-mermeladas",
      tech: ["HTML", "CSS", "Bootstrap"],
      type: <FaUtensils />,
      year: "2024",
      status: t('projectStatus')
    }
  ];



  return (
    <section id="mis-proyectos" ref={projectsRef}>
      <div className="projects-container">
        <div className="projects-header" ref={headerRef}>
          <h2>{t('projectsTitle')}</h2>
          <p className="projects-subtitle">
            {t('projectsSubtitle')}
          </p>
        </div>

        <div className={`projects-grid ${isLoaded ? 'loading' : ''}`} ref={gridRef}>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={`${project.title} Proyecto`} 
                  className={project.title === "Lost Galaxian" ? "lost-galaxian" : ""}
                />
                <div className="project-overlay">
                  <div className="project-tech-stack">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">
                  <span className="project-icon">{project.type}</span>
                  {project.title}
                </h3>
                
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-actions">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn"
                  >
                    <FaRocket />
                    {t('viewProject')}
                  </a>
                  <div className="project-info">
                    <span className="project-year">{project.year}</span>
                    <span className="project-status">Completado</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

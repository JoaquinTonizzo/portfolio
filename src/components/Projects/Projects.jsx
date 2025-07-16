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
      description: "Sistema de gestión de RRHH con análisis inteligente. Gestiona licencias, rendimiento, CVs y postulaciones utilizando machine learning. Arquitectura full stack con backend en Flask.",
      image: "/portfolio/sigrh+.png",
      link: "https://github.com/JoaquinTonizzo/SIGRH-",
      demo: "#",
      tech: ["React", "Tailwind CSS", "Flask", "MySQL"],
      type: <FaUsers />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 2,
      title: "E-commerce React",
      description: "Tienda online moderna con base de datos en la nube. Frontend en React con catálogo, carrito y checkout. Firebase se utiliza para datos de productos y stock.",
      image: "/portfolio/ecommerce-react.png",
      link: "https://github.com/JoaquinTonizzo/e-commerce-react",
      demo: "#",
      tech: ["React", "CSS", "Firebase"],
      type: <FaShoppingCart />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 3,
      title: "Gestor Académico PL/pgSQL",
      description: "Sistema académico con procedimientos almacenados y soporte NoSQL. Integra PostgreSQL con PL/pgSQL y BoltDB en Go para gestión académica.",
      image: "/portfolio/plpgsql.png",
      link: "https://github.com/JoaquinTonizzo/tp-final-bases-de-datos",
      demo: "#",
      tech: ["PostgreSQL", "PL/pgSQL", "Go", "BoltDB"],
      type: <FaGraduationCap />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 4,
      title: "E-commerce JavaScript",
      description: "Sitio de comercio electrónico simple con tecnologías web puras. Incluye productos, carrito de compras y cálculo de totales sin usar frameworks.",
      image: "/portfolio/ecommerce-js.png",
      link: "https://github.com/JoaquinTonizzo/e-commerce-js",
      demo: "#",
      tech: ["JavaScript", "HTML", "CSS"],
      type: <FaStore />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 5,
      title: "Lost Galaxian",
      description: "Videojuego espacial con niveles, combate y sistema de puntuación. Desarrollado en Java con enfoque en POO. Incluye mecánicas de exploración, enemigos y efectos visuales.",
      image: "/portfolio/lost-galaxian.jpg",
      link: "https://github.com/JoaquinTonizzo/lost-galaxian",
      demo: "#",
      tech: ["Java", "POO"],
      type: <FaGamepad />,
      year: "2023",
      status: t('projectStatus')
    },
    {
      id: 6,
      title: "Albor",
      description: "Sitio web informativo para emprendimiento gastronómico. Página responsive con diseño atractivo que presenta productos, historia del proyecto y formulario de contacto.",
      image: "/portfolio/albor.png",
      link: "https://github.com/JoaquinTonizzo/albor-mermeladas",
      demo: "#",
      tech: ["HTML", "CSS", "Bootstrap"],
      type: <FaUtensils />,
      year: "2023",
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

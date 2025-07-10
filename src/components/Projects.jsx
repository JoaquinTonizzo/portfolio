import { useState, useEffect } from 'react';
import { FaGamepad, FaBox, FaBullseye, FaExternalLinkAlt, FaRocket, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Projects.css';

function Projects() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getProjectDescription = (projectId) => {
    const descriptions = {
      1: {
        es: "Un emocionante juego de aventuras espaciales desarrollado en Java con mecánicas de exploración y combate. Incluye sistema de puntuación, múltiples niveles y efectos visuales.",
        en: "An exciting space adventure game developed in Java with exploration and combat mechanics. Includes scoring system, multiple levels and visual effects."
      },
      2: {
        es: "Sistema de gestión logística que utiliza principios de programación orientada a objetos. Optimiza rutas, gestiona inventarios y controla entregas en tiempo real.",
        en: "Logistics management system that uses object-oriented programming principles. Optimizes routes, manages inventories and controls deliveries in real time."
      },
      3: {
        es: "Implementación del popular juego Wordle en Python con interfaz intuitiva. Incluye sistema de pistas, validación de palabras y estadísticas de partidas.",
        en: "Implementation of the popular Wordle game in Python with intuitive interface. Includes hint system, word validation and game statistics."
      }
    };
    return descriptions[projectId][language];
  };

  const getProjectStatus = () => {
    return language === 'es' ? "Completado" : "Completed";
  };

  const projects = [
    {
      id: 1,
      title: "Lost Galaxian",
      description: getProjectDescription(1),
      image: "lost-galaxian.jpg",
      link: "https://github.com/JoaquinTonizzo/Proyecto-P1",
      demo: "#",
      tech: ["Java", "Swing", "OOP"],
      type: <FaGamepad />,
      year: "2023",
      status: getProjectStatus()
    },
    {
      id: 2,
      title: "Amazing Logistic",
      description: getProjectDescription(2),
      image: "java.png",
      link: "https://github.com/JoaquinTonizzo/Proyecto-P2",
      demo: "#",
      tech: ["Java", "POO", "MySQL"],
      type: <FaBox />,
      year: "2023",
      status: getProjectStatus()
    },
    {
      id: 3,
      title: "Wordle Game",
      description: getProjectDescription(3),
      image: "wordle.jpg",
      link: "https://github.com/JoaquinTonizzo/Proyecto-IP",
      demo: "#",
      tech: ["Python", "Tkinter", "Algoritmos"],
      type: <FaBullseye />,
      year: "2024",
      status: getProjectStatus()
    }
  ];

  return (
    <section id="mis-proyectos">
      <div className="projects-container">
        <div className="projects-header">
          <h2>{t('projectsTitle')}</h2>
          <p className="projects-subtitle">
            {language === 'es' 
              ? "Una selección de proyectos que demuestran mis habilidades en desarrollo de software, desde juegos interactivos hasta sistemas de gestión empresarial."
              : "A selection of projects that demonstrate my software development skills, from interactive games to business management systems."
            }
          </p>
        </div>

        <div className={`projects-grid ${isLoaded ? 'loading' : ''}`}>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={`${project.title} Proyecto`} />
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
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn btn-primary"
                  >
                    <FaExternalLinkAlt />
                    {t('viewCode')}
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn btn-secondary"
                  >
                    <FaRocket />
                    {t('viewProject')}
                  </a>
                </div>

                <div className="project-stats">
                  <div className="stat-item">
                    <FaCalendarAlt />
                    <span>{project.year}</span>
                  </div>
                  <div className="stat-item">
                    <FaCheckCircle />
                    <span>{project.status}</span>
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

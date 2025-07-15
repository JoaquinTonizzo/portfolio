import { useState, useEffect, useRef } from 'react';
import { FaGamepad, FaBox, FaBullseye, FaExternalLinkAlt, FaRocket, FaCalendarAlt, FaCheckCircle, FaMobile, FaGlobe, FaLock } from 'react-icons/fa';
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
      title: "Lost Galaxian",
      description: getProjectDescription(1),
      image: "/portfolio/lost-galaxian.jpg",
      link: "https://github.com/JoaquinTonizzo/Proyecto-P1",
      demo: "#",
      tech: ["Java", "Swing", "OOP"],
      type: <FaGamepad />,
      year: "2023",
      status: t('projectStatus')
    },
    {
      id: 2,
      title: "Amazing Logistic",
      description: getProjectDescription(2),
      image: "/portfolio/java.png",
      link: "https://github.com/JoaquinTonizzo/Proyecto-P2",
      demo: "#",
      tech: ["Java", "POO", "MySQL"],
      type: <FaBox />,
      year: "2023",
      status: t('projectStatus')
    },
    {
      id: 3,
      title: "Wordle Game",
      description: getProjectDescription(3),
      image: "/portfolio/wordle.jpg",
      link: "https://github.com/JoaquinTonizzo/Proyecto-IP",
      demo: "#",
      tech: ["Python", "Tkinter", "Algoritmos"],
      type: <FaBullseye />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 4,
      title: "TaskFlow Mobile",
      description: getProjectDescription(4),
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      link: "https://github.com/JoaquinTonizzo/taskflow-mobile",
      demo: "#",
      tech: ["React Native", "Firebase", "Redux"],
      type: <FaMobile />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 5,
      title: "Corporate Website",
      description: getProjectDescription(5),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "https://github.com/JoaquinTonizzo/corporate-website",
      demo: "#",
      tech: ["React", "Node.js", "MongoDB"],
      type: <FaGlobe />,
      year: "2024",
      status: t('projectStatus')
    },
    {
      id: 6,
      title: "SecureAuth System",
      description: getProjectDescription(6),
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
      link: "https://github.com/JoaquinTonizzo/secure-auth",
      demo: "#",
      tech: ["JWT", "Node.js", "PostgreSQL"],
      type: <FaLock />,
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
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn"
                  >
                    <FaRocket />
                    {t('viewProject')}
                  </a>
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

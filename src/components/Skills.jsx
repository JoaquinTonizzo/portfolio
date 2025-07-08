import { useState, useEffect } from 'react';
import { 
  FaLaptopCode, FaBook, FaTools, FaCloud, FaRocket, FaBullseye,
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaReact, FaLeaf, FaBootstrap, FaNodeJs,
  FaGit, FaGithub, FaLinux, FaPhp, FaDocker,
  FaMoon, FaBox, FaStar
} from 'react-icons/fa';
import { 
  SiMysql, SiPostgresql, SiMongodb, SiJquery,
  SiSpring, SiEclipseide
} from 'react-icons/si';
import './Skills.css';

function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skillCategories = [
    {
      id: 1,
      title: "Lenguajes de Programación",
      icon: <FaLaptopCode />,
      technologies: [
        { name: "Java", icon: <FaJava />, level: "expert" },
        { name: "Python", icon: <FaPython />, level: "expert" },
        { name: "JavaScript", icon: <FaJs />, level: "advanced" },
        { name: "HTML", icon: <FaHtml5 />, level: "expert" },
        { name: "CSS", icon: <FaCss3Alt />, level: "expert" },
        { name: "SQL", icon: <FaDatabase />, level: "advanced" }
      ]
    },
    {
      id: 2,
      title: "Frameworks & Librerías",
      icon: <FaBook />,
      technologies: [
        { name: "React", icon: <FaReact />, level: "advanced" },
        { name: "Spring", icon: <SiSpring />, level: "intermediate" },
        { name: "Bootstrap", icon: <FaBootstrap />, level: "advanced" },
        { name: "Node.js", icon: <FaNodeJs />, level: "intermediate" },
        { name: "Express", icon: <FaRocket />, level: "intermediate" },
        { name: "jQuery", icon: <SiJquery />, level: "advanced" }
      ]
    },
    {
      id: 3,
      title: "Herramientas de Desarrollo",
      icon: <FaTools />,
      technologies: [
        { name: "Git", icon: <FaGit />, level: "expert" },
        { name: "GitHub", icon: <FaGithub />, level: "expert" },
        { name: "VS Code", icon: <FaLaptopCode />, level: "expert" },
        { name: "IntelliJ", icon: <FaJava />, level: "advanced" },
        { name: "Eclipse", icon: <SiEclipseide />, level: "advanced" },
        { name: "Maven", icon: <FaBox />, level: "intermediate" }
      ]
    },
    {
      id: 4,
      title: "Bases de Datos & Cloud",
      icon: <FaCloud />,
      technologies: [
        { name: "MySQL", icon: <SiMysql />, level: "advanced" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: "intermediate" },
        { name: "MongoDB", icon: <SiMongodb />, level: "learning" },
        { name: "Firebase", icon: <FaDatabase />, level: "intermediate" },
        { name: "AWS", icon: <FaCloud />, level: "learning" },
        { name: "Docker", icon: <FaDocker />, level: "learning" }
      ]
    }
  ];

  const devStats = [
    { icon: <FaLaptopCode />, number: "5+", label: "Lenguajes Dominados" },
    { icon: <FaRocket />, number: "15+", label: "Proyectos Completados" },
    { icon: <FaStar />, number: "3+", label: "Años Desarrollando" },
    { icon: <FaBullseye />, number: "100%", label: "Pasión por el Código" }
  ];

  return (
    <section id="habilidades">
      <div className="skills-container">
        <div className="skills-header">
          <h2>Stack Tecnológico</h2>
          <p className="skills-description">
            Desarrollador Full-Stack especializado en Java y Python, con experiencia en tecnologías modernas
            y metodologías ágiles para crear soluciones robustas y escalables.
          </p>
        </div>

        <div className={`skills-grid ${isLoaded ? 'loaded' : ''}`}>
          {skillCategories.map(category => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="tech-grid">
                {category.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="tech-item"
                    title={`${tech.name} - Nivel: ${tech.level}`}
                  >
                    <span className="tech-icon">{tech.icon}</span>
                    <div className="tech-name">{tech.name}</div>
                    <span className={`tech-level level-${tech.level}`}>
                      {tech.level === 'expert' ? 'Experto' :
                       tech.level === 'advanced' ? 'Avanzado' :
                       tech.level === 'intermediate' ? 'Intermedio' : 'Aprendiendo'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="dev-stats">
          {devStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

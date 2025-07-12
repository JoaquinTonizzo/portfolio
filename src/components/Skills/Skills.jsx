import { useState, useEffect, useRef } from 'react';
import { 
  FaLaptopCode, FaBook, FaTools, FaCloud, FaRocket, FaBullseye,
  FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaDatabase,
  FaReact, FaLeaf, FaBootstrap, FaNodeJs,
  FaGit, FaGithub, FaLinux, FaPhp, FaDocker,
  FaMoon, FaBox, FaStar, FaCode, FaServer, FaMobile
} from 'react-icons/fa';
import { 
  SiMysql, SiPostgresql, SiMongodb, SiJquery,
  SiSpring, SiEclipseide, SiTypescript, SiTailwindcss,
  SiFirebase, SiDocker, SiVuedotjs
} from 'react-icons/si';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.css';

function Skills() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const skillsRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);

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
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (level) => {
    const levels = {
      expert: language === 'es' ? 'Experto' : language === 'en' ? 'Expert' : 'Especialista',
      advanced: language === 'es' ? 'Avanzado' : language === 'en' ? 'Advanced' : 'Avançado',
      intermediate: language === 'es' ? 'Intermedio' : language === 'en' ? 'Intermediate' : 'Intermediário',
      learning: language === 'es' ? 'Aprendiendo' : language === 'en' ? 'Learning' : 'Aprendendo'
    };
    return levels[level] || level;
  };

  const skillCategories = [
    {
      id: 1,
      title: language === 'es' ? "Lenguajes de Programación" : language === 'en' ? "Programming Languages" : "Linguagens de Programação",
      icon: <FaCode />,
      color: "#FF6B6B",
      technologies: [
        { name: "Java", icon: <FaJava style={{ color: "#E76F00" }} />, level: "expert", color: "#E76F00" },
        { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} />, level: "expert", color: "#3776AB" },
        { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} />, level: "advanced", color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178C6" }} />, level: "intermediate", color: "#3178C6" },
        { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} />, level: "expert", color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} />, level: "expert", color: "#1572B6" }
      ]
    },
    {
      id: 2,
      title: language === 'es' ? "Frameworks & Librerías" : language === 'en' ? "Frameworks & Libraries" : "Frameworks & Bibliotecas",
      icon: <FaRocket />,
      color: "#4ECDC4",
      technologies: [
        { name: "React", icon: <FaReact style={{ color: "#61DAFB" }} />, level: "advanced", color: "#61DAFB" },
        { name: "Vue.js", icon: <SiVuedotjs style={{ color: "#4FC08D" }} />, level: "intermediate", color: "#4FC08D" },
        { name: "Spring", icon: <SiSpring style={{ color: "#6DB33F" }} />, level: "intermediate", color: "#6DB33F" },
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} />, level: "intermediate", color: "#339933" },
        { name: "Bootstrap", icon: <FaBootstrap style={{ color: "#7952B3" }} />, level: "advanced", color: "#7952B3" },
        { name: "Tailwind", icon: <SiTailwindcss style={{ color: "#06B6D4" }} />, level: "intermediate", color: "#06B6D4" }
      ]
    },
    {
      id: 3,
      title: language === 'es' ? "Herramientas de Desarrollo" : language === 'en' ? "Development Tools" : "Ferramentas de Desenvolvimento",
      icon: <FaTools />,
      color: "#45B7D1",
      technologies: [
        { name: "Git", icon: <FaGit style={{ color: "#F05032" }} />, level: "expert", color: "#F05032" },
        { name: "GitHub", icon: <FaGithub style={{ color: "#181717" }} />, level: "expert", color: "#181717" },
        { name: "VS Code", icon: <FaLaptopCode style={{ color: "#007ACC" }} />, level: "expert", color: "#007ACC" },
        { name: "IntelliJ", icon: <FaJava style={{ color: "#000000" }} />, level: "advanced", color: "#000000" },
        { name: "Eclipse", icon: <SiEclipseide style={{ color: "#2C2255" }} />, level: "advanced", color: "#2C2255" },
        { name: "Docker", icon: <SiDocker style={{ color: "#2496ED" }} />, level: "learning", color: "#2496ED" }
      ]
    },
    {
      id: 4,
      title: language === 'es' ? "Bases de Datos & Cloud" : language === 'en' ? "Databases & Cloud" : "Bancos de Dados & Cloud",
      icon: <FaServer />,
      color: "#96CEB4",
      technologies: [
        { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} />, level: "advanced", color: "#4479A1" },
        { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} />, level: "intermediate", color: "#336791" },
        { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} />, level: "learning", color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase style={{ color: "#FFCA28" }} />, level: "intermediate", color: "#FFCA28" },
        { name: "AWS", icon: <FaCloud style={{ color: "#FF9900" }} />, level: "learning", color: "#FF9900" },
        { name: "SQLite", icon: <FaDatabase style={{ color: "#003B57" }} />, level: "advanced", color: "#003B57" }
      ]
    }
  ];

  const devStats = [
    { 
      number: "6+", 
      label: language === 'es' ? "Lenguajes Dominados" : language === 'en' ? "Languages Mastered" : "Linguagens Dominadas",
      color: "#FF6B6B"
    },
    { 
      number: "15+", 
      label: language === 'es' ? "Proyectos Completados" : language === 'en' ? "Projects Completed" : "Projetos Concluídos",
      color: "#4ECDC4"
    },
    { 
      number: "3+", 
      label: language === 'es' ? "Años Desarrollando" : language === 'en' ? "Years Developing" : "Anos Desenvolvendo",
      color: "#45B7D1"
    },
    { 
      number: "100%", 
      label: language === 'es' ? "Pasión por el Código" : language === 'en' ? "Passion for Code" : "Paixão pelo Código",
      color: "#96CEB4"
    }
  ];

  const getSkillsDescription = () => {
    const descriptions = {
      es: "Desarrollador Full-Stack especializado en Java y Python, con experiencia en tecnologías modernas y metodologías ágiles para crear soluciones robustas y escalables.",
      en: "Full-Stack Developer specialized in Java and Python, with experience in modern technologies and agile methodologies to create robust and scalable solutions.",
      pt: "Desenvolvedor Full-Stack especializado em Java e Python, com experiência em tecnologias modernas e metodologias ágeis para criar soluções robustas e escaláveis."
    };
    return descriptions[language];
  };

  return (
    <section id="habilidades" ref={skillsRef}>
      <div className="skills-container">
        <div className="skills-header" ref={headerRef}>
          <h2>{t('skillsTitle')}</h2>
          <p className="skills-description">
            {getSkillsDescription()}
          </p>
        </div>

        <div className={`skills-grid ${isLoaded ? 'loaded' : ''}`} ref={gridRef}>
          {skillCategories.map(category => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="tech-grid">
                {category.technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="tech-item"
                    title={`${tech.name} - ${language === 'es' ? 'Nivel' : language === 'en' ? 'Level' : 'Nível'}: ${getSkillLevel(tech.level)}`}
                  >
                    <div className="tech-icon-container">
                      {tech.icon}
                    </div>
                    <div className="tech-info">
                      <div className="tech-name">{tech.name}</div>
                      <span className={`tech-level level-${tech.level}`}>
                        {getSkillLevel(tech.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="dev-stats" ref={statsRef}>
          {devStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon-container" style={{ backgroundColor: stat.color }}>
                <span className="stat-icon">{stat.icon}</span>
              </div>
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

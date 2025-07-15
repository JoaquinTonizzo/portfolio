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
  SiFirebase, SiDocker, SiVuedotjs, SiFlask, SiGitlab, SiVercel, SiNetlify, SiCplusplus, SiNextdotjs, SiGo
} from 'react-icons/si';
import { useLanguage } from '../../contexts/LanguageContext';
import './Skills.css';

// Hook personalizado para contador animado
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const useCounter = (end, duration = 1200, delay = 0, isVisible = false) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    let startTime;
    let animationId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Usar easing para animación más natural
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setIsAnimating(false);
        setHasAnimated(true);
      }
    };

    const startAnimation = () => {
      setIsAnimating(true);
      setCount(0);
      animationId = requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, delay, isVisible, hasAnimated]);

  return { count, isAnimating };
};

// Componente de contador animado
const AnimatedCounter = ({ end, suffix = "", duration = 1200, delay = 0, isVisible = false }) => {
  const { count, isAnimating } = useCounter(end, duration, delay, isVisible);
  
  return (
    <span className={`stat-number ${isAnimating ? 'counting' : 'completed'}`}>
      {count}{suffix}
    </span>
  );
};

function Skills() {
  const { t, language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
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
          if (entry.target === statsRef.current) {
            setStatsVisible(true);
          }
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
        { name: "C++", icon: <SiCplusplus style={{ color: "#00599C" }} />, level: "intermediate", color: "#00599C" }, // Agregado C++
        { name: "Java", icon: <FaJava style={{ color: "#E76F00" }} />, level: "expert", color: "#E76F00" },
        { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} />, level: "expert", color: "#3776AB" },
        { name: "Go", icon: <SiGo style={{ color: "#00ADD8" }} />, level: "learning", color: "#00ADD8" }, // Agregado Go
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
        { name: "Flask", icon: <SiFlask style={{ color: "#000000" }} />, level: "intermediate", color: "#000000" },
        { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} />, level: "learning", color: "#339933" }, // Node.js como aprendiendo
        { name: "Next.js", icon: <SiNextdotjs style={{ color: "#000000" }} />, level: "learning", color: "#000000" }, // Next.js como aprendiendo
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
        { name: "GitLab", icon: <SiGitlab style={{ color: "#FC6D26" }} />, level: "advanced", color: "#FC6D26" },
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
        { name: "Vercel", icon: <SiVercel style={{ color: "#000000" }} />, level: "learning", color: "#000000" }, // Agregado Vercel
        { name: "Netlify", icon: <SiNetlify style={{ color: "#00C7B7" }} />, level: "learning", color: "#00C7B7" } // Agregado Netlify
      ]
    }
  ];

  const devStats = [
    { 
      number: 7, 
      suffix: "+",
      label: language === 'es' ? "Lenguajes Dominados" : language === 'en' ? "Languages Mastered" : "Linguagens Dominadas",
      color: "#FF6B6B",
      delay: 0
    },
    { 
      number: 15, 
      suffix: "+",
      label: language === 'es' ? "Proyectos Completados" : language === 'en' ? "Projects Completed" : "Projetos Concluídos",
      color: "#4ECDC4",
      delay: 200
    },
    { 
      number: 3, 
      suffix: "+",
      label: language === 'es' ? "Años Desarrollando" : language === 'en' ? "Years Developing" : "Anos Desenvolvendo",
      color: "#45B7D1",
      delay: 400
    },
    { 
      number: 100, 
      suffix: "%",
      label: language === 'es' ? "Ganas de Aprender" : language === 'en' ? "Eagerness to Learn" : "Vontade de Aprender",
      color: "#96CEB4",
      delay: 600
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
              <AnimatedCounter 
                end={stat.number} 
                suffix={stat.suffix}
                duration={1200}
                delay={stat.delay}
                isVisible={statsVisible}
              />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

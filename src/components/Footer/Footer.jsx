import { FaLinkedin, FaGithub, FaBolt, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
  const { language } = useLanguage();
  const footerRef = useRef(null);
  
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

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      icon: <FaLinkedin />
    },
    { 
      name: "GitHub", 
      url: "https://github.com/JoaquinTonizzo",
      icon: <FaGithub />
    },
    { 
      name: "Email", 
      url: "mailto:joaquintonizzo1@gmail.com",
      icon: <FaEnvelope />
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">Joaquín Gabriel Tonizzo</h3>
            <p className="footer-description">
              {language === 'es'
                ? "Técnico Universitario en Informática | Desarrollador Full Stack"
                : "University Technician in Computer Science | Full Stack Developer"
              }
            </p>
          </div>

          <div className="footer-social">
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <span>© {currentYear} Joaquín Tonizzo. </span>
              <span className="copyright-text">
                {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
              </span>
            </div>
            
            <div className="footer-tech">
              <FaBolt className="tech-icon" />
              <span className="tech-text">
                {language === 'es' ? 'Hecho con React y Vite' : 'Made with React and Vite'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

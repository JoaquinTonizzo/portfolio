import { FaLinkedin, FaWhatsapp, FaTelegram, FaGithub, FaBolt, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import './Footer.css';

function Footer() {
  const { t, language } = useLanguage();
  const footerRef = useRef(null);
  const mainRef = useRef(null);
  const bottomRef = useRef(null);
  
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

    if (mainRef.current) observer.observe(mainRef.current);
    if (bottomRef.current) observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, []);
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      icon: <FaLinkedin />,
      color: "#0A66C2"
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/5491169702939",
      icon: <FaWhatsapp />,
      color: "#25D366"
    },
    { 
      name: "Telegram", 
      url: "https://t.me/JoaquinTonizzo",
      icon: <FaTelegram />,
      color: "#0088cc"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/JoaquinTonizzo",
      icon: <FaGithub />,
      color: "#181717"
    }
  ];

  const navigationLinks = [
    { name: language === 'es' ? "Inicio" : "Home", url: "#header" },
    { name: t('about'), url: "#sobre-mi" },
    { name: t('projects'), url: "#mis-proyectos" },
    { name: t('skills'), url: "#habilidades" },
    { name: t('contact'), url: "#contacto" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef}>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-main" ref={mainRef}>
            <div className="footer-brand">
              <h3 className="footer-title">Joaquín Tonizzo</h3>
              <p className="footer-description">
                {language === 'es'
                  ? "Desarrollador Full Stack apasionado por crear experiencias digitales innovadoras y funcionales."
                  : "Full Stack Developer passionate about creating innovative and functional digital experiences."
                }
              </p>
            </div>

            <div className="footer-navigation">
              <h4 className="nav-title">
                {language === 'es' ? 'Navegación' : 'Navigation'}
              </h4>
              <div className="nav-links">
                {navigationLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-social">
              <h4 className="social-title">
                {language === 'es' ? 'Conecta' : 'Connect'}
              </h4>
              <div className="social-grid">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-card"
                    style={{ '--social-color': link.color }}
                  >
                    <div className="social-icon">
                      {link.icon}
                    </div>
                    <span className="social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom" ref={bottomRef}>
          <div className="footer-copyright">
            <span>© {currentYear} Joaquín Tonizzo. </span>
            <span className="copyright-text">
              {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </span>
          </div>
          
          <div className="footer-tech">
            <FaBolt className="tech-icon" />
            <span className="tech-text">
              {language === 'es' ? 'Hecho con React & Vite' : 'Made with React & Vite'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

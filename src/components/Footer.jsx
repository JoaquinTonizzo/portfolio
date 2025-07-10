import { FaLinkedin, FaWhatsapp, FaTelegram, FaGithub, FaBolt } from 'react-icons/fa';
import { useLanguage } from '../contexts/LanguageContext';
import './Footer.css';

function Footer() {
  const { t, language } = useLanguage();
  
  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      icon: <FaLinkedin />
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/5491169702939",
      icon: <FaWhatsapp />
    },
    { 
      name: "Telegram", 
      url: "https://t.me/JoaquinTonizzo",
      icon: <FaTelegram />
    },
    { 
      name: "GitHub", 
      url: "https://github.com/JoaquinTonizzo",
      icon: <FaGithub />
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
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Joaquín Tonizzo</h3>
            <p className="footer-description">
              {language === 'es'
                ? "Desarrollador Full Stack apasionado por crear experiencias digitales innovadoras y funcionales. Especializado en tecnologías web modernas y siempre en busca de nuevos desafíos."
                : "Full Stack Developer passionate about creating innovative and functional digital experiences. Specialized in modern web technologies and always looking for new challenges."
              }
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">
              {language === 'es' ? 'Navegación' : 'Navigation'}
            </h3>
            <div className="footer-links">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="footer-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">
              {language === 'es' ? 'Conecta Conmigo' : 'Connect With Me'}
            </h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <span className="social-icon">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copy">
            {t('footerText').replace('2024', currentYear)}
          </div>
          <div className="footer-tech">
            <FaBolt />
            {language === 'es' ? 'Hecho con React & Vite' : 'Made with React & Vite'}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

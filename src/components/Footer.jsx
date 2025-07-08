import { FaLinkedin, FaWhatsapp, FaTelegram, FaGithub, FaBolt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
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
    { name: "Inicio", url: "#header" },
    { name: "Sobre Mí", url: "#sobre-mi" },
    { name: "Proyectos", url: "#mis-proyectos" },
    { name: "Habilidades", url: "#habilidades" },
    { name: "Contacto", url: "#contacto" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Joaquín Tonizzo</h3>
            <p className="footer-description">
              Desarrollador Full Stack apasionado por crear experiencias digitales 
              innovadoras y funcionales. Especializado en tecnologías web modernas 
              y siempre en busca de nuevos desafíos.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Navegación</h3>
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
            <h3 className="footer-title">Conecta Conmigo</h3>
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
            © {currentYear} <span>Joaquín Tonizzo</span>. Todos los derechos reservados.
          </div>
          <div className="footer-tech">
            <FaBolt />
            Hecho con React & Vite
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

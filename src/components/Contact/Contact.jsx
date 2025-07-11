import { FaEnvelope, FaMobile, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Contact.css';

function Contact() {
  const { t, language } = useLanguage();
  
  const socialNetworks = [
    {
      name: "WhatsApp",
      handle: "+54 11 6970-2939",
      url: "https://wa.me/5491169702939",
      image: "whatsapp.png",
      color: "#25D366"
    },
    {
      name: "Telegram",
      handle: "@JoaquinTonizzo",
      url: "https://t.me/JoaquinTonizzo",
      image: "telegram.png",
      color: "#0088cc"
    },
    {
      name: "GitHub",
      handle: "JoaquinTonizzo",
      url: "https://github.com/JoaquinTonizzo",
      image: "github.png",
      color: "#181717"
    },
    {
      name: "LinkedIn",
      handle: "joaquin-tonizzo",
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      image: "linkedin.png",
      color: "#0A66C2"
    }
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: language === 'es' ? 'Email' : 'Email',
      value: "joaquintonizzo1@gmail.com",
      link: "mailto:joaquintonizzo@gmail.com",
      color: "#0066FF"
    },
    {
      icon: <FaMobile />,
      label: language === 'es' ? 'Teléfono' : 'Phone',
      value: "+54 11 6970-2939",
      link: "https://wa.me/5491169702939",
      color: "#0099FF"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: language === 'es' ? 'Ubicación' : 'Location',
      value: "Buenos Aires, Argentina",
      link: null,
      color: "#0033CC"
    }
  ];

  return (
    <section id="contacto">
      <div className="contact-container">
        <div className="contact-header">
          <h2>{t('contactTitle')}</h2>
          <p className="contact-description">
            {language === 'es' 
              ? 'Conectemos y mantengámonos en contacto. Estoy siempre disponible para nuevas oportunidades y proyectos interesantes.'
              : 'Let\'s connect and stay in touch. I\'m always available for new opportunities and interesting projects.'
            }
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="section-header">
              <h3 className="section-title">
                {language === 'es' ? 'Información de Contacto' : 'Contact Information'}
              </h3>
              <p className="section-subtitle">
                {language === 'es' 
                  ? 'Métodos directos para contactarme'
                  : 'Direct methods to reach me'
                }
              </p>
            </div>
            
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon" style={{ backgroundColor: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">{info.label}</div>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="contact-value"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="contact-value">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-networks-section">
            <div className="section-header">
              <h3 className="section-title">
                {language === 'es' ? 'Redes Sociales' : 'Social Networks'}
              </h3>
              <p className="section-subtitle">
                {language === 'es' 
                  ? 'Sígueme y conectemos en las redes'
                  : 'Follow me and connect on social networks'
                }
              </p>
            </div>
            
            <div className="social-grid">
              {socialNetworks.map((network, index) => (
                <a 
                  key={index} 
                  href={network.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--network-color': network.color }}
                >
                  <div className="social-icon">
                    <img src={network.image} alt={`${network.name} Logo`} />
                  </div>
                  <div className="social-info">
                    <div className="social-name">{network.name}</div>
                    <div className="social-handle">{network.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

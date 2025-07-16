import { FaEnvelope, FaTelegram } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiTelegram } from 'react-icons/si';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const { t, language } = useLanguage();
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const infoSectionRef = useRef(null);
  const socialSectionRef = useRef(null);
  
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
    if (infoSectionRef.current) observer.observe(infoSectionRef.current);

    return () => observer.disconnect();
  }, []);
  
  const socialNetworks = [
    {
      name: "LinkedIn",
      handle: "joaquin-tonizzo",
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      image: "/portfolio/linkedin.png",
      color: "#0A66C2"
    },
    {
      name: "GitHub",
      handle: "JoaquinTonizzo",
      url: "https://github.com/JoaquinTonizzo",
      image: "/portfolio/github.png",
      color: "#181717"
    }
  ];

  const contactInfo = [
    {
      icon: <HiMail />,
      label: language === 'es' ? 'Email' : 'Email',
      value: "Joaquintonizzo1@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=joaquintonizzo1@gmail.com&su=Contacto desde Portfolio&body=Hola Joaquín, me gustaría contactarte...",
      color: "#0066FF"
    },
    {
      icon: <SiTelegram />,
      label: language === 'es' ? 'Telegram' : 'Telegram',
      value: "@joaquintonizzo",
      link: "https://t.me/joaquintonizzo",
      color: "#0088CC"
    }
  ];

  return (
    <section id="contacto" ref={contactRef}>
      <div className="contact-container">
        <div className="contact-header" ref={headerRef}>
          <h2>{t('contactTitle')}</h2>
          <p className="contact-description">
            {language === 'es' 
              ? 'Conectemos y mantengámonos en contacto. Estoy siempre disponible para nuevas oportunidades y proyectos interesantes.'
              : 'Let\'s connect and stay in touch. I\'m always available for new opportunities and interesting projects.'
            }
          </p>
        </div>

        <div className="contact-content" ref={infoSectionRef}>
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
                <a
                  key={index}
                  className="contact-card"
                  href={info.link}
                  target={info.link.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="contact-icon" style={{ backgroundColor: info.color }}>
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">{info.label}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="social-networks-section">
            <div className="section-header">
              <h3 className="section-title">
                {language === 'es' ? 'Perfiles Profesionales' : 'Professional Profiles'}
              </h3>
              <p className="section-subtitle">
                {language === 'es' 
                  ? 'Conecta conmigo a través de mis perfiles profesionales'
                  : 'Connect with me through my professional profiles'
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

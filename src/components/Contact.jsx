import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const socialNetworks = [
    {
      name: "WhatsApp",
      handle: "+54 11 6970-2939",
      url: "https://wa.me/5491169702939",
      image: "whatsapp.png"
    },
    {
      name: "Telegram",
      handle: "@JoaquinTonizzo",
      url: "https://t.me/JoaquinTonizzo",
      image: "telegram.png"
    },
    {
      name: "GitHub",
      handle: "JoaquinTonizzo",
      url: "https://github.com/JoaquinTonizzo",
      image: "github.png"
    },
    {
      name: "LinkedIn",
      handle: "joaquin-tonizzo",
      url: "https://www.linkedin.com/in/joaquin-tonizzo/",
      image: "linkedin.png"
    }
  ];

  return (
    <section id="contacto">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contacto</h2>
          <p className="contact-subtitle">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea 
            y colaborar juntos para hacerla realidad. No dudes en contactarme.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3 className="info-title">Información de Contacto</h3>
            </div>
            
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon"><FaEnvelope /></div>
                <div className="detail-text">
                  <div className="detail-label">Email</div>
                  <div className="detail-value">joaquintonizzo@gmail.com</div>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon"><FaPhone /></div>
                <div className="detail-text">
                  <div className="detail-label">Teléfono</div>
                  <div className="detail-value">+54 11 6970-2939</div>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon"><FaMapMarkerAlt /></div>
                <div className="detail-text">
                  <div className="detail-label">Ubicación</div>
                  <div className="detail-value">Buenos Aires, Argentina</div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="social-networks">
            <div className="social-header">
              <h3 className="social-title">Redes Sociales</h3>
              <p className="social-description">
                Conectemos y mantengámonos en contacto a través de mis redes sociales
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
                >
                  <div className="social-icon">
                    <img src={network.image} alt={`${network.name} Logo`} />
                  </div>
                  <div className="social-name">{network.name}</div>
                  <div className="social-handle">{network.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">¿Listo para empezar?</h3>
          <p className="cta-text">
            Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. 
            Si tienes una idea en mente o necesitas ayuda con el desarrollo, ¡hablemos!
          </p>
          <a 
            href="mailto:joaquintonizzo@gmail.com" 
            className="cta-button"
          >
            <FaEnvelope />
            Enviar Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

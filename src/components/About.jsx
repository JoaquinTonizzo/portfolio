import { useLanguage } from '../contexts/LanguageContext';
import './About.css';

function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi">
      <div className="about-container">
        <div className="about-image">
          <img src="yo.png" alt="Joaquin Tonizzo Fotografía" />
        </div>
        <div className="about-content">
          <h2>{t('aboutTitle')}</h2>
          <p>
            {t('aboutText')}
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">{t('yearsStudying')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">{t('projects')}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">{t('specializations')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

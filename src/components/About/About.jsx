import { useLanguage } from '../../contexts/LanguageContext';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import './About.css';

function About() {
  const { t } = useLanguage();

  const renderAboutText = (text) => {
    // Replace icon placeholders with actual React components
    const textWithIcons = text
      .replace(/<FaGraduationCap \/>/g, '<FaGraduationCap className="section-icon" />')
      .replace(/<FaLaptopCode \/>/g, '<FaLaptopCode className="section-icon" />');
    
    // Split by double newlines to separate sections
    const sections = textWithIcons.split('\n\n');
    
    return sections.map((section, index) => {
      const lines = section.split('\n');
      const firstLine = lines[0];
      const description = lines.slice(1).join('\n');
      
      // Check if first line contains an icon
      if (firstLine.includes('FaGraduationCap') || firstLine.includes('FaLaptopCode')) {
        const iconMatch = firstLine.match(/<(Fa\w+) className="section-icon" \/>/);
        const title = firstLine.replace(/<Fa\w+ className="section-icon" \/>/, '').trim();
        
        const IconComponent = iconMatch ? (iconMatch[1] === 'FaGraduationCap' ? FaGraduationCap : FaLaptopCode) : null;
        
        return (
          <div key={index} className="text-section">
            <div className="icon-text">
              {IconComponent && <IconComponent className="section-icon" />}
              <span className="section-title">{title}</span>
            </div>
            <p>{description}</p>
          </div>
        );
      }
      
      // If no icon, render as regular paragraph
      return <p key={index}>{section}</p>;
    });
  };

  return (
    <section id="sobre-mi">
      <div className="about-container">
        <div className="about-content">
          <h2>{t('aboutTitle')}</h2>
          <div className="about-text">
            {renderAboutText(t('aboutText'))}
          </div>
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

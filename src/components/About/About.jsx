import { useLanguage } from '../../contexts/LanguageContext';
import { FaGraduationCap, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import './About.css';

function About() {
  const { t } = useLanguage();

  const renderAboutText = (text) => {
    // Replace icon placeholders with actual React components
    const textWithIcons = text
      .replace(/<FaGraduationCap \/>/g, '<FaGraduationCap className="section-icon" />')
      .replace(/<FaLaptopCode \/>/g, '<FaLaptopCode className="section-icon" />')
      .replace(/<FaGlobe \/>/g, '<FaGlobe className="section-icon" />');
    
    // Split by double newlines to separate sections
    const sections = textWithIcons.split('\n\n');
    
    return sections.map((section, index) => {
      const lines = section.split('\n');
      const firstLine = lines[0];
      const description = lines.slice(1).join('\n');
      
      // Check if first line contains an icon
      if (firstLine.includes('FaGraduationCap') || firstLine.includes('FaLaptopCode') || firstLine.includes('FaGlobe')) {
        const iconMatch = firstLine.match(/<(Fa\w+) className="section-icon" \/>/);
        const title = firstLine.replace(/<Fa\w+ className="section-icon" \/>/, '').trim();
        
        let IconComponent = null;
        if (iconMatch) {
          switch (iconMatch[1]) {
            case 'FaGraduationCap':
              IconComponent = FaGraduationCap;
              break;
            case 'FaLaptopCode':
              IconComponent = FaLaptopCode;
              break;
            case 'FaGlobe':
              IconComponent = FaGlobe;
              break;
            default:
              IconComponent = null;
          }
        }
        
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
        </div>
      </div>
    </section>
  )
}

export default About

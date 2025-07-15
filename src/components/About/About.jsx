import { useLanguage } from '../../contexts/LanguageContext';
import { FaGraduationCap, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const { t } = useLanguage();
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

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

        // Detectar si es Formación o Inglés
        const isWide = title.toLowerCase().includes('formación') || title.toLowerCase().includes('education') || title.toLowerCase().includes('inglés') || title.toLowerCase().includes('english');

        return (
          <div key={index} className={`text-section${isWide ? ' wide-section' : ''}`}>
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
    <section id="sobre-mi" ref={aboutRef}>
      <div className="about-container">
        <div className="about-content">
          <h2 ref={titleRef}>{t('aboutTitle')}</h2>
          <p className="about-subtitle" ref={subtitleRef}>{t('aboutSubtitle')}</p>
          <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
            {/* Línea vertical animada para los 3 apartados */}
            <div className="about-vertical-line" />
            <div className="about-text" ref={textRef} style={{width: '100%'}}>
              {renderAboutText(t('aboutText'))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

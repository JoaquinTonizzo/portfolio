import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import './Header.css';

function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Prevent body scroll when menu is open
    if (newState) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      document.body.classList.remove('mobile-menu-open');
    }
  };

  const navigationItems = [
    { label: t('about'), id: 'sobre-mi' },
    { label: t('projects'), id: 'mis-proyectos' },
    { label: t('skills'), id: 'habilidades' },
    { label: t('contact'), id: 'contacto' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <nav className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div 
            className="logo"
            onClick={() => scrollToSection('hero')}
          >
            JOAQUIN TONIZZO
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navigationItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="nav-item">
              <LanguageSelector />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleMobileMenu();
            }
          }}
        >
          {/* Close Button */}
          <button 
            className="mobile-menu-close"
            onClick={toggleMobileMenu}
            aria-label="Cerrar menú"
          >
            ×
          </button>
          
          <ul className="mobile-menu-list">
            {navigationItems.map((item) => (
              <li key={item.id} className="mobile-menu-item">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="mobile-menu-link"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mobile-menu-item">
              <div className="mobile-language-selector">
                <LanguageSelector />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

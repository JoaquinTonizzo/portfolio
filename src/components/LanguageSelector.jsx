import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css';

function LanguageSelector() {
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setIsOpen(false);
  };

  const getLanguageFlag = (lang) => {
    switch (lang) {
      case 'es': return '🇪🇸';
      case 'en': return '🇺🇸';
      case 'pt': return '🇧🇷';
      default: return '🇪🇸';
    }
  };

  const getLanguageName = (lang) => {
    switch (lang) {
      case 'es': return t('spanish');
      case 'en': return t('english');
      case 'pt': return t('portuguese');
      default: return t('spanish');
    }
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language')}
      >
        <span className="language-flag">{getLanguageFlag(language)}</span>
        <span className="language-text">{getLanguageName(language)}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${language === 'es' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('es')}
          >
            <span className="language-flag">🇪🇸</span>
            <span className="language-text">{t('spanish')}</span>
          </button>
          <button
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <span className="language-flag">🇺🇸</span>
            <span className="language-text">{t('english')}</span>
          </button>
          <button
            className={`language-option ${language === 'pt' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('pt')}
          >
            <span className="language-flag">🇧🇷</span>
            <span className="language-text">{t('portuguese')}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default LanguageSelector; 
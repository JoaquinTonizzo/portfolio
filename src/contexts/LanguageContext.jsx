import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Intentar obtener el idioma guardado en localStorage
    const savedLanguage = localStorage.getItem('portfolio-language');
    return savedLanguage || 'es'; // Por defecto español
  });

  const translations = {
    es: {
      // Header
      about: 'Sobre mí',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
      
      // Hero
      title: 'Técnico en Informática y Electrónica',
      subtitle: 'Desarrollador Full-Stack',
      subtitle2: 'Estudiante de Licenciatura en Sistemas',
      cvButton: 'Curriculum Vitae',
      
      // About
      aboutTitle: 'Sobre mí',
      aboutText: 'Soy Técnico especializado en Electrónica, egresado del Instituto Cardenal Stepinac. Durante mi formación adquirí amplios conocimientos en las áreas de la electrónica, la Informática y la computación. Actualmente estoy estudiando la carrera Licenciatura en Sistemas en la Universidad Nacional de General Sarmiento.',
      yearsStudying: 'Años estudiando',
      projects: 'Proyectos',
      specializations: 'Especialidades',
      
      // Projects
      projectsTitle: 'Mis Proyectos',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      
      // Skills
      skillsTitle: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de Datos',
      tools: 'Herramientas',
      
      // Contact
      contactTitle: 'Contacto',
      contactSubtitle: '¿Te gustaría trabajar juntos? ¡Hablemos!',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Tu mensaje...',
      
      // Footer
      footerText: '© 2024 Joaquin Tonizzo. Todos los derechos reservados.',
      
      // Language selector
      language: 'Idioma',
      spanish: 'Español',
      english: 'Inglés'
    },
    en: {
      // Header
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      
      // Hero
      title: 'Computer and Electronics Technician',
      subtitle: 'Full-Stack Developer',
      subtitle2: 'Systems Engineering Student',
      cvButton: 'Resume',
      
      // About
      aboutTitle: 'About Me',
      aboutText: 'I am a Technician specialized in Electronics, graduated from Instituto Cardenal Stepinac. During my training, I acquired extensive knowledge in the areas of electronics, computer science, and computing. I am currently studying Systems Engineering at the National University of General Sarmiento.',
      yearsStudying: 'Years studying',
      projects: 'Projects',
      specializations: 'Specializations',
      
      // Projects
      projectsTitle: 'My Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      
      // Skills
      skillsTitle: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      tools: 'Tools',
      
      // Contact
      contactTitle: 'Contact',
      contactSubtitle: 'Would you like to work together? Let\'s talk!',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      
      // Footer
      footerText: '© 2024 Joaquin Tonizzo. All rights reserved.',
      
      // Language selector
      language: 'Language',
      spanish: 'Spanish',
      english: 'English',
      portuguese: 'Portuguese'
    },
    pt: {
      // Header
      about: 'Sobre mim',
      projects: 'Projetos',
      skills: 'Habilidades',
      contact: 'Contato',
      
      // Hero
      title: 'Técnico em Informática e Eletrônica',
      subtitle: 'Desenvolvedor Full-Stack',
      subtitle2: 'Estudante de Licenciatura em Sistemas',
      cvButton: 'Currículo',
      
      // About
      aboutTitle: 'Sobre mim',
      aboutText: 'Sou Técnico especializado em Eletrônica, formado pelo Instituto Cardenal Stepinac. Durante minha formação, adquiri amplos conhecimentos nas áreas de eletrônica, informática e computação. Atualmente estou estudando a Licenciatura em Sistemas na Universidade Nacional de General Sarmiento.',
      yearsStudying: 'Anos estudando',
      projects: 'Projetos',
      specializations: 'Especializações',
      
      // Projects
      projectsTitle: 'Meus Projetos',
      viewProject: 'Ver Projeto',
      viewCode: 'Ver Código',
      
      // Skills
      skillsTitle: 'Habilidades',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bancos de Dados',
      tools: 'Ferramentas',
      
      // Contact
      contactTitle: 'Contato',
      contactSubtitle: 'Gostaria de trabalhar juntos? Vamos conversar!',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Sua mensagem...',
      
      // Footer
      footerText: '© 2024 Joaquin Tonizzo. Todos os direitos reservados.',
      
      // Language selector
      language: 'Idioma',
      spanish: 'Espanhol',
      english: 'Inglês',
      portuguese: 'Português'
    }
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    // Guardar el idioma en localStorage cuando cambie
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const value = {
    language,
    changeLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}; 
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
      title: 'Técnico Universitario en Informática | Desarrollador Full-Stack | Estudiante de Licenciatura en Sistemas',
      cvButton: 'Curriculum Vitae',
      
      // About
      aboutTitle: 'Sobre mí',
      aboutText: '<FaGraduationCap /> Formación Técnica y Universitaria\nTécnico en Electrónica (Instituto Cardenal Stepinac) y Técnico Universitario en Informática (UNGS), actualmente cursando la Licenciatura en Sistemas.\n\n<FaLaptopCode /> Formación en Desarrollo Full Stack\nEstudiante en Coderhouse: finalicé el módulo de Frontend con React y actualmente curso Backend, profundizando en tecnologías web y buenas prácticas de desarrollo.',
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
      title: 'University Computer Technician | Full-Stack Developer | Systems Engineering Student',
      cvButton: 'Resume',
      
      // About
      aboutTitle: 'About Me',
      aboutText: '<FaGraduationCap /> Technical and University Education\nElectronics Technician (Instituto Cardenal Stepinac) and University Computer Technician (UNGS), currently studying Systems Engineering.\n\n<FaLaptopCode /> Full Stack Development Training\nStudent at Coderhouse: completed the Frontend module with React and currently studying Backend, deepening in web technologies and good development practices.',
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
      title: 'Técnico Universitário em Informática | Desenvolvedor Full-Stack | Estudante de Licenciatura em Sistemas',
      cvButton: 'Currículo',
      
      // About
      aboutTitle: 'Sobre mim',
      aboutText: '<FaGraduationCap /> Formação Técnica e Universitária\nTécnico em Eletrônica (Instituto Cardenal Stepinac) e Técnico Universitário em Informática (UNGS), atualmente cursando a Licenciatura em Sistemas.\n\n<FaLaptopCode /> Formação em Desenvolvimento Full Stack\nEstudante na Coderhouse: finalizei o módulo de Frontend com React e atualmente curso Backend, aprofundando em tecnologias web e boas práticas de desenvolvimento.',
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
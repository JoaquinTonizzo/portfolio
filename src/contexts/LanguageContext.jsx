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
      aboutSubtitle: 'Conoce un poco más sobre mi formación, experiencia y habilidades que me definen como profesional.',
      aboutText: '<FaGraduationCap /> Formación Técnica y Universitaria\nTécnico en Electrónica (Instituto Cardenal Stepinac). Técnico Universitario en Informática (UNGS), con conocimientos en desarrollo de software, bases de datos y análisis de sistemas. Actualmente curso la Licenciatura en Sistemas.\n\n<FaLaptopCode /> Formación en Desarrollo Full Stack\nEstudiante en Coderhouse. Finalicé el módulo de Frontend con React, donde desarrollé interfaces web modernas. Actualmente curso Backend, enfocándome en el desarrollo de APIs, manejo de bases de datos y buenas prácticas.\n\n<FaGlobe /> Inglés Upper Intermediate (B2)\nCertificado por el Instituto Superior Cultural Británico, tras cuatro años de formación. Cuento con capacidad para comprender documentación técnica, mantener conversaciones fluidas y desenvolverme en entornos laborales en inglés.',
      
      // Projects
      projectsTitle: 'Mis Proyectos',
      viewProject: 'Ver Proyecto',
      viewCode: 'Ver Código',
      projectsSubtitle: 'Una selección de proyectos que demuestran mis habilidades en desarrollo de software, desde juegos interactivos hasta sistemas de gestión empresarial.',
      projectStatus: 'Completado',
      project1Description: 'Sistema de gestión de RRHH con análisis inteligente. Gestiona licencias, rendimiento, CVs y postulaciones utilizando machine learning. Arquitectura full stack con backend en Flask.',
      project2Description: 'Tienda online moderna con base de datos en la nube. Frontend en React con catálogo, carrito y checkout. Firebase se utiliza para datos de productos y stock.',
      project3Description: 'Sistema académico con procedimientos almacenados y soporte NoSQL. Integra PostgreSQL con PL/pgSQL y BoltDB en Go para gestión académica.',
      project4Description: 'Sitio de comercio electrónico simple con tecnologías web puras. Incluye productos, carrito de compras y cálculo de totales sin usar frameworks.',
      project5Description: 'Videojuego espacial con niveles, combate y sistema de puntuación. Desarrollado en Java con enfoque en POO. Incluye mecánicas de exploración, enemigos y efectos visuales.',
      project6Description: 'Sitio web informativo para emprendimiento gastronómico. Página responsive con diseño atractivo que presenta productos, historia del proyecto y formulario de contacto.',
      
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
      aboutSubtitle: 'Learn more about my background, experience, and the skills that define me as a professional.',
      aboutText: '<FaGraduationCap /> Technical and University Education\nElectronics Technician (Instituto Cardenal Stepinac). University Computer Technician (UNGS), with knowledge in software development, databases and systems analysis. Currently studying Systems Engineering.\n\n<FaLaptopCode /> Full Stack Development Training\nStudent at Coderhouse. I completed the Frontend module with React, where I developed modern web interfaces. Currently studying Backend, focusing on API development, database management and best practices.\n\n<FaGlobe /> English Upper Intermediate (B2)\nCertified by the Instituto Superior Cultural Británico, after four years of training. I have the ability to understand technical documentation, maintain fluid conversations and develop myself in work environments in English.',
      
      // Projects
      projectsTitle: 'My Projects',
      viewProject: 'View Project',
      viewCode: 'View Code',
      projectsSubtitle: 'A selection of projects that demonstrate my software development skills, from interactive games to business management systems.',
      projectStatus: 'Completed',
      project1Description: 'Human Resources management system with intelligent analytics. Manages leave, performance, CVs, and applications using machine learning. Full stack architecture with a Flask backend.',
      project2Description: 'Modern online store with a cloud database. React frontend with catalog, cart, and checkout. Uses Firebase for product and stock data.',
      project3Description: 'Academic management system with stored procedures and NoSQL support. Integrates PostgreSQL with PL/pgSQL and BoltDB in Go for academic management.',
      project4Description: 'Simple e-commerce website using pure web technologies. Includes products, shopping cart, and total calculation without frameworks.',
      project5Description: 'Space video game with levels, combat, and scoring system. Developed in Java with an OOP approach. Includes exploration mechanics, enemies, and visual effects.',
      project6Description: 'Informational website for a gastronomic venture. Responsive page with attractive design presenting products, project history, and a contact form.',
      
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
      english: 'English'
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
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
      project1Description: 'Un emocionante juego de aventuras espaciales desarrollado en Java con mecánicas de exploración y combate. Incluye sistema de puntuación, múltiples niveles y efectos visuales.',
      project2Description: 'Sistema de gestión logística que utiliza principios de programación orientada a objetos. Optimiza rutas, gestiona inventarios y controla entregas en tiempo real.',
      project3Description: 'Implementación del popular juego Wordle en Python con interfaz intuitiva. Incluye sistema de pistas, validación de palabras y estadísticas de partidas.',
      project4Description: 'Aplicación móvil de gestión de tareas con React Native. Incluye sincronización en la nube, notificaciones push y diseño responsive para iOS y Android.',
      project5Description: 'Sitio web corporativo moderno desarrollado con React y Node.js. Incluye panel de administración, blog integrado y optimización SEO completa.',
      project6Description: 'Sistema de autenticación seguro con JWT y encriptación de datos. Incluye gestión de roles, recuperación de contraseñas y auditoría de seguridad.',
      
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
      project1Description: 'An exciting space adventure game developed in Java with exploration and combat mechanics. Includes scoring system, multiple levels and visual effects.',
      project2Description: 'Logistics management system that uses object-oriented programming principles. Optimizes routes, manages inventories and controls deliveries in real time.',
      project3Description: 'Implementation of the popular Wordle game in Python with intuitive interface. Includes hint system, word validation and game statistics.',
      project4Description: 'Mobile task management application with React Native. Includes cloud synchronization, push notifications and responsive design for iOS and Android.',
      project5Description: 'Modern corporate website developed with React and Node.js. Includes admin panel, integrated blog and complete SEO optimization.',
      project6Description: 'Secure authentication system with JWT and data encryption. Includes role management, password recovery and security auditing.',
      
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
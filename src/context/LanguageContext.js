import React, { createContext, useState } from 'react';


export const LanguageContext = createContext();

// Textos traducidos para toda la aplicación
const translations = {
  es: {
    // Navegación
    inicio: 'Inicio',
    portafolio: 'Portafolio',
    servicios: 'Servicios',
    curriculum: 'Currículum',
    contacto: 'Contacto',
    derechos: 'Todos los derechos reservados',
    
    // Inicio
    bienvenida: 'Soy',
    descripcion: 'bienvenid@ a mi portafolio. Aquí encontrarás información sobre mis proyectos y servicios en',
    programacion: 'programación y desarrollo',
    explora: '¡Explora y no dudes en',
    contactarme: 'contactarme',
    paraInfo: 'para más información!',
    trabajosProgramando: 'Estos son algunos de mis trabajos programando',
    
    // Portafolio
    miPortafolio: 'Portafolio',
    
    // Servicios
    misServicios: 'Servicios',
    disenoWeb: 'Diseño y Desarrollo web',
    descripcionDiseno: 'Creación y desarrollo de paginas web responsive, posicionamiento, mejora de la optimización y rendimiento.',
    programacionyDesarrollo: 'Programación',
    descripcionProgramacionyDesarrollo: 'Desarrollo de aplicaciones web, automatización de tareas, integración con APIs de terceros, desarrollo backend y frontend con tecnologías modernas: React, Node.js, PHP.',
    diseñoyexperienciausuario: 'Diseño y Experiencia del usuario',
    descripcionPosicionamiento: 'Maquetación con HTML, CSS y JavaScript, diseño de interfaces (UI) y experiencia de usuario (UX), prototipos interactivos.',
    mantenimientoySeguridad: 'Mantenimiento y Seguridad',
    descripcionMantenimientoySeguridad:'Actualizaciones y mantenimiento de sitios web, Ccopia de seguridad y recuperación, protección contra malware y ciberataques, certificados SSL e implementación de HTTPS',
    optimizacion: 'Optimización y Analisis',
    descripcionOptimizacion: 'SEO técnico (optimización para buscadores), análisis de tráfico web (con Google Analytics o herramientas similares).',

    
    // Currículum
    miCurriculum: 'Currículum',
    experiencias: 'Experiencias',
    formacion: 'Formación',
    idiomas: 'Idiomas',
    certificaciones: 'Certificaciones',
    tecnologias: 'Tecnologías',
    habilidades: 'Habilidades',
    descargarCV: 'Descargar CV completo en PDF',
    
    // Contacto
    miContacto: 'Contacto',
    nombre: 'Nombre',
    apellidos: 'Apellidos',
    email: 'Email',
    telefono: 'Teléfono',
    motivoContacto: 'Motivo de contacto',
    enviar: 'Enviar',
    enviando: 'Enviando...',
    mensajeExito: '¡Mensaje enviado correctamente! Te contactaré pronto.',
    mensajeError: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    siguemeRedes: 'Sígueme en redes',
    infoContacto: 'Información de contacto',
    
    // Proyecto
    verProyecto: 'Ver Proyecto',
    
    // Error 404
    error404: 'Error 404'
  },
  en: {
    // Navigation
    inicio: 'Home',
    portafolio: 'Portfolio',
    servicios: 'Services',
    curriculum: 'Resume',
    contacto: 'Contact',
    derechos: 'All rights reserved',
    
    // Home
    bienvenida: 'I am',
    descripcion: 'welcome to my portfolio. Here you will find information about my projects and services in',
    programacion: 'programming and development',
    explora: 'Explore and feel free to',
    contactarme: 'contact me',
    paraInfo: 'for more information!',
    trabajosProgramando: 'These are some of my programming projects',
    
    // Portfolio
    miPortafolio: 'Portfolio',
    
    // Services
    misServicios: 'Services',
    disenoWeb: 'Web Design and Development',
    descripcionDiseno: 'Creation and development of responsive websites, SEO, optimization and performance improvement..',
    programacionyDesarrollo: 'Software Development',
    descripcionProgramacionyDesarrollo: 'Web application development, task automation, third-party API integration, backend and frontend development using modern technologies such as React, Node.js, and PHP.',
    diseñoyexperienciausuario: 'UI/UX Design',
    descripcionPosicionamiento: 'Layout and styling using HTML, CSS, and JavaScript; UI/UX design; and creation of interactive prototypes.',
    mantenimientoySeguridad: 'Web Maintenance and Cybersecurity',
    descripcionMantenimientoySeguridad:'Regular website updates and maintenance, data backup and recovery, malware and cyberattack protection, SSL certificate management, and HTTPS implementation.',
    optimizacion: 'Website Optimization and Analytics',
    descripcionOptimizacion: 'Technical SEO for search engine optimization and web traffic analysis using Google Analytics or similar tools.',

    
    // Resume
    miCurriculum: 'Resume',
    experiencias: 'Experiences',
    formacion: 'Education',
    idiomas: 'Languages',
    certificaciones: 'Certifications',
    tecnologias: 'Technologies',
    habilidades: 'Skills',
    descargarCV: 'Download full Resume in PDF',
    
    // Contact
    miContacto: 'Contact',
    nombre: 'First Name',
    apellidos: 'Last Name',
    email: 'Email',
    telefono: 'Phone',
    motivoContacto: 'Reason for contact',
    enviar: 'Send',
    enviando: 'Sending...',
    mensajeExito: 'Message sent successfully! I will contact you soon.',
    mensajeError: 'There was an error sending the message. Please try again.',
    siguemeRedes: 'Follow me on social media',
    infoContacto: 'Contact information',
    
    // Project
    verProyecto: 'View Project',
    
    // Error 404
    error404: 'Error 404'
  }
};

// Crear el proveedor
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [texts, setTexts] = useState(translations.es);

  // Función para cambiar el idioma
  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    setTexts(translations[newLanguage]);
  };

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
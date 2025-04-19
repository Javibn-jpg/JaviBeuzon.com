import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

export const Curriculum = () => {
  const { texts, language } = useContext(LanguageContext);
  
  const pdfUrl = "/docs/curriculum Javier Beuzón Neva.pdf";
  
  // Función para manejar la descarga
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Curriculum_Javier_Beuzon.pdf"; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Contenido traducible del currículum
  const curriculumContent = {
    es: {
      experiencias: [
        {
          year: "2025",
          title: "Desarrollador Web: Zaitec",
          duties: [
            "Diseño y desarrollo de páginas web: control de Stock de un supermercado y administración de riesgo laboral.",
            "Uso de React y Supabase para una interfaz atractiva y funcional.",
            "Optimización del rendimiento y accesibilidad para una mejor experiencia del usuario.",
            "Uso de GitHub como controlador de versiones.",
            "Gestión del despliegue y mantenimiento de las páginas web."
          ]
        },
        {
          year: "2019",
          title: "Director de eventos: Babyradio",
          duties: [
            "Gestión de la planificación y ejecución de eventos, asegurando plazos y objetivos.",
            "Coordinación de equipos multidisciplinarios, fomentando la comunicación efectiva y el trabajo en equipo.",
            "Resolución de problemas en tiempo real y optimizando recursos.",
            "Uso de herramientas digitales para la organización y seguimiento de eventos."
          ]
        }
      ],
      formacion: [
        {
          year: "2025",
          title: "Ciclo Superior de Desarrollo de Aplicaciones Web",
          institution: "Instituto de formación Medac"
        },
        {
          year: "2014",
          title: "Ciclo Superior Dirección de Cocina",
          institution: "I.E.S. Juan Lara"
        },
        {
          year: "2012",
          title: "Diplomatura Magisterio de Educación Física",
          institution: "Universidad de Cádiz"
        }
      ],
      idiomas: [
        {
          name: "Español",
          level: "native",
          label: "Nativo"
        },
        {
          name: "Inglés",
          level: "b2",
          label: "B2 Aptis"
        }
      ],
      habilidades: [
        "Resolución de problemas",
        "Razonamiento Analítico",
        "Trabajo en equipo",
        "Adaptabilidad"
      ],
      certificaciones: [
        {
          title: "Diseño de experiencia del usuario",
          institution: "Google"
        },
        {
          title: "Fundamentos del análisis de datos",
          institution: "Microsoft"
        },
        {
          title: "Fundamentos del administrador de sistemas",
          institution: "Microsoft"
        },
        {
          title: "Fundamentos del desarrollo de Software",
          institution: "Microsoft"
        }
      ],
      tecnologias: {
        lenguajes: {
          title: "Lenguajes",
          items: ["Java", "Python", "Cobol"]
        },
        repositorio: {
          title: "Control de repositorio",
          items: ["GitHub"]
        },
        bbdd: {
          title: "BBDD",
          items: ["SQL", "Supabase"]
        },
        web: {
          title: "WEB",
          items: ["HTML", "CSS", "JavaScript"]
        },
        frameworks: {
          title: "Frameworks",
          items: ["React"]
        }
      }
    },
    en: {
      experiencias: [
        {
          year: "2025",
          title: "Web Developer: Zaitec",
          duties: [
            "Designed and developed websites for supermarket stock control and occupational risk management.",
            "Utilized React and Supabase to create an attractive and functional interface.",
            "Optimized performance and accessibility for an improved user experience.",
            "Employed GitHub for version control.",
            "Managed deployment and maintenance of websites."
          ]
        },
        {
          year: "2019",
          title: "Events Director: Babyradio",
          duties: [
            "Planned and executed events, ensuring alignment with deadlines and objectives.",
            "Coordinated multidisciplinary teams, fostering effective communication and collaboration.",
            "Solved problems in real time and optimized resources efficiently.",
            "Utilized digital tools to organize and monitor events."
          ]
        }
      ],
      formacion: [
        {
          year: "2025",
          title: "Higher Degree in Web Application Development",
          institution: "Medac Vocational Training Institute"
        },
        {
          year: "2014",
          title: "Higher Degree in Kitchen Management",
          institution: "I.E.S. Juan Lara"
        },
        {
          year: "2012",
          title: "Bachelor’s Degree in Physical Education Teaching",
          institution: "University of Cádiz"
        }
      ],
      idiomas: [
        {
          name: "Spanish",
          level: "native",
          label: "Native"
        },
        {
          name: "English",
          level: "b2",
          label: "B2 Aptis"
        }
      ],
      habilidades: [
        "Problem solving",
        "Analytical reasoning",
        "Teamwork",
        "Adaptability"
      ],
      certificaciones: [
        {
          title: "User Experience Design",
          institution: "Google"
        },
        {
          title: "Data Analysis Fundamentals",
          institution: "Microsoft"
        },
        {
          title: "System Administrator Fundamentals",
          institution: "Microsoft"
        },
        {
          title: "Software Development Fundamentals",
          institution: "Microsoft"
        }
      ],
      tecnologias: {
        lenguajes: {
          title: "Languages",
          items: ["Java", "Python", "Cobol"]
        },
        repositorio: {
          title: "Repository Control",
          items: ["GitHub"]
        },
        bbdd: {
          title: "Databases",
          items: ["SQL", "Supabase"]
        },
        web: {
          title: "WEB",
          items: ["HTML", "CSS", "JavaScript"]
        },
        frameworks: {
          title: "Frameworks",
          items: ["React"]
        }
      }
    }
  };

  // Seleccionar el contenido según el idioma actual
  const content = curriculumContent[language];

  return (
    <div className='page curriculum-page'>
      <h1 className='heading'>{texts.miCurriculum}</h1>
      
      <div className="curriculum-container">
        <div className="cv-section">
          <div className="section-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h2>{texts.experiencias}</h2>
          </div>
          
          <div className="timeline">
            {content.experiencias.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-badge">{exp.year}</div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <ul>
                    {exp.duties.map((duty, dutyIndex) => (
                      <li key={dutyIndex}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cv-section">
          <div className="section-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <h2>{texts.formacion}</h2>
          </div>
          
          <div className="education-cards">
            {content.formacion.map((edu, index) => (
              <div className="education-card" key={index}>
                <div className="education-year">{edu.year}</div>
                <div className="education-info">
                  <h3>{edu.title}</h3>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cv-skills-container">
          <div className="cv-section skills-section">
            <div className="section-header">
              <div className="section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 2v2"></path>
                  <path d="M12 22v-2"></path>
                  <path d="m17 20.66-1-1.73"></path>
                  <path d="M11 10.27 7 3.34"></path>
                  <path d="m20.66 17-1.73-1"></path>
                  <path d="m3.34 7 1.73 1"></path>
                  <path d="M14 12h8"></path>
                  <path d="M2 12h2"></path>
                  <path d="m20.66 7-1.73 1"></path>
                  <path d="m3.34 17 1.73-1"></path>
                  <path d="m17 3.34-1 1.73"></path>
                  <path d="m7 20.66 1-1.73"></path>
                </svg>
              </div>
              <h2>{texts.idiomas}</h2>
            </div>
            
            <div className="language-skills">
              {content.idiomas.map((idioma, index) => (
                <div className="language-skill" key={index}>
                  <span className="language-name">{idioma.name}</span>
                  <div className="skill-bar">
                    <div className={`skill-level ${idioma.level}`}></div>
                  </div>
                  <span className="skill-label">{idioma.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cv-section skills-section">
            <div className="section-header">
              <div className="section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2>{texts.habilidades}</h2>
            </div>
            
            <div className="skills-badges">
              {content.habilidades.map((skill, index) => (
                <span className="skill-badge" key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="cv-section">
          <div className="section-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h2>{texts.certificaciones}</h2>
          </div>
          
          <div className="certifications-grid">
            {content.certificaciones.map((cert, index) => (
              <div className="certification-card" key={index}>
                <div className="cert-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="cv-section">
          <div className="section-header">
            <div className="section-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path>
              </svg>
            </div>
            <h2>{texts.tecnologias}</h2>
          </div>
          
          <div className="technologies-grid">
            <div className="tech-category">
              <h3>{content.tecnologias.lenguajes.title}</h3>
              <div className="tech-pills">
                {content.tecnologias.lenguajes.items.map((item, index) => (
                  <span className="tech-pill" key={index}>{item}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{content.tecnologias.repositorio.title}</h3>
              <div className="tech-pills">
                {content.tecnologias.repositorio.items.map((item, index) => (
                  <span className="tech-pill" key={index}>{item}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{content.tecnologias.bbdd.title}</h3>
              <div className="tech-pills">
                {content.tecnologias.bbdd.items.map((item, index) => (
                  <span className="tech-pill" key={index}>{item}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{content.tecnologias.web.title}</h3>
              <div className="tech-pills">
                {content.tecnologias.web.items.map((item, index) => (
                  <span className="tech-pill" key={index}>{item}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-category">
              <h3>{content.tecnologias.frameworks.title}</h3>
              <div className="tech-pills">
                {content.tecnologias.frameworks.items.map((item, index) => (
                  <span className="tech-pill" key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cv-download-container">
        <button onClick={handleDownload} className="download-btn">
          <i className="fas fa-download"></i> {texts.descargarCV}
        </button>
      </div>
    </div>
  )
}
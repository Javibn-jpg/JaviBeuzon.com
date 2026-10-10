import React, { useContext, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';

export const Curriculum = () => {
  const { texts, language } = useContext(LanguageContext);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const pdfUrl = "/docs/curriculum_Javier_Beuzon_Neva.pdf";
  
  // Función para manejar la descarga del currículum
  const handleDownload = () => {
    fetch(pdfUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Curriculum_Javier_Beuzon.pdf');
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      })
      .catch(error => {
        console.error('Error downloading the PDF:', error);
        alert(language === 'es' 
          ? 'Error al descargar el currículum' 
          : 'Error downloading curriculum'
        );
      });
  };

  // Función para manejar la descarga de certificaciones
const handleCertificationDownload = (cert, category) => {
  // Generar nombre de archivo limpio
  const cleanTitle = cert.title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_');
  const fileName = `${cleanTitle}_${cert.institution.replace(/\s+/g, '_')}.pdf`;
  
  // URL del PDF (ajusta según tu estructura de carpetas)
const pdfUrl = `/docs/certificaciones/${cert.fileName}`;

  
  fetch(pdfUrl)
    .then(response => {
      if (!response.ok) {
        alert(language === 'es' 
          ? 'PDF no disponible para esta certificación' 
          : 'PDF not available for this certification'
        );
        return;
      }
      return response.blob();
    })
    .then(blob => {
      if (blob) {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      }
    })
    .catch(error => {
      console.error('Error downloading the PDF:', error);
      alert(language === 'es' 
        ? 'Error al descargar el PDF' 
        : 'Error downloading PDF'
      );
    });
};

  // Logos de tecnologías (usando CDN público)
  const techLogos = {
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Cobol': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cobol/cobol-original.svg',
    'Flutter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Supabase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Power BI': '/images/powerbi.svg'
  };

  // Categorías de certificaciones
  const certificationCategories = {
    es: {
      all: 'Todas las Certificaciones',
      cybersecurity: 'Ciberseguridad',
      dataScience: 'Ciencia de Datos / Análisis de Datos',
      database: 'Bases de Datos / SQL',
      python: 'Python',
      webDev: 'Desarrollo Web',
      mobile: 'Desarrollo Móvil (Flutter)',
      general: 'Programación General',
      java: 'Java',
      cobol: 'COBOL / Mainframe'
    },
    en: {
      all: 'All Certifications',
      cybersecurity: 'Cybersecurity',
      dataScience: 'Data Science / Data Analysis',
      database: 'Databases / SQL',
      python: 'Python',
      webDev: 'Web Development',
      mobile: 'Mobile Development (Flutter)',
      general: 'General Programming',
      java: 'Java',
      cobol: 'COBOL / Mainframe'
    }
  };

  // Contenido traducible del currículum con certificaciones categorizadas y horas
  const curriculumContent = {
    es: {
      experiencias: [
        {
          year: "2025",
          title: "Desarrollador COBOL AS/400 & Data Analyst | Core Banking & Payments: AndBank",
          duties: [
            "Desarrollo y mantenimiento de soluciones ILE COBOL y CLLE con SQL embebido para procesos financieros críticos en entorno AS/400 (IBM i) / DB2.",
            "Análisis, desarrollo y optimización de procesos Batch (EOD/EOM) integrados con el sistema Core Banking Olympic (ERI).",
            "Diagnóstico y resolución de incidencias en producción (L3), analizando procesos, datos y trazas para garantizar la continuidad operativa del banco.",
            "Gestión y resolución de incidencias en sistemas de pagos y transferencias internacionales SWIFT, realizando el seguimiento end-to-end y analizando mensajería XML en plataformas 2MAP, TARGET y SWIFT.",
            "Soporte técnico y operativo de Medios de Pago, gestionando incidencias de tarjetas de crédito, cajeros automáticos, alta/configuración de TPVs virtuales y aplicación de normativas de enmascaramiento (Compliance/PCI).",
            "Elaboración de reporting regulatorio mediante Power BI, desarrollando informes periódicos sobre el volumen de transferencias destinados al Banco de España.",
            "Soporte técnico crítico al área Financiera y de Contabilidad, gestionando las cargas de datos inter-entidades durante los procesos de cierre a final de mes y asegurando la integridad contable.",
            "Desarrollo y optimización de consultas SQL nativas y en entorno Click&Decide (Click Builder) para la extracción segura de datos del Core Banking.",
            "Gestión del ciclo de vida del software, control de versiones y pases a producción controlados mediante MDCMS (Midrange Dynamics).",
            "Colaboración transversal con analistas funcionales, QA y negocio para la toma de requisitos y el diseño técnico de nuevas operativas bancarias."
          ]
        },
        {
          year: "2025",
          title: "Desarrollador Web-Freelace: Mármoles Jesús",
          duties: [
            "Diseño y desarrollo de la página web para una empresa de mármoles, con un estilo moderno y elegante.",
            "Integración de un componente que calcula presupuestos según material y dimensiones.",
            "Implementación de una interfaz atractiva y fácil de usar con React.",
            "Uso de GitHub como controlador de versiones.",
            "Optimización para un rendimiento fluido y una navegación accesible."
          ]
        },
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
          year: "2023",
          title: "Desarrollador Web: Cenas con Asesinato: La venganza del Tio Salazar",
          duties: [
            "Diseño y desarrollo completo de dos páginas web fundamentales para un juego cooperativo de cenas con asesinato.",
            "Implementación de interfaces dinámicas y responsivas utilizando React, junto con Supabase para gestionar la base de datos y almacenar documentos esenciales del juego.",
            "Mejora del rendimiento y la accesibilidad para ofrecer una experiencia de usuario fluida y agradable.",
            "Administración rigurosa del control de versiones mediante GitHub, facilitando la colaboración y el seguimiento del proyecto.",
            "Supervisión integral del despliegue y mantenimiento continuo para asegurar la estabilidad y actualizaciones periódicas."
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
      certificaciones: {
        cybersecurity: [
          {
            title: "Seguridad Informática - Ingeniería social: El arte del engaño",
            institution: "Udemy",
            duration: "4h",
            fileName: "seguridad_informática_-_ingeniería_social_el_arte_del_engaño.pdf" 
          },
          {
            title: "Master en Metasploit. De 0 a Experto con Prácticas",
            institution: "Udemy",
            duration: "13.5h",
            fileName: "metasploit_master_udemy.pdf" 
          }
        ],
        dataScience: [
          {
            title: "Fundamentos del análisis de datos",
            institution: "Microsoft",
            duration: "8h",
            fileName: ""
          },
          {
            title: "Curso Snowflake: Análisis y Visualización de Datos",
            institution: "Udemy",
            duration: "11h",
            fileName: "curso_snowflake_análisis_y_visualización_de_datos.pdf"
          },
          {
            title: "Análisis de datos con Microsoft Excel y Power BI",
            institution: "Udemy",
            duration: "34h",
            fileName: "análisis_de_datos_con_microsoft_excel_y_power_bi.pdf"
          }
        ],
        database: [
          {
            title: "Curso SQL: Desde cero para principiantes",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "curso_sql_desde_cero_para_principiantes.pdf"
          },
          {
            title: "Curso SQL: JOINs, Subconsultas, CTEs y Consultas Avanzadas",
            institution: "Udemy",
            duration: "4h",
            fileName: "curso_sql_joins,_subconsultas,_ctes_y_consultas_avanzadas.pdf"
          },
          {
            title: "Bases de datos con MySQL + ChatGPT y MongoDB",
            institution: "Udemy",
            duration: "12.5h",
            fileName: "bases_de_datos_con_mysql_+_chatgpt_y_mongodb.pdf"
          },
          {
            title: "SQL: Creación de Bases de Datos (De cero a profesional)",
            institution: "Udemy",
            duration: "2h",
            fileName: "sql_creación_de_bases_de_datos.pdf"
          }
        ],
        python: [
          {
            title: "Curso Python: Desde cero para principiantes",
            institution: "Udemy",
            duration: "7.5h",
            fileName: "PYTHON_8H.pdf"
          },
          {
            title: "Web Development with Python",
            institution: "IBM Skillsbuild",
            duration: "60h",
            fileName: "IBM_web_development_with_python.pdf"
          },
          {
            title: "Universidad Python - Cero a Experto - Actualizado (+86 hrs)",
            institution: "Udemy",
            duration: "86.5h",
            fileName: "PYTHON_+90H.pdf"
          },
          {
            title: "Python: Crea tu primer juego con Pygame",
            institution: "Udemy",
            duration: "7.5h",
            fileName: "PYTHON_PYGAMES.pdf"
          },
          {
            title: "Python: Análisis avanzado para Data Science",
            institution: "Udemy",
            duration: "5h",
            fileName: "PYTHON_DATA_SCIENCE.pdf"
          },
          {
            title: "Curso Python: Análisis y visualización de datos",
            institution: "Udemy",
            duration: "12.5h",
            fileName: "PYTHON_VISUALIZACION_DATOS.pdf"
          },
          {
            title: "Curso Python: Agrupación y Agregación de Datos con Pandas",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "PYTHON_AGREGACION_DATOS_PANDAS.pdf"
          },
          {
            title: "Curso Python: Manejo de Datos con Pandas",
            institution: "Udemy",
            duration: "5h",
            fileName: "PYTHON_DATOS_CON_PANDAS.pdf"
          },
          {
            title: "Curso Python: Transformación y Limpieza de Datos",
            institution: "Udemy",
            duration: "8h",
            fileName: "PYTHON_TRANSFORMACION_LIMPIEZA_DATOS.pdf"
          },
          {
            title: "Curso Python: Programación Numérica con NumPy",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "PYTHON_NUMERICA_CON_NUMPHY.pdf"
          },
          {
            title: "Python 3 Plus: Python desde Cero + Data Analysis y Matplot",
            institution: "Udemy",
            duration: "14.5h",
            fileName: "PYTHON3+.pdf"
          },
          {
            title: "Curso Python: Series Temporales con Pandas",
            institution: "Udemy",
            duration: "3.5h",
            fileName: "PYTHON_TEMPORALES_CON_PANDAS.pdf"
          },
          {
            title: "Python: Machine Learning",
            institution: "Udemy",
            duration: "8h",
            fileName: "PYTHON_MACHINE_LEARNING.pdf"
          }
        ],
        webDev: [
          {
            title: "Diseño de experiencia del usuario",
            institution: "Google",
            duration: "260h",
            fileName: "ux_google.pdf"
          },
          {
            title: "Master en React: Aprende ReactJS, Hooks, MERN, NodeJS, JWT+",
            institution: "Udemy",
            duration: "39.5h",
            fileName: ""
          },
          {
            title: "Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL",
            institution: "Udemy",
            duration: "82.5h",
            fileName: "complete_web_development_with_html5,_css3,_js,_ajax,_php_and_mysql.pdf"
          },
          {
            title: "+100 Proyectos de Desarrollo Web con HTML, CSS y JavaScript",
            institution: "Udemy",
            duration: "31.5h",
            fileName: "100_proyectos_de_desarrollo_web_con_html_css_y_javascript.pdf"
          },
          {
            title: "Universidad JavaScript - De Cero a Experto JavaScript!",
            institution: "Udemy",
            duration: "44.5h",
            fileName: "universidad_javascript_-_de_cero_a_experto_javascript.pdf"
          }
        ],
        mobile: [
          {
            title: "Flutter - Móvil: De cero a experto",
            institution: "Udemy",
            duration: "50.5h",
            fileName: "FLUTTER_MOVIL.pdf"
          },
          {
            title: "Flutter Intermedio: Diseños profesionales y animaciones",
            institution: "Udemy",
            duration: "15.5h",
            fileName: "FLUTTER_INTERMEDIO.pdf"
          },
          {
            title: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
            institution: "Udemy",
            duration: "35h",
            fileName: "FLUTTER_AVANZADO.pdf"
          },
        ],
        general: [
          {
            title: "Fundamentos del administrador de sistemas",
            institution: "Microsoft",
            duration: "6h",
            fileName: ""
          },
          {
            title: "Fundamentos del desarrollo de Software",
            institution: "Microsoft",
            duration: "8h",
            fileName: ""
          },
          {
            title: "Universidad de Programación - Python, Java, C y C++",
            institution: "Udemy",
            duration: "76h",
            fileName: "universidad _de_programación_python_java_c_c++.pdf"
          },
          {
            title: "Universidad de Lógica de Programación - Aprende 7 Lenguajes!",
            institution: "Udemy",
            duration: "55h",
            fileName: "universidad_de_logica_de_programacion_aprende_7_lenguajes.pdf"
          }
        ],
        java: [
          {
            title: "Universidad Java - Cero a Experto - Actualizado (+150 hrs)",
            institution: "Udemy",
            duration: "156h",
            fileName: "JAVA_155H.pdf"
          },
          {
            title: "Java: Curso profesional de Java 2025 – De cero a Master",
            institution: "Udemy",
            duration: "16h",
            fileName: "java-curso-profesional-Java-2025–de-cero-a-master.pdf"
          }
        ],
        cobol: [
          {
            title: "Bootcamp: Desarrollador Cobol",
            institution: "Universidad de Buenos Aires, UBA",
            duration: "220h",
            fileName: "CERTIFICACION_COBOL_UNIVERSIDAD_BUENOS_AIRES.pdf"
          },
          {
            title: "COBOL curso completo: Empieza a programar ¡Ya!",
            institution: "Udemy",
            duration: "8h",
            fileName: "cobol_curso_completo_empieza_a_programar.pdf"
          },
          {
            title: "Curso completo de COBOL y JCL",
            institution: "Udemy",
            duration: "25h",
            fileName: "curso_completo-cobol_jcl.pdf"
          },
          {
            title: "Mainframe: The Complete COBOL Course From Beginner To Expert",
            institution: "Udemy",
            duration: "9.5h",
            fileName: "MAINFRAME_COBOL.pdf"
          }
        ]
      },
      tecnologias: {
        lenguajes: {
          title: "Lenguajes",
          items: ["Java", "Python", "Cobol", "Flutter"]
        },
        repositorio: {
          title: "Control de repositorio",
          items: ["GitHub"]
        },
        bbdd: {
          title: "BBDD",
          items: ["SQL", "Supabase"]
        },
        analisis: {
          title: "Análisis de datos",
          items: ["Power BI"]
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
          title: "COBOL AS/400 Developer & Data Analyst | Core Banking & Payments: AndBank",
          duties: [
            "Development and maintenance of ILE COBOL and CLLE solutions with embedded SQL for critical financial processes in AS/400 (IBM i) / DB2 environments.",
            "Analysis, development, and optimization of batch processes (EOD/EOM) integrated with the Olympic Core Banking system (ERI).",
            "Diagnosis and resolution of production incidents (L3 support), analyzing processes, data, and logs to ensure the bank’s operational continuity.",
            "Management and resolution of incidents involving payment systems and international SWIFT transfers, performing end-to-end tracking and analyzing XML messaging across 2MAP, TARGET, and SWIFT platforms.",
            "Technical and operational support for payment services, handling credit card and ATM incidents, virtual POS terminal setup and configuration, and the implementation of data masking regulations (Compliance/PCI).",
            "Preparation of regulatory reports using Power BI, developing periodic reports on transfer volumes for submission to the Bank of Spain.",
            "Critical technical support for Finance and Accounting, managing inter-entity data loads during month-end closing processes and ensuring accounting data integrity.",
            "Development and optimization of native SQL queries and queries using the Click&Decide environment (Click Builder) for secure data extraction from the Core Banking system.",
            "Management of the software development lifecycle, version control, and controlled production deployments using MDCMS (Midrange Dynamics).",
            "Cross-functional collaboration with business analysts, QA teams, and business stakeholders to gather requirements and define technical solutions for new banking operations."
          ]
        },
        {
          year: "2025",
          title: "Web Developer – Freelance: Mármoles Jesús",
          duties: [
            "Design and development of the website for a marble company, with a modern and elegant style.",
            "Integration of a component that calculates quotes based on material and dimensions.",
            "Implementation of an attractive and user-friendly interface with React.",
            "Use of GitHub for version control.",
            "Optimization for smooth performance and accessible navigation."
          ]
        },
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
          year: "2023",
          title: "Desarrollador Web: Cenas con Asesinato: La venganza del Tio Salazar",
          duties: [
            "Full design and development of two essential web pages for a cooperative murder mystery dinner game.",
            "Implementation of dynamic and responsive interfaces using React, alongside Supabase for database management and storage of key game documents.",
            "Enhancement of performance and accessibility to deliver a smooth and engaging user experience.",
            "Strict version control management with GitHub, facilitating collaboration and project tracking.",
            "Comprehensive oversight of deployment and ongoing maintenance to ensure stability and regular updates."
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
          title: "Bachelor's Degree in Physical Education Teaching",
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
      certificaciones: {
        cybersecurity: [
          {
            title: "Social Engineering: The Art of Deception",
            institution: "Udemy",
            duration: "4h",
            fileName: "seguridad_informática_-_ingeniería_social_el_arte_del_engaño.pdf"
          },
          {
            title: "Master in Metasploit. From 0 to Expert with Practice",
            institution: "Udemy",
            duration: "13.5h",
            fileName: "metasploit_master_udemy.pdf"
          }
        ],
        dataScience: [
          {
            title: "Data Analysis Fundamentals",
            institution: "Microsoft",
            duration: "8h",
            fileName: ""
          },
          {
            title: "Snowflake Course: Data Analysis and Visualization",
            institution: "Udemy",
            duration: "11h",
            fileName: "curso_snowflake_análisis_y_visualización_de_datos.pdf"
          },
          {
            title: "Data Analysis with Microsoft Excel and Power BI",
            institution: "Udemy",
            duration: "34h",
            fileName: "análisis_de_datos_con_microsoft_excel_y_power_bi.pdf"
          }
        ],
        database: [
          {
            title: "SQL Course: From Scratch for Beginners",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "curso_sql_desde_cero_para_principiantes.pdf"
          },
          {
            title: "SQL Course: JOINs, Subqueries, CTEs and Advanced Queries",
            institution: "Udemy",
            duration: "4h",
            fileName: "curso_sql_joins,_subconsultas,_ctes_y_consultas_avanzadas.pdf"
          },
          {
            title: "Databases with MySQL + ChatGPT and MongoDB",
            institution: "Udemy",
            duration: "12.5h",
            fileName: "bases_de_datos_con_mysql_+_chatgpt_y_mongodb.pdf"
          },
          {
            title: "SQL: Database Creation (From Zero to Professional)",
            institution: "Udemy",
            duration: "2h",
            fileName: "sql_creación_de_bases_de_datos.pdf"
          }
        ],
        python: [
          {
            title: "Python Course: From Scratch for Beginners",
            institution: "Udemy",
            duration: "7.5h",
            fileName: "PYTHON_8H"
          },
          {
            title: "Web Development with Python",
            institution: "IBM Skillsbuild",
            duration: "60h",
            fileName: "IBM_web_development_with_python.pdf"
          },
          {
            title: "Python: Advanced Analysis for Data Science",
            institution: "Udemy",
            duration: "5h",
            fileName: "PYTHON_DATA_SCIENCE.pdf"
          },
          {
            title: "Python Course: Data Analysis and Visualization",
            institution: "Udemy",
            duration: "12.5h",
            fileName: "PYTHON_VISUALIZACION_DATOS.pdf"
          },
          {
            title: "Python Course: Data Grouping and Aggregation with Pandas",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "PYTHON_AGREGACION_DATOS_PANDAS.pdf"
          },
          {
            title: "Python Course: Data Handling with Pandas",
            institution: "Udemy",
            duration: "5h",
            fileName: "PYTHON_DATOS_CON_PANDAS.pdf"
          },
          {
            title: "Python Course: Data Transformation and Cleaning",
            institution: "Udemy",
            duration: "8h",
            fileName: "PYTHON_TRANSFORMACION_LIMPIEZA_DATOS.pdf"
          },
          {
            title: "Python Course: Numerical Programming with NumPy",
            institution: "Udemy",
            duration: "2.5h",
            fileName: "PYTHON_NUMERICA_CON_NUMPHY.pdf"
          },
          {
            title: "Python 3 Plus: Python from Scratch + Data Analysis and Matplotlib",
            institution: "Udemy",
            duration: "14.5h",
            fileName: "PYTHON3+.pdf"
          },
          {
            title: "Python Course: Time Series with Pandas",
            institution: "Udemy",
            duration: "3.5h",
            fileName: "PYTHON_TEMPORALES_CON_PANDAS.pdf"
          },
          {
            title: "Python: Machine Learning",
            institution: "Udemy",
            duration: "8h",
            fileName: "PYTHON_MACHINE_LEARNING.pdf"
          },
          {
            title: "Python University - From Zero to Expert - Updated (+86 hrs)",
            institution: "Udemy",
            duration: "86.5h",
            fileName: "PYTHON_+90H.pdf"
          },
          {
            title: "Python: Create Your First Game with Pygame",
            institution: "Udemy",
            duration: "7.5h",
            fileName: "PYTHON_PYGAMES.pdf"
          }
        ],
        webDev: [
          {
            title: "User Experience Design",
            institution: "Google",
            duration: "260h",
            fileName: "ux_google.pdf"
          },
          {
            title: "Master in React: Learn ReactJS, Hooks, MERN, NodeJS, JWT+",
            institution: "Udemy",
            duration: "39.5h",
            fileName: ""
          },
          {
            title: "Complete Web Development with HTML5, CSS3, JS, AJAX, PHP and MySQL",
            institution: "Udemy",
            duration: "82.5h",
            fileName: "complete_web_development_with_html5,_css3,_js,_ajax,_php_and_mysql.pdf"
          },
          {
            title: "+100 Web Development Projects with HTML, CSS and JavaScript",
            institution: "Udemy",
            duration: "31.5h",
            fileName: "100_proyectos_de_desarrollo_web_con_html_css_y_javascript.pdf"
          },
          {
            title: "JavaScript University - From Zero to Expert",
            institution: "Udemy",
            duration: "44.5h",
            fileName: "universidad_javascript_-_de_cero_a_experto_javascript.pdf"
          }
        ],
        mobile: [
          {
            title: "Flutter - Mobile: From Zero to Expert",
            institution: "Udemy",
            duration: "50.5h",
            fileName: "FLUTTER_MOVIL.pdf"
          },
          {
            title: "Intermediate Flutter: Professional Designs and Animations",
            institution: "Udemy",
            duration: "15.5h",
            fileName: "FLUTTER_INTERMEDIO.pdf"
          },
          {
            title: "Advanced Flutter: Take Your Knowledge to the Next Level",
            institution: "Udemy",
            duration: "35h",
            fileName: "FLUTTER_AVANZADO.pdf"
          }
        ],
        general: [
          {
            title: "System Administrator Fundamentals",
            institution: "Microsoft",
            duration: "6h",
            fileName: ""
          },
          {
            title: "Software Development Fundamentals",
            institution: "Microsoft",
            duration: "8h",
            fileName: ""
          },
          {
            title: "Programming University - Python, Java, C and C++",
            institution: "Udemy",
            duration: "76h",
            fileName: "universidad _de_programación_python_java_c_c++.pdf"
          },
          {
            title: "Programming Logic University - Learn 7 Languages!",
            institution: "Udemy",
            duration: "55h",
            fileName: "universidad_de_logica_de_programacion_aprende_7_lenguajes.pdf"
          }
        ],
        java: [
          {
            title: "Java University - From Zero to Expert - Updated (+150 hrs)",
            institution: "Udemy",
            duration: "156h",
            fileName: "JAVA_155H.pdf"
          },
          {
            title: "Java Professional Course 2025 – From Zero to Master",
            institution: "Udemy",
            duration: "16h",
            fileName: "java-curso-profesional-Java-2025–de-cero-a-master.pdf"
          }
        ],
        cobol: [
          {
            title: "Bootcamp: Cobol Developer",
            institution: "University of Buenos Aires, UBA",
            duration: "220h",
            fileName: "CERTIFICACION_COBOL_UNIVERSIDAD_BUENOS_AIRES.pdf"
          },
          {
            title: "Complete COBOL Course: Start Programming Now!",
            institution: "Udemy",
            duration: "8h",
            fileName: "cobol_curso_completo_empieza_a_programar.pdf"
          },
          {
            title: "Complete COBOL and JCL Course",
            institution: "Udemy",
            duration: "25h",
            fileName: "curso_completo-cobol_jcl.pdf"
          },
          {
            title: "Mainframe: The Complete COBOL Course From Beginner to Expert",
            institution: "Udemy",
            duration: "9.5h",
            fileName: "MAINFRAME_COBOL.pdf"
          }
        ]
      },
      tecnologias: {
        lenguajes: {
          title: "Languages",
          items: ["Java", "Python", "Cobol", "Flutter"]
        },
        repositorio: {
          title: "Repository Control",
          items: ["GitHub"]
        },
        bbdd: {
          title: "Databases",
          items: ["SQL", "Supabase"]
        },
        analisis: {
          title: "Data Analysis",
          items: ["Power BI"]
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
  const categories = certificationCategories[language];

  // Función para obtener certificaciones filtradas
  const getFilteredCertifications = () => {
    if (selectedCategory === 'all') {
      // Combinar todas las certificaciones
      const allCerts = [];
      Object.keys(content.certificaciones).forEach(category => {
        allCerts.push(...content.certificaciones[category]);
      });
      return allCerts;
    }
    return content.certificaciones[selectedCategory] || [];
  };
  // Función para sumar las horas de las certificaciones filtradas
const getTotalHours = () => {
  return getFilteredCertifications()
    .reduce((total, cert) => {
      const hours = parseFloat(cert.duration.replace('h', '').trim()) || 0;
      return total + hours;
    }, 0);
};

  return (
    <div className='page curriculum-page'>
      <h1 className='heading'>{texts.miCurriculum}</h1>
      
      {/* Botón de descarga del currículum */}
      <div className="curriculum-download-section">
        <button 
          className="curriculum-download-btn"
          onClick={handleDownload}
          title={language === 'es' ? 'Descargar currículum en PDF' : 'Download curriculum PDF'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          {language === 'es' ? 'Descargar Currículum PDF' : 'Download CV PDF'}
        </button>
      </div>
      
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
        
        {/* Sección de Certificaciones con filtros y horas */}
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
          
          {/* Filtros de certificaciones */}
          <div className="certification-filters">
            <div className="filter-buttons-container">
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  className={`certification-filter-btn ${selectedCategory === key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="certification-count">
              {language === 'es' 
                ? `${getFilteredCertifications().length} certificación${getFilteredCertifications().length !== 1 ? 'es' : ''} • ${getTotalHours()} horas`
                : `${getFilteredCertifications().length} certification${getFilteredCertifications().length !== 1 ? 's' : ''} • ${getTotalHours()} hours`
              }
            </div>

          </div>
          
          
<div className="certifications-grid">
  {getFilteredCertifications().map((cert, index) => {
    // Determinar la categoría actual para la URL del PDF
    const currentCategory = selectedCategory === 'all' 
      ? Object.keys(content.certificaciones).find(cat => 
          content.certificaciones[cat].includes(cert)
        )
      : selectedCategory;
    
    return (
      <div className="certification-card" key={index}>
        <div className="cert-header">
          <div className="cert-info">
            <h3>{cert.title}</h3>
          </div>
          <div className="cert-duration">{cert.duration}</div>
        </div>
        <p>{cert.institution}</p>
        
        {/* Botón de descarga */}
        <button 
          className="cert-download-btn"
          onClick={() => handleCertificationDownload(cert, currentCategory)}
          title={language === 'es' ? 'Descargar certificación' : 'Download certification'}
        >
          <i className="fas fa-download"></i>
          {language === 'es' ? 'Descargar' : 'Download'}
        </button>
      </div>
    );
  })}
</div>

{/* Sección de Tecnologías con logos */}
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
      <div className="tech-pills-with-logos">
        {content.tecnologias.lenguajes.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img 
                src={techLogos[item]} 
                alt={`${item} logo`} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="tech-category">
      <h3>{content.tecnologias.bbdd.title}</h3>
      <div className="tech-pills-with-logos">
        {content.tecnologias.bbdd.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img 
                src={techLogos[item]} 
                alt={`${item} logo`} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="tech-category">
      <h3>{content.tecnologias.web.title}</h3>
      <div className="tech-pills-with-logos">
        {content.tecnologias.web.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img 
                src={techLogos[item]} 
                alt={`${item} logo`} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="tech-category">
      <h3>{content.tecnologias.frameworks.title}</h3>
      <div className="tech-pills-with-logos">
        {content.tecnologias.frameworks.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img 
                src={techLogos[item]} 
                alt={`${item} logo`} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-category">
      <h3>{content.tecnologias.analisis.title}</h3>
      <div className="tech-pills-with-logos">
        {content.tecnologias.analisis.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img
                src={techLogos[item]}
                alt={`${item} logo`}
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="tech-category">
      <h3>{content.tecnologias.repositorio.title}</h3>
      <div className="tech-pills-with-logos">
        {content.tecnologias.repositorio.items.map((item, index) => (
          <div className="tech-pill-logo" key={index}>
            {techLogos[item] && (
              <img 
                src={techLogos[item]} 
                alt={`${item} logo`} 
                className="tech-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            <span className="tech-name">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
  );
}
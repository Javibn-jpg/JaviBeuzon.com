import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { LanguageContext } from '../context/LanguageContext'

export const ListadoTrabajos = ({limite}) => {
  const { language } = useContext(LanguageContext);
  const [selectedFilter, setSelectedFilter] = useState('all');
  
  // Función para obtener el valor correcto según el idioma
  const getTranslatedValue = (value) => {
    if (!value) return '';
    
    if (typeof value === 'object' && (value.es || value.en)) {
      return value[language] || '';
    }
    
    return value;
  };

  // Filtros de tecnología
  const technologyFilters = {
    es: {
      all: 'Todos',
      cobol: 'Cobol',
      flutter: 'Flutter',
      java: 'Java',
      python: 'Python',
      react: 'React'
    },
    en: {
      all: 'All',
      cobol: 'Cobol',
      java: 'Java',
      flutter: 'Flutter',
      python: 'Python',
      react: 'React'
    }
  };

  const currentFilters = technologyFilters[language];

  // Función para filtrar trabajos por tecnología
  const filterWorksByTechnology = (works) => {
    if (selectedFilter === 'all') return works;
    
    return works.filter(trabajo => {
      // Buscar en las tecnologías del proyecto
      const tecnologias = trabajo.tecnologias?.toLowerCase() || '';
      const lenguaje = trabajo.lenguaje?.toLowerCase() || '';
      
      switch(selectedFilter) {
        case 'java':
          // Solo Java, excluir JavaScript
          return (tecnologias.includes('java') && !tecnologias.includes('javascript')) || 
                 lenguaje === 'java';
        case 'python':
          return tecnologias.includes('python') || lenguaje === 'python';
        case 'cobol':
          return tecnologias.includes('cobol') || lenguaje === 'cobol';
        case 'flutter':
          return tecnologias.includes('flutter') || lenguaje === 'flutter';
        case 'react':
          return tecnologias.includes('react') || lenguaje === 'react';
        default:
          return true;
      }
    });
  };

  // Aplicar filtro y límite
  const filteredWorks = filterWorksByTechnology(trabajos);
  const worksToShow = limite ? 
  [...filteredWorks]                   
    .sort(() => Math.random() - 0.5)   
    .slice(0, parseInt(limite)) :      
  filteredWorks;  

  return (
  <div className="works-container">
    {/* Filtros de tecnología*/}
    {!limite && (
      <div className="work-filters">
        <div className="filter-buttons">
          {Object.entries(currentFilters).map(([key, label]) => (
            <button
              key={key}
              className={`filter-btn ${selectedFilter === key ? 'active' : ''}`}
              onClick={() => setSelectedFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="results-count">
          {language === 'es' 
            ? `${worksToShow.length} proyecto${worksToShow.length !== 1 ? 's' : ''} encontrado${worksToShow.length !== 1 ? 's' : ''}`
            : `${worksToShow.length} project${worksToShow.length !== 1 ? 's' : ''} found`
          }
        </div>
      </div>
    )}

      <section className='works'>
        {worksToShow.length > 0 ? (
          worksToShow.map(trabajo => {
            return (
              <article key={trabajo.id} className="work-item">
                <Link to={"/proyecto/"+trabajo.id} className="work-item-link">
                  <div className="mask">
                    <img src={"/images/"+trabajo.id+".png"} alt={trabajo.nombre} />
                  </div>
                  <div className="work-info">
                    <span className="work-category">{getTranslatedValue(trabajo.categorias)}</span>
                    <h2 className="work-title">{trabajo.nombre}</h2>
                    <h3 className="work-tech">{trabajo.tecnologias}</h3>
                    
                    {/* Indicador de tecnología principal */}
                    {trabajo.lenguaje && (
                      <div className="tech-indicator">
                        <span className={`tech-badge ${trabajo.lenguaje.toLowerCase()}`}>
                          {trabajo.lenguaje}
                        </span>
                      </div>
                    )}
                    
                    {/* Botón de descarga si existe archivo */}
                    {trabajo.downloadFile && (
                      <div className="download-section">
                        <button 
                          className="download-work-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // Función para descargar archivo
                            const link = document.createElement('a');
                            link.href = `/docs/projects/${trabajo.downloadFile}`;
                            link.download = trabajo.downloadFile;
                            link.click();
                          }}
                        >
                          <i className="fas fa-download"></i>
                          {language === 'es' ? 'Descargar' : 'Download'}
                        </button>
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            );
          })
        ) : (
          <div className="no-results">
            <p>
              {language === 'es' 
                ? 'No se encontraron proyectos para esta tecnología.' 
                : 'No projects found for this technology.'}
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
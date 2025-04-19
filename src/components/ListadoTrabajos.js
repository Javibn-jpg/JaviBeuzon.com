import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'
import { LanguageContext } from '../context/LanguageContext'

export const ListadoTrabajos = ({limite}) => {
  const { language } = useContext(LanguageContext);
  
  // Función para obtener el valor correcto según el idioma
  const getTranslatedValue = (value) => {
    if (!value) return '';
    
    if (typeof value === 'object' && (value.es || value.en)) {
      return value[language] || '';
    }
    
    return value;
  };

  return (
      <section className='works'>
      {
        trabajos.slice(0, limite).map(trabajo => {
          return (
          <article key={trabajo.id} className="work-item">
            <div className="mask">
              <img src={"/images/"+trabajo.id+".png"} alt={trabajo.nombre} />
            </div>
            <span>{getTranslatedValue(trabajo.categorias)}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
          );
        })
      }
      </section>
  )
}
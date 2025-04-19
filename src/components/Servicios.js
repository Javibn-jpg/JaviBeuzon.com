import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

export const Servicios = () => {
  const { texts } = useContext(LanguageContext);
  
  return (
    <div className='page'>
      <h1 className='heading'>{texts.misServicios}</h1>

      <section className="servicios">

        <article className="servicio">
          <div className="servicio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h2>{texts.disenoWeb}</h2>
          <p>{texts.descripcionDiseno}</p>
        </article>

        <article className="servicio">
          <div className="servicio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <h2>{texts.programacionyDesarrollo}</h2>
          <p>{texts.descripcionProgramacionyDesarrollo}</p>
        </article>

        <article className="servicio">
          <div className="servicio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h2>{texts.diseñoyexperienciausuario}</h2>
          <p>{texts.descripcionPosicionamiento}</p>
        </article>

        <article className="servicio">
          <div className="servicio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <h2>{texts.mantenimientoySeguridad}</h2>
          <p>{texts.descripcionMantenimientoySeguridad}</p>
        </article>

        <article className="servicio">
          <div className="servicio-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <h2>{texts.optimizacion}</h2>
          <p>{texts.descripcionOptimizacion}</p>
        </article>

      </section>
    </div>
  )
}
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';
import { LanguageContext } from '../context/LanguageContext';

export const Inicio = () => {
  const { texts } = useContext(LanguageContext);
  
  return (
    <div className='home'>
        <h1>{texts.bienvenida} <strong>Javier Beuzón Neva</strong>, {texts.descripcion} <strong>{texts.programacion}</strong>.</h1>

        <section className="ultimos-proyectos">
          <h2 className='title'> {texts.explora} <Link to="/contacto">{texts.contactarme}</Link> {texts.paraInfo}</h2>
          <h3 className='heading'>{texts.trabajosProgramando}</h3>

          <ListadoTrabajos limite="4"/>
        </section>
    </div>
  )
}
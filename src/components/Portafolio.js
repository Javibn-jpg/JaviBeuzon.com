import React, { useContext } from 'react'
import { ListadoTrabajos } from './ListadoTrabajos'
import { LanguageContext } from '../context/LanguageContext';

export const Portafolio = () => {
  const { texts } = useContext(LanguageContext);
  
  return (
    <div className='page'>
      <h1 className='heading'>{texts.miPortafolio}</h1>

      <ListadoTrabajos />
      
    </div>
  )
}
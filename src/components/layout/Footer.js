import React, { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';

export const Footer = () => {
  const { texts } = useContext(LanguageContext);
  
  return (
    <footer className="footer">
        Portafolio Javier Beuzón Neva &copy; 2025. {texts.derechos}.
    </footer>
  )
}
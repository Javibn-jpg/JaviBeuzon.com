import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

export const HeaderNav = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { language, texts, toggleLanguage } = useContext(LanguageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú cuando cambia el tamaño de la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // Evita el scroll cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
        <div className="logo">
            <span>J</span>
            <h3 className="logo-name" title="Javier Beuzón Neva">Javier Beuzón Neva</h3>
        </div>

        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
            <ul className={menuOpen ? 'active' : ''}>
                <li>
                    <NavLink 
                      to="/inicio" 
                      className={({isActive}) => isActive ? "active" : ""}
                      onClick={handleLinkClick}
                    >
                      {texts.inicio}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to="/portafolio" 
                      className={({isActive}) => isActive ? "active" : ""}
                      onClick={handleLinkClick}
                    >
                      {texts.portafolio}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to="/servicios" 
                      className={({isActive}) => isActive ? "active" : ""}
                      onClick={handleLinkClick}
                    >
                      {texts.servicios}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to="/curriculum" 
                      className={({isActive}) => isActive ? "active" : ""}
                      onClick={handleLinkClick}
                    >
                      {texts.curriculum}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to="/contacto" 
                      className={({isActive}) => isActive ? "active" : ""}
                      onClick={handleLinkClick}
                    >
                      {texts.contacto}
                    </NavLink>
                </li>
                <li className="theme-toggle">
                    <button onClick={toggleLanguage} className="theme-btn lang-btn" title="Cambiar idioma">
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </li>
                <li className="theme-toggle">
                    <button onClick={toggleTheme} className="theme-btn">
                        {darkMode ? (
                            <i className="fas fa-sun" title="Cambiar a modo claro"></i>
                        ) : (
                            <i className="fas fa-moon" title="Cambiar a modo oscuro"></i>
                        )}
                    </button>
                </li>
            </ul>
        </nav>

        {/* Overlay para cerrar el menú al hacer clic fuera */}
        <div 
          className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(false)}
        ></div>
    </header>
  )
}
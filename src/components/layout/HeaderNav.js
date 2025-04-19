import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { LanguageContext } from '../../context/LanguageContext';

export const HeaderNav = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { language, texts, toggleLanguage } = useContext(LanguageContext);
  
  return (
    <header className="header">
        <div className="logo">
            <span>J</span>
            <h3>Javier Beuzón Neva</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>{texts.inicio}</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>{texts.portafolio}</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>{texts.servicios}</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>{texts.curriculum}</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>{texts.contacto}</NavLink>
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
    </header>
  )
}
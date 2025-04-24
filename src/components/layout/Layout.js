import React, { useContext } from 'react';
import { HeaderNav } from './HeaderNav';
import { Footer } from './Footer';
import { ThemeContext } from '../../context/ThemeContext';

export const Layout = (props) => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={`layout-container ${darkMode ? 'dark-mode' : ''}`}>
      <HeaderNav />
      <main className="layout">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
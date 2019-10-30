import React, { useState } from 'react';
import useDarkMode from './hooks/useDarkMode';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={isDarkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

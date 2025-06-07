import React from 'react';
import './Header.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-overlay">
        <nav className="navbar-content">
          <a className="nav-button" href='/'>Home</a>
          <a className="nav-button" href='/character'>Personajes</a>
        </nav>
      </div>
    </header>
  );
};
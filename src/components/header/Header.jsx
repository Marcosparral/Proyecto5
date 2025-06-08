import React from 'react';
import './Header.css';

export const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-overlay">
        <nav className="navbar-content">
          <a className="nav-button" href='/'>Home</a>
        </nav>
      </div>
    </header>
  );
};
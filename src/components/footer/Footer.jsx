import React from 'react';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Rick and Morty Fan App. Todos los derechos reservados.</p>
    </footer>
  );
};
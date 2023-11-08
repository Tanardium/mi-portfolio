import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Contact from './Contact'; // Importa el componente de Contacto



function Footer() {
    return (
      <footer className="footer">
        {/* ... Otro contenido del footer ... */}
        <Contact /> {/* Agrega el componente de Contacto */}
      </footer>
    );
  }

export default Footer;

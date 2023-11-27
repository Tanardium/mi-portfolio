import React from 'react';
import './styles/NavBar.css'
import { Link } from 'react-router-dom';

export default function NavBar(){
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/projects">proyectos</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};


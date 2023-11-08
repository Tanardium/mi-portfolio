import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Mi Portfolio</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Acerca de Mí</Link>
          </li>
          <li className="nav-item">
            <Link to="/creations" className="nav-link">Mis Creaciones</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" className="nav-link">Favoritos</Link>
          </li>
          <li className="nav-item">
            <Link to="/additional" className="nav-link">Página Adicional</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

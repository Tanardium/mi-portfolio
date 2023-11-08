import React from "react";
import { Link, Outlet } from "react-router-dom";

//Bootsrap
import { Navbar } from 'react-bootstrap';
import Footer from './Footer'

//Other

const Layout = () => {
    return (
    <React.Fragment>
        <Navbar className="bg-body-tertiary">
          <Navbar.Brand href="/">
            <h1>Home</h1>
            </Navbar.Brand>
          <Navbar.Brand href="/About">
            <h2>Info</h2>
          </Navbar.Brand>
          <Navbar.Brand href="/Favorites">
            <h2>Favoritos</h2>
          </Navbar.Brand>
          <Navbar.Brand href="/Creations">
            <h2>Mis proyectos</h2>
          </Navbar.Brand>
      </Navbar>
        <Outlet />
        <Footer/>

    </React.Fragment>
    )
}

export default Layout
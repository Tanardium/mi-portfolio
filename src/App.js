import React from 'react';
import { BrowserRouter, Routes, Route, useState } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Creations from './components/Creations';
import Layout from './components/Layout';
import Favorites from './components/Favorites';
import 'bootstrap/dist/css/bootstrap.css';
import creaciones from './data/creaciones.json'; // Importa el archivo JSON



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/Creations" element={<Creations />}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Favorites" element={<Favorites/>}></Route>

    </Route>
  </Routes>
</BrowserRouter>

  );
}

export default App;

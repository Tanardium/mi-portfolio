import React, { useState, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsModal from '../components/DetailsModal';
import '../components/styles/Item.css';
import { FavoritosContext } from '../context/FavoritosContext';
import Item from '../components/Item';

export default function Favorites() {
  const {favoritos} = React.useContext(FavoritosContext);
  console.log (favoritos);

    return (
      <div>
        <h2 className='text'>Favorites page</h2>
        <p className='text'>Here are the favorite projects</p>
        <section className='lista-items'>
          {favoritos.map((proyecto, index) => (
            <Item key={index} creacion={proyecto} />
          ))}
        </section>
      </div>
    );
  }
import React, { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';



export const FavoritosContext = React.createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")) || []);
  const [email, setEmail] = useState('');

  useEffect(() => localStorage.setItem("favoritos", JSON.stringify(favoritos)), [favoritos]);

  return (
    <FavoritosContext.Provider value={{ favoritos, setFavoritos, email, setEmail }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;

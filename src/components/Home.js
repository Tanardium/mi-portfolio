import React, {useState} from 'react';
import { Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const creacionesDestacadas = [
    {
      id: 1,
      titulo: 'Proyecto Destacado 1',
      descripcion: 'Descripción del proyecto destacado 1',
      // ... Otras propiedades de la creación
    },
    // Agrega las otras creaciones destacadas
  ];
  
  function Home() {
    const [favoritos, setFavoritos] = useState([]);
  
    // Función para agregar una creación a favoritos
    const agregarFavorito = (creacion) => {
      setFavoritos([...favoritos, creacion]);
    };
  
    return (
      <div className="home">
        <h2>Creaciones Destacadas</h2>
        <div className="creaciones-destacadas">
          {creacionesDestacadas.map((creacion) => (
            <div key={creacion.id}>
              <h3>{creacion.titulo}</h3>
              <p>{creacion.descripcion}</p>
              {/* Agregar a favoritos */}
              <button onClick={() => agregarFavorito(creacion)}>Agregar a Favoritos</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Home;

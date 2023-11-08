import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import creacionesData from '../data/creaciones.json'; // Importa el archivo JSON
import creaciones from '../data/creaciones.json'; // Importa el archivo JSON
import CreacionDetalle from '../components/CreacionDetalle';




function Creations({ creaciones, elementosPorPagina }) {
    const [paginaActual, setPaginaActual] = useState(1);
    const [favoritos, setFavoritos] = useState([]);
    const [creacionSeleccionada, setCreacionSeleccionada] = useState(null); // Agrega esta línea
  
    const agregarFavorito = (creacion) => {
      setFavoritos([...favoritos, creacion]);
    };
  
    const quitarFavorito = (creacion) => {
      const nuevosFavoritos = favoritos.filter((fav) => fav.id !== creacion.id);
      setFavoritos(nuevosFavoritos);
    };
  
    // Calcular el índice de inicio y fin para la paginación
    const indiceInicio = (paginaActual - 1) * elementosPorPagina;
    const indiceFin = paginaActual * elementosPorPagina;
  
    const creacionesPagina = creaciones.slice(indiceInicio, indiceFin);
  
    return (
      <div className="creations">
        {/* ... Resto del contenido de la lista de creaciones */}
        <div className="creaciones-list">
          {creacionesPagina.map((creacion) => (
            <div key={creacion.id}>
              <h3>{creacion.titulo}</h3>
              <p>{creacion.descripcion}</p>
              <button onClick={() => setCreacionSeleccionada(creacion)}>Ver Detalle</button>
            </div>
          ))}
        </div>
        {creacionSeleccionada && (
          <CreacionDetalle
            creacion={creacionSeleccionada}
            enFavoritos={favoritos.some((fav) => fav.id === creacionSeleccionada.id)}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        )}
      </div>
    );
  }
  
export default Creations;

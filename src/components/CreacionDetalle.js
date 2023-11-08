import React, { useState } from 'react';

function CreacionDetalle({ creacion, enFavoritos, agregarFavorito, quitarFavorito }) {
  return (
    <div className="creacion-detalle">
      <h2>{creacion.titulo}</h2>
      <p>{creacion.descripcion}</p>
      {/* Mostrar más detalles de la creación */}
      <button onClick={() => (enFavoritos ? quitarFavorito(creacion) : agregarFavorito(creacion))}>
        {enFavoritos ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
}

export default CreacionDetalle;

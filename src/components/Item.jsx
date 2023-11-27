import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DetailsModal from '../components/DetailsModal';
import '../components/styles/Item.css';
import { FavoritosContext } from '../context/FavoritosContext';

function Item({ creacion }) {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const { favoritos, setFavoritos, email, setEmail } = React.useContext(FavoritosContext);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToFavorites = () => {
    if (emailInput.trim() === '') {
      alert('Por favor, ingrese su correo electrónico.');
      return;
    }

    setFavoritos([...favoritos, creacion]);
    setEmail(emailInput);
    setIsFavorite(true);
    alert('Proyecto agregado a favoritos. Correo electrónico: ' + emailInput);
  };

  if (isFavorite) {
    return null;
  }

  return (
    <div className='card-container'>
      <Card style={{ borderColor: 'rgb(243, 189, 53)', marginBottom: '20px' }}>
        <Card.Img variant="top" src={creacion.img} />
        <Card.Body>
          <Card.Title style={{ fontWeight: 'bolder' }}>{creacion.titulo}</Card.Title>
          <Card.Text>{creacion.descripcion}</Card.Text>
          <Button variant="primary" target='_blank' href={creacion.url}>
            View on GitHub
          </Button>
          <Button variant="primary" onClick={handleShowModal} style={{ marginLeft: '10px' }}>
            Details
          </Button>
          <div className="email-form" style={{ marginTop: '10px' }}>
            <label>Ingrese su correo electrónico:</label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <Button variant="primary" onClick={handleAddToFavorites} style={{ marginTop: '10px' }}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
      <DetailsModal showModal={showModal} handleCloseModal={handleCloseModal} description={creacion.descripcion} />
    </div>
  );
}

export default Item;

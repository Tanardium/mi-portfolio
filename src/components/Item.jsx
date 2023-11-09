import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/Item.css';

function Item({ creacion}) {
  return (
    <div className='card-container'>
      <Card style={{ borderColor: 'rgb(243, 189, 53)' }}>
        <div className="icon-container" style={{ zIndex: '0' }}>
          <button style={{ border: 'none', color: 'HotPink', background: 'none' }}></button>
        </div>
        <Card.Img className='card-image' src={creacion.img} />
        <Card.Body className='card-body' style={{}}>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', fontWeight: 'bolder' }}>{creacion.titulo}</Card.Title>
          <div className='botones'>
            <Button style={{ backgroundColor: 'black', borderColor: 'black' }} className='card-button' variant="primary" target='blank' href= {creacion.url}>View on GitHub</Button>
            <Button style={{ backgroundColor: 'black', borderColor: 'black' }} className='card-button' variant="primary">Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;

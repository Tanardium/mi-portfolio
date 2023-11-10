import React, { useEffect } from 'react';
import './styles/Home.css';

export default function Home() {
  useEffect(() => {
    const textElement = document.getElementById('texto');
    const text = textElement.textContent;
    textElement.textContent = '';

    let index = 0;
    const typingSpeed = 100; // Velocidad de escritura en milisegundos

    function typeText() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();
  }, []);

  return (
    <>
      <div className='texto-animado'>
        <h1 className="title" id='texto'>Este es el portfolio de Santino Cassieri</h1>
        <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="./public/images/fedeee.jpg" alt="Imagen de portfolio" style={{ maxWidth: '50%', height: 'auto', margin: '2rem' }} />
        </div>
        <h3 style={{ color: 'aliceblue', paddingBottom: '3rem', textAlign: 'center' }}>Este es mi portfolio, espero que les guste</h3>
      </div>
    </>
  );
}

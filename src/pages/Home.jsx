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
        <h1 className="title" id='texto'>This is the portfolio of TAno</h1>
        <h3 style={{color: 'aliceblue', paddingBottom: '3rem'}}>texto</h3>
      </div>
    </>
  );
}

import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h3>Contacto</h3>
      <p>Si deseas ponerte en contacto conmigo, no dudes en escribirme a la siguiente dirección de correo electrónico:</p>
      <p><a href="mailto:tucorreo@example.com">santinocassieri@gmail.com</a></p>
      <p>También puedes seguirme en mis redes sociales:</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn </a>
        <a href="https://twitter.com/FcBarcelona" target="_blank" rel="noopener noreferrer">Twitter </a>
        <a href="https://github.com/Tanardium" target="_blank" rel="noopener noreferrer">GitHub </a>
      </div>
    </div>
  );
}

export default Contact;

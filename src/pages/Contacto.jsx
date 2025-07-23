import React from 'react';
import './Contacto.css';
import logo from '../assets/logo-nhiyu.webp'; // Ajusta el path según tu estructura

const Contacto = () => {
  return (
    <div className="contacto-container">
      <div className="contacto-caja">
        <h1 className="contacto-titulo">Contáctanos</h1>
        <p className="contacto-subtitulo">¿Tienes dudas, pedidos o sugerencias? ¡Estamos para ayudarte!</p>

        <div className="contacto-formulario">
          <form action="https://formspree.io/f/mqabojod" method="POST">
            {/* CAMPO OCULTO para evitar captcha de Formspree */}
            <input type="hidden" name="_captcha" value="false" />

            {/* CAMPO OCULTO para redirigir después del envío */}
            <input type="hidden" name="_next" value="http://localhost:5173/gracias" />

            <input type="text" name="name" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="message" placeholder="Escribe tu mensaje aquí..." required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>

        <div className="contacto-info">
          <h2>También puedes escribirnos:</h2>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/message/PSTT4KMKVZCHG1" target="_blank" rel="noreferrer">Enviar mensaje</a></p>
          <p><strong>Correo:</strong> nhiyuhuatulco@gmail.com</p>
          <p><strong>Ubicación:</strong> Bahías de Huatulco, Oaxaca</p>
        </div>

        <img className="logo-contacto" src={logo} alt="Logo Nhiyú" />
      </div>
    </div>
  );
};

export default Contacto;

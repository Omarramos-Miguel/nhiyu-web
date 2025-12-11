import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Carrusel
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen1.png';
import imagen3 from '../assets/imagen1.png';

// Servicios
import impresion from '../assets/impresion.png';
import grabado from '../assets/grabado.png';
import souvenirs from '../assets/souvenirs.png';

// Otros
import logo from '../assets/logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';

const imagenes = [imagen1, imagen2, imagen3];

function Home() {
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef(null);

  const iniciarCarrusel = () => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual(prev => (prev + 1) % imagenes.length);
    }, 5000);
  };

  useEffect(() => {
    iniciarCarrusel();
    return () => clearInterval(intervaloRef.current);
  }, []);

  const irAImagen = (index) => {
    setIndiceActual(index);
    clearInterval(intervaloRef.current);
    iniciarCarrusel();
  };

  return (
    <div>
      {/* WhatsApp superior */}
      <div className="whatsapp-contacto">
        <a 
          href="https://wa.link/3ga1vw"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
          Contáctanos por WhatsApp
        </a>
      </div>

      {/* Carrusel */}
      <div className="envoltura-carrusel">
        <div className="carrusel-contenedor">
          <div
            className="carrusel-slider"
            style={{ transform: `translateX(-${indiceActual * 100}%)` }}
          >
            {imagenes.map((img, i) => (
              <div key={i} className="slide-item">
                {i === 0 ? (
                  <Link to="/catalogo">
                    <img src={img} alt={`Imagen ${i + 1}`} className="carrusel-img" />
                  </Link>
                ) : (
                  <img src={img} alt={`Imagen ${i + 1}`} className="carrusel-img" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="indicadores">
          {imagenes.map((_, index) => (
            <span
              key={index}
              className={indiceActual === index ? 'punto activo' : 'punto'}
              onClick={() => irAImagen(index)}
            />
          ))}
        </div>

        {/* Título */}
        <h2 className="titulo-intermedio">Nuestros servicios</h2>

          <div className="servicios-contenedor">
            <div className="servicio-item">
              <img src={impresion} alt="Servicio de impresión" className="servicio-icono" />
              <h3 className="servicio-titulo">Impresión 3D</h3>
              <p className="servicio-descripcion">
                Piezas personalizadas, prototipos y productos decorativos.
              </p>
            </div>
          
            <div className="servicio-item borde-centro">
              <img src={grabado} alt="Servicio de grabado" className="servicio-icono" />
              <h3 className="servicio-titulo">Grabado láser</h3>
              <p className="servicio-descripcion">
                Personalización en madera, cuero, acero y más.
              </p>
            </div>
          
            <div className="servicio-item">
              <img src={souvenirs} alt="Souvenirs personalizados" className="servicio-icono" />
              <h3 className="servicio-titulo">Souvenirs exclusivos</h3>
              <p className="servicio-descripcion">
                Diseños propios listos para regalar o coleccionar.
              </p>
            </div>
          </div>

      </div>
  );
}

export default Home;


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen1.png';
import imagen3 from '../assets/imagen1.png';
import logo from '../assets/logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';

const imagenes = [imagen1, imagen2, imagen3];

function Home() {
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef(null);

  const iniciarCarrusel = () => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % imagenes.length);
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
      {/* Cuadro WhatsApp arriba */}
      <div className="whatsapp-contacto">
        <a 
          href="https://wa.link/3ga1vw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-link"
          aria-label="Contáctanos por WhatsApp"
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
            {imagenes.map((imagen, i) => {
              const img = (
                <img
                  src={imagen}
                  alt={`Imagen ${i + 1}`}
                  className="carrusel-img"
                />
              );
              return (
                <div key={i} className="slide-item">
                  {i === 0 ? <Link to="/catalogo">{img}</Link> : img}
                </div>
              );
            })}
          </div>
        </div>

        <div className="indicadores">
          {imagenes.map((_, index) => (
            <span
              key={index}
              className={indiceActual === index ? 'punto activo' : 'punto'}
              onClick={() => irAImagen(index)}
            />
          ))}
        </div>
        <h2 className="titulo-intermedio">Nuestros servicios</h2>
        {/* === Sección Servicios === */}
            <div className="servicios-contenedor">
              <div className="servicio-item">
                <img src="/assets/icons/impresion.png" alt="Impresión 3D" className="servicio-icono" />
                <h3 className="servicio-titulo">Impresión 3D</h3>
                <p className="servicio-descripcion">
                  Piezas personalizadas, prototipos y productos decorativos.
                </p>
              </div>
            
              <div className="servicio-item borde-centro">
                <img src="/assets/icons/grabado.png" alt="Grabado láser" className="servicio-icono" />
                <h3 className="servicio-titulo">Grabado láser</h3>
                <p className="servicio-descripcion">
                  Personalización en madera, cuero, acero y más.
                </p>
              </div>
            
              <div className="servicio-item">
                <img src="/assets/icons/souvenirs.png" alt="Souvenirs exclusivos" className="servicio-icono" />
                <h3 className="servicio-titulo">Souvenirs exclusivos</h3>
                <p className="servicio-descripcion">
                  Diseños propios listos para regalar o coleccionar.
                </p>
              </div>
            </div>

      </div>

      {/* Sección Nosotros */}
      <div className="nosotros-contenedor">
        <img src={logo} alt="Logo Nhiyu" className="nosotros-logo" />
        <h2 className="nosotros-titulo">Sobre Nosotros</h2>
        <p className="nosotros-texto">
          <strong>Nhiyú</strong> nace en el corazón de <strong>Bahías de Huatulco</strong>, inspirado en el arte, la naturaleza y el cariño por los detalles.
          Somos un pequeño taller dedicado a crear <strong>regalos personalizados y artesanales</strong>, pensados para momentos especiales, celebraciones o simplemente para regalar con el corazón.
        </p>
        <p className="nosotros-texto">
          Cada pieza que hacemos —ya sea una caja de MDF, un llavero, una vela o un imán— lleva un pedacito de la costa oaxaqueña, un diseño único y el amor con el que trabajamos cada pedido.
        </p>
        <p className="nosotros-texto">
          <strong>Creemos en el valor de lo hecho a mano, de lo local, de lo que cuenta una historia.</strong>
          En Nhiyu personalizamos tus ideas, cuidamos cada detalle y entregamos con amor en todo <strong>Bahías de Huatulco</strong>.
        </p>
      </div>

      {/* Cuadro de significado de Nhiyú */}
      <div className="cuadro-significado">
        <h3 className="cuadro-titulo">¿Qué significa Nhiyú?</h3>
        <p className="cuadro-texto">
          Nhiyú, de la unión de <strong>Nhi</strong> ("mar") y <strong>Yoo</strong> ("hogar"), nace como un concepto que combina la inmensidad del océano con la calidez de un refugio.
        </p>
        <p className="cuadro-texto">
          Lleva contigo <strong>“recuerdos con alma de mar”</strong>.
        </p>
      </div>
    </div>
  );
}

export default Home;

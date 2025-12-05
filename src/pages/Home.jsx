import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Carrusel
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';

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

        {/* Servicios */}
        <div className="servicios-contenedor">
          <div className="servicio-item">
            <img src={impresion} alt="Impresión 3D" />
            <h3 className="servicio-titulo">Impresión 3D</h3>
            <p className="servicio-descripcion">
              Piezas personalizadas, prototipos y productos decorativos.
            </p>
          </div>

          <div className="servicio-item borde-centro">
            <img src={grabado} alt="Grabado láser" />
            <h3 className="servicio-titulo">Grabado láser</h3>
            <p className="servicio-descripcion">
              Personalización en madera, cuero, acero y más.
            </p>
          </div>

          <div className="servicio-item">
            <img src={souvenirs} alt="Souvenirs personalizados" />
            <h3 className="servicio-titulo">Souvenirs exclusivos</h3>
            <p className="servicio-descripcion">
              Diseños propios listos para regalar o coleccionar.
            </p>
          </div>
        </div>
      </div>

      {/* Nosotros */}
      <div className="nosotros-contenedor">
        <img src={logo} alt="Logo Nhiyú" className="nosotros-logo" />
        <h2 className="nosotros-titulo">Sobre Nosotros</h2>

        <p className="nosotros-texto">
          <strong>Nhiyú</strong> nace en el corazón de <strong>Bahías de Huatulco</strong>,
          inspirado en el arte, la naturaleza y el cariño por los detalles.
        </p>

        <p className="nosotros-texto">
          Creamos regalos personalizados, llaveros, cajas de MDF y detalles únicos,
          siempre cuidando cada paso del proceso.
        </p>

        <p className="nosotros-texto">
          <strong>Creemos en el valor de lo hecho con dedicación y en las historias que cada pieza puede contar.</strong>
        </p>
      </div>

      {/* Significado */}
      <div className="cuadro-significado">
        <h3 className="cuadro-titulo">¿Qué significa Nhiyú?</h3>
        <p className="cuadro-texto">
          <strong>Nhi</strong> significa “mar”, y <strong>Yoo</strong> significa “hogar”.
        </p>
        <p className="cuadro-texto">
          Llévate contigo “recuerdos con alma de mar”.
        </p>
      </div>
    </div>
  );
}

export default Home;


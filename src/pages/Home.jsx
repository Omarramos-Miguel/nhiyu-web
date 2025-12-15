import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

/* ============================= */
/* 🖼️ CARRUSEL */
/* ============================= */
import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen1.png';
import imagen3 from '../assets/imagen1.png';

/* ============================= */
/* 🧩 SERVICIOS */
/* ============================= */
import impresion from '../assets/impresion.png';
import grabado from '../assets/grabado.png';
import souvenirs from '../assets/souvenirs.png';

/* ============================= */
/* ✨ PERSONALIZADO */
/* ============================= */
import personalizadoImg from '../assets/personalizado.png';

/* ============================= */
/* 🟢 WHATSAPP */
/* ============================= */
import whatsappLogo from '../assets/whatsapp-logo.png';

const imagenes = [imagen1, imagen2, imagen3];

function Home({ productos }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef(null);

  const productosDestacados = productos.filter(p =>
    [1, 2, 6].includes(p.id)
  );

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

      {/* 🟢 WHATSAPP */}
      <div className="whatsapp-contacto">
        <a
          href="https://wa.me/message/PSTT4KMKVZCHG1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
          Contáctanos por WhatsApp
        </a>
      </div>

      {/* 🖼️ CARRUSEL */}
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

        <div className="indicadores">
          {imagenes.map((_, index) => (
            <span
              key={index}
              className={indiceActual === index ? 'punto activo' : 'punto'}
              onClick={() => irAImagen(index)}
            />
          ))}
        </div>
      </div>

      {/* 🧩 SERVICIOS */}
      <section className="servicios-seccion">
        <h2 className="titulo-intermedio">Nuestros servicios</h2>

        <div className="servicios-wrapper">
          <div className="servicios-contenedor">
            <div className="servicio-item">
              <img src={impresion} alt="Impresión 3D" className="servicio-icono" />
              <div className="servicio-texto">
                <h3 className="servicio-titulo">Impresión 3D</h3>
                <p className="servicio-descripcion">
                  Piezas personalizadas, prototipos y productos decorativos.
                </p>
              </div>
            </div>

            <div className="servicio-item">
              <img src={grabado} alt="Grabado láser" className="servicio-icono" />
              <div className="servicio-texto">
                <h3 className="servicio-titulo">Grabado láser</h3>
                <p className="servicio-descripcion">
                  Personalización en madera, cuero, acero y más.
                </p>
              </div>
            </div>

            <div className="servicio-item">
              <img src={souvenirs} alt="Souvenirs exclusivos" className="servicio-icono" />
              <div className="servicio-texto">
                <h3 className="servicio-titulo">Souvenirs exclusivos</h3>
                <p className="servicio-descripcion">
                  Diseños propios listos para regalar o coleccionar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ DESTACADOS */}
      <section className="destacados">
        <div className="destacados-header">
          <h2>Destacados</h2>
          <Link to="/catalogo" className="ver-catalogo">
            Ver catálogo »
          </Link>
        </div>

        <div className="productos-grid">
          {productosDestacados.map(producto => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>

      {/* ✨ PERSONALIZA */}
      <section className="personaliza-seccion">
        <h2 className="personaliza-titulo">Personaliza a tu manera</h2>

        <div className="personaliza-contenedor">
          <div className="personaliza-imagen">
            <img src={personalizadoImg} alt="Personalizado" />
          </div>

          <div className="personaliza-texto">
            <h3>¿Tienes un negocio o proyecto en mente?</h3>

            <p>
              Convierte tus ideas en algo real y completamente único. Diseñamos
              piezas personalizadas para regalos, marcas y proyectos especiales.
            </p>

            <p>
              Impresión 3D, grabado láser, nombres, logotipos, souvenirs y más,
              creados a tu medida.
            </p>

            <Link to="/contacto" className="btn-personaliza">
              Ir a contacto
            </Link>
          </div>
        </div>
      </section>

      {/* 🟩 SOBRE NOSOTROS */}
      <section className="sobre-seccion">
        <div className="sobre-card">
          <h2 className="sobre-titulo">Sobre nosotros</h2>

          <p>
  Nhiyu es un estudio de impresión 3D y grabado láser ubicado en Bahías de
  Huatulco, Oaxaca. Nuestra inspiración nace del mar, la naturaleza y el
  significado de crear piezas con identidad.
</p>

<p>
  Diseñamos recuerdos personalizados con precisión y dedicación, cuidando cada
  detalle para transformar ideas en objetos únicos que conectan con las
  personas y su historia.
</p>



          {/* 🔥 wrapper SOLO para centrar el botón */}
          <div className="sobre-btn-wrapper">
            <Link to="/sobre-nosotros" className="btn-sobre">
              Ver más
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;

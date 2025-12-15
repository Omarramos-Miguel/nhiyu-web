import React from 'react';
import { Link } from 'react-router-dom';
import './SobreNosotros.css';

function SobreNosotros() {
  return (
    <main className="sobre-page">

      {/* HERO */}
      <section className="sobre-hero">
        <h1>Sobre Nhiyu</h1>
        <p>
          Creamos piezas personalizadas que conectan ideas, emociones y
          momentos especiales.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="sobre-contenido">

        <div className="sobre-bloque">
          <h2>Nuestra historia</h2>
          <p>
            Nhiyu nace en Bahías de Huatulco, Oaxaca, inspirado en la relación
            entre el mar, la naturaleza y el significado de crear objetos con
            identidad. Desde el inicio, nuestro objetivo ha sido transformar
            ideas en piezas únicas que acompañen momentos importantes.
          </p>

          <p>
            A través de tecnologías como la impresión 3D y el grabado láser,
            damos forma a recuerdos personalizados con precisión, cuidado y
            atención al detalle.
          </p>
        </div>

        <div className="sobre-bloque">
          <h2>Qué hacemos</h2>
          <p>
            Diseñamos y producimos piezas personalizadas para regalos, marcas y
            proyectos especiales. Cada objeto es creado a partir de una idea,
            adaptándose a las necesidades de cada cliente.
          </p>

          <p>
            Trabajamos con impresión 3D y grabado láser para desarrollar desde
            souvenirs y objetos decorativos hasta piezas funcionales, nombres,
            logotipos y diseños a medida.
          </p>
        </div>

        <div className="sobre-bloque">
          <h2>Nuestra esencia</h2>
          <p>
            En Nhiyu creemos en el valor de los detalles, en la importancia de
            escuchar cada idea y en crear piezas que transmitan significado.
            Nuestro trabajo busca equilibrar precisión técnica con cercanía y
            calidez.
          </p>

          <p>
            Cada proyecto refleja nuestro compromiso con la calidad, la
            autenticidad y una conexión profunda con nuestro entorno.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="sobre-cta">
        <h2>¿Tienes una idea en mente?</h2>
        <p>
          Cuéntanos tu proyecto y trabajemos juntos para hacerlo realidad.
        </p>

        <Link to="/contacto" className="btn-sobre-cta">
          Contáctanos
        </Link>
      </section>

    </main>
  );
}

export default SobreNosotros;

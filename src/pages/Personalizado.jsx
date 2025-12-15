import React from 'react';
import { Link } from 'react-router-dom';
import './Personalizado.css';

function Personalizado() {
  return (
    <main className="personalizado-page">

      {/* HERO */}
      <section className="personalizado-hero">
        <h1>Personaliza a tu manera</h1>
        <p>
          Transformamos tus ideas en piezas únicas creadas especialmente para ti.
        </p>
      </section>

      {/* QUÉ HACEMOS */}
      <section className="personalizado-bloque">
        <h2>¿Qué puedes personalizar?</h2>

        <p>
          En Nhiyu diseñamos piezas personalizadas desde cero o a partir de una
          idea existente. Cada proyecto se adapta a tus necesidades, ya sea un
          regalo, un recuerdo especial o una pieza para tu marca.
        </p>

        <ul className="personalizado-lista">
          <li>Regalos personalizados</li>
          <li>Souvenirs y recuerdos</li>
          <li>Nombres y textos grabados</li>
          <li>Logotipos y piezas para marcas</li>
          <li>Objetos decorativos o funcionales</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="personalizado-bloque bloque-suave">
        <h2>¿Cómo es el proceso?</h2>

        <ol className="personalizado-proceso">
          <li>
            <strong>Cuéntanos tu idea.</strong>  
            Escríbenos qué tienes en mente, para qué lo necesitas y si tienes
            referencias.
          </li>

          <li>
            <strong>Diseño y propuesta.</strong>  
            Analizamos tu idea y te proponemos un diseño acorde a tus
            necesidades.
          </li>

          <li>
            <strong>Producción.</strong>  
            Una vez aprobado el diseño, comenzamos la creación de tu pieza.
          </li>

          <li>
            <strong>Entrega.</strong>  
            Te avisamos cuando tu pedido esté listo para entrega o envío.
          </li>
        </ol>
      </section>

      {/* PARA QUIÉN */}
      <section className="personalizado-bloque">
        <h2>¿Para quién es?</h2>

        <p>
          Nuestro servicio de personalizado está pensado tanto para personas
          que buscan un detalle especial, como para marcas o negocios que
          desean piezas únicas con identidad propia.
        </p>
      </section>

      {/* CTA */}
      <section className="personalizado-cta">
        <h2>¿Listo para crear algo único?</h2>
        <p>
          Cuéntanos tu idea y trabajemos juntos para hacerla realidad.
        </p>

        <Link to="/contacto" className="btn-personalizado">
          Ir a contacto
        </Link>
      </section>

    </main>
  );
}

export default Personalizado;

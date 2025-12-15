import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './DetalleProducto.css';

function DetalleProducto({ productos }) {
  const { id } = useParams();
  const producto = productos.find(p => p.id === Number(id));

  const [indice, setIndice] = useState(0);

  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % producto.imagen.length);
  };

  const anterior = () => {
    setIndice((prev) =>
      (prev - 1 + producto.imagen.length) % producto.imagen.length
    );
  };

  return (
    <div className="detalle-producto">

      {/* 🖼️ IZQUIERDA */}
      <div className="detalle-imagen">
        <img
          src={producto.imagen[indice]}
          alt={producto.nombre}
        />

        {producto.imagen.length > 1 && (
          <div className="detalle-controles">
            <button onClick={anterior}>‹</button>
            <button onClick={siguiente}>›</button>
          </div>
        )}
      </div>

      {/* 📝 DERECHA */}
      <div className="detalle-info">
        <h2>{producto.nombre}</h2>

        <p className="detalle-descripcion">
          {producto.descripcionLarga || producto.descripcion}
        </p>

        <a
          href={`https://wa.me/message/PSTT4KMKVZCHG1`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          Pedir por WhatsApp
        </a>
      </div>

    </div>
  );
}

export default DetalleProducto;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ producto }) {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const imagenes = producto.imagen;

  return (
    <div className="product-card">
      <img
        src={imagenes[indiceImagen]}
        alt={producto.nombre}
        loading="lazy"
      />

      <p className="titulo">{producto.nombre}</p>
      <p className="descripcion">{producto.descripcion}</p>

      {/* BOTÓN CENTRADO */}
      <div className="btn-detalle-wrapper">
        <Link to={`/producto/${producto.id}`} className="btn-detalle">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

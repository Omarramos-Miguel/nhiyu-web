import { useState } from 'react';
import './ProductCard.css';

function ProductCard({ producto }) {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const imagenes = producto.imagen;

  const siguienteImagen = () => {
    setIndiceImagen((prev) => (prev + 1) % imagenes.length);
  };

  const anteriorImagen = () => {
    setIndiceImagen((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="product-card">
      <img
        src={imagenes[indiceImagen]}
        alt={`${producto.nombre} imagen ${indiceImagen + 1}`}
      />
      {imagenes.length > 1 && (
        <div className="carousel-controls">
          <button onClick={anteriorImagen} aria-label="Imagen anterior">&#8592;</button>
          <button onClick={siguienteImagen} aria-label="Siguiente imagen">&#8594;</button>
        </div>
      )}
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default ProductCard;

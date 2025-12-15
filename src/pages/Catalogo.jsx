import ProductCard from '../components/ProductCard';
import './Catalogo.css';
import whatsappLogo from '../assets/whatsapp-logo.png';

function Catalogo({ productos }) {
  return (
    <div className="catalogo">

      <h2>Catálogo de Productos</h2>

      <div className="productos-grid">
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>

    </div>
  );
}

export default Catalogo;

import ProductCard from '../components/ProductCard';
import './Catalogo.css';
import whatsappLogo from '../assets/whatsapp-logo.png';

function Catalogo({ productos }) {
  return (
    <div className="catalogo">

      {/* WhatsApp */}
      <div className="whatsapp-contacto">
        <a
          href="https://wa.me/message/PSTT4KMKVZCHG1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
          aria-label="Contáctanos por WhatsApp"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
          Contáctanos por WhatsApp
        </a>
      </div>

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

import ProductCard from '../components/ProductCard';
import './Catalogo.css';
import whatsappLogo from '../assets/whatsapp-logo.svg'; // Agrega este logo en assets

function Catalogo() {
  // Aquí puedes reemplazar o ampliar tus productos reales
  const productos = [
    {
      id: 1,
      nombre: 'Llaveros de Huatulco',
      descripcion: "Corte láser en MDF | 5 diseños únicos",
      imagen: ['/src/assets/llavero1.png', '/src/assets/llavero2.png', '/src/assets/llavero3.png', '/src/assets/llavero4.png', '/src/assets/llavero5.png', '/src/assets/llavero6.png']
    },
    {
      id: 2,
      nombre: 'Cajita Huatulco',
      descripcion: "Corte láser en MDF | 6x6cm",
      imagen: ['/src/assets/cajita1.png', '/src/assets/cajita2.png'] // un solo imagen puede ser arreglo con 1 elemento
    },
    {
      id: 3,
      nombre: 'Servilletero Huatulco',
      descripcion: "Corte láser en MDF",
      imagen: ['/src/assets/servilletero1.png', '/src/assets/servilletero2.png', ]
    },
    {
      id: 4,
      nombre: 'Alhajero Floral',
      descripcion: "Corte láser en MDF",
      imagen: ['/src/assets/Alhajero1.png', '/src/assets/Alhajero2.png','/src/assets/Alhajero3.png']
    },
    {
      id: 5,
      nombre: 'Ajedrez del Mar',
      descripcion: "Corte láser en MDF",
      imagen: ['/src/assets/ajedrez1.png', '/src/assets/ajedrez2.png', ]
    },
    {
      id: 5,
      nombre: 'Llavero Dúo Nutria',
      descripcion: "Corte láser en MDF",
      imagen: ['/src/assets/nutria1.png', '/src/assets/nutria2.png', ]
    },
    {
      id: 6,
      nombre: 'Imán Huatulco',
      descripcion: "Corte láser en MDF",
      imagen: ['/src/assets/iman1.png', '/src/assets/iman2.png', ]
    }
  ];
  

  return (
    
    <div className="catalogo">
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

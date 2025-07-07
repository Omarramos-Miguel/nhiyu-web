import ProductCard from '../components/ProductCard';
import './Catalogo.css';
import whatsappLogo from '../assets/whatsapp-logo.svg';

// Importa las imágenes que usas
import llavero1 from '../assets/llavero1.png';
import llavero2 from '../assets/llavero2.png';
import llavero3 from '../assets/llavero3.png';
import llavero4 from '../assets/llavero4.png';
import llavero5 from '../assets/llavero5.png';
import llavero6 from '../assets/llavero6.png';

import cajita1 from '../assets/cajita1.png';
import cajita2 from '../assets/cajita2.png';

import servilletero1 from '../assets/servilletero1.png';
import servilletero2 from '../assets/servilletero2.png';

import alhajero1 from '../assets/alhajero1.png';
import alhajero2 from '../assets/alhajero2.png';
import alhajero3 from '../assets/alhajero3.png';

import ajedrez1 from '../assets/ajedrez1.png';
import ajedrez2 from '../assets/ajedrez2.png';

import nutria1 from '../assets/nutria1.png';
import nutria2 from '../assets/nutria2.png';

import iman1 from '../assets/iman1.png';
import iman2 from '../assets/iman2.png';

function Catalogo() {
  const productos = [
    {
      id: 1,
      nombre: 'Llaveros de Huatulco',
      descripcion: "Corte láser en MDF",
      imagen: [llavero1, llavero2, llavero3, llavero4, llavero5, llavero6]
    },
    {
      id: 2,
      nombre: 'Cajita Huatulco',
      descripcion: "Corte láser en MDF | 6x6cm",
      imagen: [cajita1, cajita2]
    },
    {
      id: 3,
      nombre: 'Servilletero Huatulco',
      descripcion: "Corte láser en MDF",
      imagen: [servilletero1, servilletero2]
    },
    {
      id: 4,
      nombre: 'Alhajero Floral',
      descripcion: "Corte láser en MDF",
      imagen: [alhajero1, alhajero2, alhajero3]
    },
    {
      id: 5,
      nombre: 'Ajedrez del Mar',
      descripcion: "Corte láser en MDF",
      imagen: [ajedrez1, ajedrez2]
    },
    {
      id: 6,
      nombre: 'Llavero Dúo Nutria',
      descripcion: "Corte láser en MDF",
      imagen: [nutria1, nutria2]
    },
    {
      id: 7,
      nombre: 'Imán Huatulco',
      descripcion: "Corte láser en MDF",
      imagen: [iman1, iman2]
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


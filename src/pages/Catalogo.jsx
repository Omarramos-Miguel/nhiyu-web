import ProductCard from '../components/ProductCard';
import './Catalogo.css';
import whatsappLogo from '../assets/whatsapp-logo.svg';

// Importa las imágenes que usas
import llavero1 from '../assets/llavero1.webp';
import llavero2 from '../assets/llavero2.webp';
import llavero3 from '../assets/llavero3.webp';
import llavero4 from '../assets/llavero4.webp';
import llavero5 from '../assets/llavero5.webp';
import llavero6 from '../assets/llavero6.webp';

import cajita1 from '../assets/cajita1.webp';
import cajita2 from '../assets/cajita2.webp';

import servilletero1 from '../assets/servilletero1.webp';
import servilletero2 from '../assets/servilletero2.webp';

import alhajero1 from '../assets/alhajero1.webp';
import alhajero2 from '../assets/alhajero2.webp';
import alhajero3 from '../assets/alhajero3.webp';

import ajedrez1 from '../assets/ajedrez1.webp';
import ajedrez2 from '../assets/ajedrez2.webp';

import nutria1 from '../assets/nutria1.webp';
import nutria2 from '../assets/nutria2.webp';

import iman1 from '../assets/iman1.webp';
import iman2 from '../assets/iman2.webp';

import marmota from '../assets/marmota.png';

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


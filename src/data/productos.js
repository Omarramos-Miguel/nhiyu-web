// =============================
// 🧩 IMPORTAR IMÁGENES
// =============================

// Llaveros Huatulco
import llavero1 from '../assets/llavero1.webp';
import llavero2 from '../assets/llavero2.webp';
import llavero3 from '../assets/llavero3.webp';
import llavero4 from '../assets/llavero4.webp';
import llavero5 from '../assets/llavero5.webp';
import llavero6 from '../assets/llavero6.webp';

// Cajita
import cajita1 from '../assets/cajita1.webp';
import cajita2 from '../assets/cajita2.webp';

// Servilletero
import servilletero1 from '../assets/servilletero1.webp';
import servilletero2 from '../assets/servilletero2.webp';

// Alhajero
import alhajero1 from '../assets/alhajero1.webp';
import alhajero2 from '../assets/alhajero2.webp';
import alhajero3 from '../assets/alhajero3.webp';

// Ajedrez
import ajedrez1 from '../assets/ajedrez1.webp';
import ajedrez2 from '../assets/ajedrez2.webp';

// Nutria
import nutria1 from '../assets/nutria1.webp';
import nutria2 from '../assets/nutria2.webp';

// Imán
import iman1 from '../assets/iman1.webp';
import iman2 from '../assets/iman2.webp';

// Marmota
import marmota from '../assets/marmota.JPG';

// Altar
import altar1 from '../assets/Altar1.PNG';
import altar2 from '../assets/Altar2.PNG';

// =============================
// 📦 LISTA DE PRODUCTOS
// =============================

const productos = [
    {
      id: 1,
      nombre: 'Llaveros de Huatulco',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Llaveros elaborados en MDF mediante corte láser de alta precisión,
  inspirados en los paisajes y símbolos más representativos de Huatulco.
  
  Son ideales como recuerdo turístico, regalo personalizado o souvenir
  para eventos. Su diseño ligero y resistente los hace perfectos para
  el uso diario, manteniendo siempre un toque artesanal y auténtico.
      `,
      imagen: [llavero1, llavero2, llavero3, llavero4, llavero5, llavero6]
    },
  
    {
      id: 2,
      nombre: 'Cajita Huatulco',
      descripcion: 'Corte láser en MDF | 6x6cm',
      descripcionLarga: `
  Cajita decorativa fabricada en MDF con corte láser de gran detalle.
  Su tamaño compacto de 6x6 cm la hace ideal para guardar pequeños
  objetos, recuerdos o joyería ligera.
  
  Perfecta como regalo artesanal o complemento decorativo que refleja
  la esencia de Huatulco con un acabado limpio y elegante.
      `,
      imagen: [cajita1, cajita2]
    },
  
    {
      id: 3,
      nombre: 'Servilletero Huatulco',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Servilletero artesanal elaborado en MDF mediante corte láser.
  Su diseño combina funcionalidad y estética, aportando un toque
  decorativo a mesas de cocina, comedor o restaurantes.
  
  Ideal para quienes buscan detalles únicos con inspiración local
  y acabados precisos.
      `,
      imagen: [servilletero1, servilletero2]
    },
  
    {
      id: 4,
      nombre: 'Alhajero Floral',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Alhajero decorativo con diseño floral, fabricado en MDF mediante
  corte láser de alta precisión.
  
  Pensado para guardar joyería, accesorios pequeños o recuerdos
  especiales. Su diseño delicado lo convierte en una excelente opción
  para regalo o decoración personal.
      `,
      imagen: [alhajero1, alhajero2, alhajero3]
    },
  
    {
      id: 5,
      nombre: 'Ajedrez del Mar',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Juego de ajedrez artesanal elaborado en MDF, inspirado en elementos
  marinos. Cada pieza está diseñada y cortada con precisión láser,
  combinando entretenimiento y diseño decorativo.
  
  Ideal para regalar o para quienes disfrutan de juegos clásicos
  con un toque artístico.
      `,
      imagen: [ajedrez1, ajedrez2]
    },
  
    {
      id: 6,
      nombre: 'Llavero Dúo Nutria',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Par de llaveros con diseño de nutria, elaborados en MDF mediante
  corte láser. Pensados como un detalle simbólico para parejas,
  amistades o como recuerdo especial.
  
  Un diseño tierno y original que combina artesanía y significado.
      `,
      imagen: [nutria1, nutria2]
    },
  
    {
      id: 7,
      nombre: 'Imán Huatulco',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Imán decorativo inspirado en Huatulco, fabricado en MDF con corte
  láser de alta precisión.
  
  Perfecto para decorar refrigeradores o superficies metálicas,
  manteniendo vivo el recuerdo de un destino especial.
      `,
      imagen: [iman1, iman2]
    },
  
    {
      id: 8,
      nombre: 'Llavero Marmota',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Llavero artesanal con diseño de marmota, elaborado en MDF mediante
  corte láser. Un diseño simpático y llamativo que destaca por su
  detalle y acabado.
  
  Ideal como souvenir o regalo original para todas las edades.
      `,
      imagen: [marmota]
    },
  
    {
      id: 9,
      nombre: 'Imán Altar',
      descripcion: 'Corte láser en MDF',
      descripcionLarga: `
  Imán decorativo con diseño de altar, elaborado en MDF mediante corte
  láser. Inspirado en tradiciones y elementos culturales, combina
  arte y simbolismo en una pieza compacta.
  
  Perfecto como recuerdo cultural o detalle decorativo único.
      `,
      imagen: [altar1, altar2]
    }
  ];  

// =============================
// 📤 EXPORTAR
// =============================

export default productos;

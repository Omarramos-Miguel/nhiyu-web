import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Gracias from './pages/Gracias';
import DetalleProducto from './pages/DetalleProducto';
import SobreNosotros from './pages/SobreNosotros'; // 👈 NUEVA PÁGINA

// 👇 importar productos
import productos from './data/productos';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home productos={productos} />}
        />

        {/* CATÁLOGO */}
        <Route
          path="/catalogo"
          element={<Catalogo productos={productos} />}
        />

        {/* DETALLE DINÁMICO */}
        <Route
          path="/producto/:id"
          element={<DetalleProducto productos={productos} />}
        />

        {/* SOBRE NOSOTROS */}
        <Route
          path="/sobre-nosotros"
          element={<SobreNosotros />}
        />

        {/* CONTACTO */}
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/gracias" element={<Gracias />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

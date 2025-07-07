import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalogo from './pages/Catalogo';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Gracias from './pages/Gracias';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/gracias" element={<Gracias />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

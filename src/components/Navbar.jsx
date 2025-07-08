import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-nhiyu.webp';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="logo-container">
        <Link to="/" onClick={cerrarMenu}>
          <img src={logo} alt="Nhiyu Logo" className="logo-img" />
        </Link>
      </div>

      {/* Botón hamburguesa para móviles */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú al centro */}
      <ul className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
        <li><Link to="/catalogo" onClick={cerrarMenu}>Catálogo</Link></li>
        <li><Link to="/contacto" onClick={cerrarMenu}>Contacto</Link></li>
      </ul>

      {/* Redes sociales a la derecha */}
      <div className="nav-socials">
        <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://wa.me/52XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <img src="/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;


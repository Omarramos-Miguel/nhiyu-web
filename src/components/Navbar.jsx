import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-nhiyu.webp';
import instagramIcon from '../assets/icons/instagram.svg';
import whatsappIcon from '../assets/icons/whatsapp.svg';

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
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" onClick={cerrarMenu}>
          <img src={logo} alt="Nhiyu Logo" className="logo-img" />
        </Link>
      </div>

      {/* Botón hamburguesa */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Menú */}
      <ul className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
        <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
        <li><Link to="/catalogo" onClick={cerrarMenu}>Catálogo</Link></li>
        <li><Link to="/contacto" onClick={cerrarMenu}>Contacto</Link></li>
      </ul>

      {/* Redes sociales */}
      <div className="nav-socials">
        <a href="https://www.instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://wa.me/52XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;



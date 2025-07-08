import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-nhiyu.webp';
import instagramIcon from '../assets/icons/instagram.svg';
import facebookIcon from '../assets/icons/facebook.svg';

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

        {/* Redes sociales visibles solo en móviles */}
        <li className="mobile-socials">
          <a href="https://www.instagram.com/nhiyuhuatulco" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577842755748" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </li>
      </ul>

      {/* Redes sociales visibles en escritorio */}
      <div className="nav-socials">
        <a href="https://www.instagram.com/nhiyu_huatulco/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61577842755748" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;



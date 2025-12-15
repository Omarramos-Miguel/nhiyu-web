import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';
import whatsappLogo from '../assets/whatsapp-logo.png';
import instagramIcon from '../assets/icons/instagram.png';
import facebookIcon from '../assets/icons/facebook.png';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        {/* LOGO */}
        <div className="logo-container">
          <Link to="/" onClick={cerrarMenu}>
            <img src={logo} alt="Nhiyu Logo" className="logo-img" />
          </Link>
        </div>

        {/* HAMBURGUESA */}
        <div
          className={`hamburger ${menuAbierto ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
          <li><Link to="/" onClick={cerrarMenu}>Inicio</Link></li>
          <li><Link to="/catalogo" onClick={cerrarMenu}>Catálogo</Link></li>
          <li><Link to="/personalizado" onClick={cerrarMenu}>Personalizado</Link></li>
          <li><Link to="/contacto" onClick={cerrarMenu}>Contacto</Link></li>

          {/* Redes móviles */}
          <div className="mobile-socials">
            <a href="https://www.instagram.com/nhiyu_huatulco/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61577842755748" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </ul>

        {/* Redes desktop */}
        <div className="nav-socials">
          <a href="https://www.instagram.com/nhiyu_huatulco/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577842755748" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </nav>

      {/* 🟢 WHATSAPP DEBAJO DEL NAVBAR */}
      <div className="whatsapp-bar">
        <a
          href="https://wa.me/message/PSTT4KMKVZCHG1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappLogo} alt="WhatsApp" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </>
  );
}

export default Navbar;

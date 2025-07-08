import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-nhiyu.webp'; // Ajusta el nombre si tu imagen es diferente

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Nhiyu Logo" className="logo-img" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo">Catálogo</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

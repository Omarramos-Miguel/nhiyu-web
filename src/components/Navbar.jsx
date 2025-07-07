import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo-nhiyu.webp'; // Ajusta el nombre si tu imagen es diferente
import iconInicio from '../assets/icons/home.svg';
import iconCatalogo from '../assets/icons/catalogo.webp';
import iconContacto from '../assets/icons/contacto.webp';
 
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
          <Link to="/">
            <img src={iconInicio} alt="Inicio" className="nav-icon" />
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/catalogo">
            <img src={iconCatalogo} alt="Catálogo" className="nav-icon" />
            Catálogo
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            <img src={iconContacto} alt="Contacto" className="nav-icon" />
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;

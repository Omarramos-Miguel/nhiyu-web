import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logoblanco.png'; // ajusta ruta si hace falta

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenido">

        {/* MARCA */}
        <div className="footer-col footer-brand">
          <img src={logo} alt="Nhiyu logo" className="footer-logo" />
          <p className="footer-descripcion">
            Impresión 3D y Grabado láser<br />
            Recuerdos con alma del mar
          </p>

          <div className="footer-social">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div className="footer-col">
          <h4>Nuestra tienda</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo</Link></li>
            <li><Link to="/sobre-nosotros">Sobre nosotros</Link></li>
          </ul>
        </div>

        {/* CONTACTO REAL */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li><Link to="/contacto">Página de contacto</Link></li>
            <li>
              <a 
                href="https://wa.me/message/PSTT4KMKVZCHG1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:contacto@nhiyu.com">
                contacto@nhiyu.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Nhiyu · Hecho en Huatulco
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
        hide: true
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ padding: '0.5rem 0' }}>  {/* Padding reducido */}
      <div className="container">
        <Link 
          className="navbar-brand" 
          to="/" 
          style={{ 
            color: '#000',
            fontWeight: 'bold',
            fontSize: '1.1rem'  // Fuente más pequeña para logo
          }}
        >
          BASCZAGUI S.A DE C.V.
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
                to="/"
                onClick={closeMenu}  // Cierra menú al hacer clic
                style={{ 
                  fontWeight: isActive('/') ? 'bold' : 'normal',
                  color: isActive('/') ? '#007bff' : '#000',
                  fontSize: '0.9rem'  // Fuente más pequeña para enlaces
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}
                to="/nosotros"
                onClick={closeMenu}
                style={{ 
                  fontWeight: isActive('/nosotros') ? 'bold' : 'normal',
                  color: isActive('/nosotros') ? '#007bff' : '#000',
                  fontSize: '0.9rem'
                }}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}
                to="/servicios"
                onClick={closeMenu}
                style={{ 
                  fontWeight: isActive('/servicios') ? 'bold' : 'normal',
                  color: isActive('/servicios') ? '#007bff' : '#000',
                  fontSize: '0.9rem'
                }}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                to="/blog"
                onClick={closeMenu}
                style={{ 
                  fontWeight: isActive('/blog') ? 'bold' : 'normal',
                  color: isActive('/blog') ? '#007bff' : '#000',
                  fontSize: '0.9rem'
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
                to="/contacto"
                onClick={closeMenu}
                style={{ 
                  fontWeight: isActive('/contacto') ? 'bold' : 'normal',
                  color: isActive('/contacto') ? '#007bff' : '#000',
                  fontSize: '0.9rem'
                }}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/aviso-privacidad') ? 'active' : ''}`}
                to="/aviso-privacidad"
                onClick={closeMenu}
                style={{ 
                  fontWeight: isActive('/aviso-privacidad') ? 'bold' : 'normal',
                  color: isActive('/aviso-privacidad') ? '#007bff' : '#000',
                  fontSize: '0.9rem'
                }}
              >
                Aviso de Privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
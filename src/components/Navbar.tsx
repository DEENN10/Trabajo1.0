import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  // Vacío por ahora
}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {/* Logo – Negro fijo + Bold */}
        <Link 
          className="navbar-brand" 
          to="/" 
          style={{ 
            color: '#000',  // Negro fijo (override CSS azul)
            fontWeight: 'bold'  // Bold para impacto
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
                style={{ 
                  fontWeight: isActive('/') ? 'bold' : 'normal',  // Bold solo si active
                  color: isActive('/') ? '#007bff' : '#000'  // Azul en active, negro resto
                }}
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/nosotros') ? 'active' : ''}`}
                to="/nosotros"
                style={{ 
                  fontWeight: isActive('/nosotros') ? 'bold' : 'normal',
                  color: isActive('/nosotros') ? '#007bff' : '#000'
                }}
              >
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/servicios') ? 'active' : ''}`}
                to="/servicios"
                style={{ 
                  fontWeight: isActive('/servicios') ? 'bold' : 'normal',
                  color: isActive('/servicios') ? '#007bff' : '#000'
                }}
              >
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
                to="/blog"
                style={{ 
                  fontWeight: isActive('/blog') ? 'bold' : 'normal',
                  color: isActive('/blog') ? '#007bff' : '#000'
                }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contacto') ? 'active' : ''}`}
                to="/contacto"
                style={{ 
                  fontWeight: isActive('/contacto') ? 'bold' : 'normal',
                  color: isActive('/contacto') ? '#007bff' : '#000'
                }}
              >
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/aviso-privacidad') ? 'active' : ''}`}
                to="/aviso-privacidad"
                style={{ 
                  fontWeight: isActive('/aviso-privacidad') ? 'bold' : 'normal',
                  color: isActive('/aviso-privacidad') ? '#007bff' : '#000'
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
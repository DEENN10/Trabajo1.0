import React from 'react';
import { Link } from 'react-router-dom';  // Usar Link para navegación interna
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gasLpImage from '../assets/imagenes/services/services-gas-lp.jpg';
import basculasImage from '../assets/imagenes/services/services-basculas.jpg';

const Services: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Nuestros Servicios</h1>
        <p className="lead text-center mb-5">Inspecciones Certificadas.</p>
        <div className="row">
          {/* Card Gas LP - Full Width */}
          <div className="col-12 mb-4">
            <div className="card h-100">
              <img src={gasLpImage} className="card-img-top" alt="Gas LP" style={{ height: '300px', objectFit: 'cover' }} />  {/* Cambiado a 300px */}
              <div className="card-body">
                <h5>Medidores Gas LP</h5>
                <p>NOM-001-SECRE. Verificaciones precisas para medidores de flujo en auto-tanques y estaciones de carburación.</p>
                <div className="d-flex gap-2">
                  <Link to="/contacto" className="btn btn-primary">Contactar</Link>
                  <Link to="/pagina-gas" className="btn btn-outline-primary">Conocer Más</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Card Básculas - Full Width */}
          <div className="col-12 mb-4">
            <div className="card h-100">
              <img src={basculasImage} className="card-img-top" alt="Básculas" style={{ height: '300px', objectFit: 'cover' }} />  {/* Cambiado a 300px */}
              <div className="card-body">
                <h5>Básculas Industriales</h5>
                <p>NOM-045-SCFI. Calibraciones exactas para básculas en logística y exportación.</p>
                <div className="d-flex gap-2">
                  <Link to="/contacto" className="btn btn-primary">Contactar</Link>
                  <Link to="/pagina-basculas" className="btn btn-outline-primary">Conocer Más</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
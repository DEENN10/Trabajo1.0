import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import gasLpImage from '../assets/imagenes/services/services-gas-lp.jpg';
import basculasImage from '../assets/imagenes/services/services-basculas.jpg';

const Services: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Servicios</h1>
        <p className="lead text-center mb-5">Inspecciones certificadas.</p>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={gasLpImage} className="card-img-top" alt="Gas LP" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5>Medidores Gas LP</h5>
                <p>NOM-001-SECRE.</p>
                <a href="/contacto" className="btn btn-primary">Contactar</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card">
              <img src={basculasImage} className="card-img-top" alt="Básculas" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5>Básculas Industriales</h5>
                <p>NOM-045-SCFI.</p>
                <a href="/contacto" className="btn btn-primary">Contactar</a>
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
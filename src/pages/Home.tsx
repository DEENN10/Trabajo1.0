import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';  // Asume existe del Paso 3

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <Hero 
        title="BASCZAGUI S.A DE C.V." 
        subtitle="Líderes en inspección de normas oficiales mexicanas (NOM). Especializados en medidores de flujo para Gas LP y básculas." 
      />
      
      <main className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5">Nuestras Especialidades</h2>
            <p className="lead">Garantizamos precisión y cumplimiento en todo México.</p>
          </div>
        </div>
        
        <div className="row">
          {/* Placeholders simples sin componente nuevo */}
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-tint text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Medidores Gas LP</h5>
              <p>Verificaciones móviles.</p>
              <a href="/servicios" className="btn btn-primary">Más Info</a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-balance-scale text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Básculas Industriales</h5>
              <p>Calibración precisa.</p>
              <a href="/servicios" className="btn btn-primary">Más Info</a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-certificate text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Certificaciones NOM</h5>
              <p>Asesoría nacional.</p>
              <a href="/contacto" className="btn btn-primary">Más Info</a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
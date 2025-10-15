
import React from 'react';
import { Link } from 'react-router-dom';  // Para el nuevo botón
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';  // Tu Hero con video
import equipoImg from '../assets/imagenes/about/somos.png';  // Tu imagen

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <Hero 
        title="BASCZAGUI S.A DE C.V." 
        subtitle="Líderes en inspección de normas oficiales mexicanas. Especializados en medidores de flujo para Gas LP y básculas." 
      />
      
      {/* NUEVA SECCIÓN: Quiénes Somos – Con Botón Agregado */}
      <section className="container my-5 text-center">
        <h2 className="display-5 fw-bold text-primary mb-4">¿Quiénes Somos?</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              BASCZAGUI S.A DE C.V., es la primera unidad de verificación acreditada por la Entidad Mexicana de Acreditación (EMA) con numero de registro UVIM-199 Y aprobada por Secretaria de Economia (SE) para llevar a cabo la verificación de Sistemas de medición para Gas L.P. utilizados en transacciones comerciales (medidores de flujo colocados en auto-tanques y estaciones de carburación).
            </p>
            {/* NUEVO BOTÓN: "Conócenos" al Final del Texto */}
            <Link to="/nosotros" className="btn btn-primary btn-lg mt-3">
              Conócenos
            </Link>
          </div>
          <div className="col-md-6">
            <img 
              src={equipoImg}  
              alt="Equipo BASCZAGUI en acción" 
              className="img-fluid rounded shadow-sm" 
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
      
      <main className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="display-5">Nuestras Especialidades</h2>
            <p className="lead">Garantizamos precisión y cumplimiento en todo México.</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-tint text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Medidores Gas LP</h5>
              <p>Verificaciones móviles.</p>
              <Link to="/servicios" className="btn btn-primary">Más Info</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-balance-scale text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Básculas Industriales</h5>
              <p>Calibración precisa.</p>
              <Link to="/servicios" className="btn btn-primary">Más Info</Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 text-center p-4 shadow-sm">
              <i className="fas fa-certificate text-primary mb-3" style={{ fontSize: '3rem' }}></i>
              <h5>Certificaciones NOM</h5>
              <p>Asesoría nacional.</p>
              <Link to="/contacto" className="btn btn-primary">Más Info</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
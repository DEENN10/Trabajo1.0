import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gasLpImage from '../assets/imagenes/services/services-gas-lp.jpg';

const PaginaGas: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Medidores Gas LP</h1>
        <p className="lead text-center mb-5">Verificaciones precisas según NOM-001-SECRE.</p>
        
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={gasLpImage} alt="Gas LP" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h2>¿Qué Ofrecemos?</h2>
            <p>Realizamos inspecciones in situ y calibraciones de medidores de flujo para gas LP en auto-tanques y estaciones de carburación. Garantizamos cumplimiento con normas oficiales mexicanas, reduciendo riesgos de seguridad y pérdidas económicas.</p>
            <h3>Proceso de Verificación</h3>
            <ul>
              <li>Inspección inicial del equipo.</li>
              <li>Calibración con instrumentos trazables al CEM.</li>
              <li>Pruebas de precisión y emisión de certificados.</li>
              <li>Reporte detallado y sellos de verificación.</li>
            </ul>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h2>Beneficios</h2>
            <p>Evita multas, asegura transacciones justas y genera confianza en tus clientes con equipos verificados por EMA.</p>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contacto" className="btn btn-primary btn-lg me-3">Solicitar</Link>
          <Link to="/servicios" className="btn btn-outline-primary btn-lg">Regresar</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaginaGas;
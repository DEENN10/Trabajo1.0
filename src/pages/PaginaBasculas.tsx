import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import basculasImage from '../assets/imagenes/services/services-basculas.jpg';

const PaginaBasculas: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Básculas Industriales</h1>
        <p className="lead text-center mb-5">Calibraciones exactas según NOM-045-SCFI.</p>
        
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={basculasImage} alt="Básculas" className="img-fluid rounded shadow-sm" />
          </div>
          <div className="col-md-6">
            <h2>¿Qué Ofrecemos?</h2>
            <p>Ofrecemos calibraciones precisas para básculas industriales en sectores de logística, exportación y manufactura. Cumplimos con normas oficiales mexicanas, asegurando mediciones exactas y evitando sanciones.</p>
            <h3>Proceso de Calibración</h3>
            <ul>
              <li>Evaluación del estado de la báscula.</li>
              <li>Calibración con pesas certificadas.</li>
              <li>Pruebas de carga y precisión.</li>
              <li>Certificación y reporte oficial.</li>
            </ul>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h2>Beneficios</h2>
            <p>Reduce errores en pesaje, cumple con regulaciones y mejora la eficiencia operativa en tu negocio.</p>
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

export default PaginaBasculas;
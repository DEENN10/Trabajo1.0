import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Importa imágenes de about/
import aboutImage1 from '../assets/imagenes/about/4.jpeg';
import aboutImage2 from '../assets/imagenes/about/5.jpeg';

const About: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4">Nosotros</h1>
        <p className="lead mb-5">BASCZAGUI S.A DE C.V. es una empresa mexicana dedicada a la inspección y verificación de equipos de medición desde 2010. Contamos con personal certificado por la EMA y cobertura en todo el país.</p>
        
        <div className="row mb-5">
          <div className="col-md-6">
            <img src={aboutImage1} alt="Equipo de BASCZAGUI en inspección" className="img-fluid rounded mb-3" />  {/* img-fluid: Responsive */}
            <p>Nuestro equipo en acción durante una verificación de básculas en CDMX.</p>
          </div>
          <div className="col-md-6">
            <img src={aboutImage2} alt="Certificaciones de BASCZAGUI" className="img-fluid rounded mb-3" />
            <p>Certificaciones y acreditaciones que respaldan nuestra expertise en NOMs.</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
            <h3>Misión y Visión</h3>
            <p><strong>Misión:</strong> Proporcionar servicios de inspección confiables para garantizar el cumplimiento normativo y la seguridad en la industria del Gas LP y pesaje.</p>
            <p><strong>Visión:</strong> Ser el referente nacional en calibraciones certificadas, expandiendo nuestra red a nivel federal.</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
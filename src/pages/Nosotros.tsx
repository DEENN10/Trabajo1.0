import React from 'react';
import { Link } from 'react-router-dom';  // Para CTA links (ya lo tienes)
import equipoImg from '../assets/imagenes/about/4.jpeg';  // Tu imagen (cambia a '4.jpg' si es .jpg)

const Nosotros: React.FC = () => {
  return (
    <div className="page-section" style={{ scrollMarginTop: '0' }}>  {/* FIX: Scroll al top en navegación */}
      <div className="container my-5">
        {/* Intro Hero-Like – Título y Descripción General */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary mb-3">Nosotros</h1>
            <p className="lead">
              BASCZAGUI S.A. DE C.V. es líder en metrología e inspección en México. 
              Con más de [X años] de experiencia, nos especializamos en calibraciones precisas para medidores de Gas LP, básculas industriales y certificaciones NOM. 
              Ofrecemos servicios confiables y certificados por EMA, con cobertura nacional desde CDMX.
            </p>
            <Link to="/servicios" className="btn btn-primary btn-lg">
              Ver Nuestros Servicios
            </Link>
          </div>
          <div className="col-md-6 text-center">
            {/* Imagen – Desde src/assets/imagenes/about/ */}
            <img 
              src={equipoImg}  // Usa el import (Vite genera URL automática)
              alt="Equipo BASCZAGUI en acción" 
              className="img-fluid rounded shadow-sm" 
              style={{ maxHeight: '400px', objectFit: 'cover' }}  // Responsive y crop
            />
          </div>
        </div>

        {/* Sección Historia */}
        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="text-center mb-4">Nuestra Historia</h2>
            <p className="text-center lead mb-4">
              Fundados en 2010, BASCZAGUI surgió de la necesidad de servicios de metrología confiables en la industria mexicana. 
              Comenzamos con inspecciones básicas de medidores de Gas LP y hemos crecido para cubrir todo el espectro de calibraciones NOM, 
              sirviendo a estaciones de servicio, fábricas y distribuidores en todo el país.
            </p>
            <div className="row">
              <div className="col-md-4 text-center mb-3">
                <i className="fas fa-chart-line text-primary" style={{ fontSize: '3rem' }}></i>
                <h5 className="mt-2">Crecimiento</h5>
                <p>De local a nacional: Hoy cubrimos CDMX y estados clave.</p>
              </div>
              <div className="col-md-4 text-center mb-3">
                <i className="fas fa-users text-primary" style={{ fontSize: '3rem' }}></i>
                <h5 className="mt-2">Equipo</h5>
                <p>Técnicos certificados con experiencia en EMA y CEM.</p>
              </div>
              <div className="col-md-4 text-center mb-3">
                <i className="fas fa-award text-primary" style={{ fontSize: '3rem' }}></i>
                <h5 className="mt-2">Logros</h5>
                <p>Más de 10,000 calibraciones exitosas y cero multas para clientes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="mb-3">Nuestra Misión</h2>
            <p>
              Proporcionar mediciones exactas y servicios de calibración que garanticen el cumplimiento de normas oficiales mexicanas (NOM), 
              reduciendo riesgos de seguridad y pérdidas económicas para industrias de gas LP, pesaje y más. 
              Nos comprometemos con la precisión trazable al Centro Nacional de Metrología (CEM) y la Entidad Mexicana de Acreditación (EMA).
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">Nuestra Visión</h2>
            <p>
              Ser el socio preferido en metrología industrial en México, innovando con tecnología IoT para medidores inteligentes y 
              expandiendo nuestra cobertura a toda la república. 
              Aspiramos a un futuro donde la precisión sea sinónimo de BASCZAGUI.
            </p>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="text-center mb-4">Nuestra Expertise</h2>  {/* FIX: "Experiencia." → "Expertise" */}
            <p className="text-center lead mb-4">
              Especializados en inspecciones in situ y certificaciones para evitar multas y asegurar operaciones seguras.
            </p>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4 shadow-sm">
                  <i className="fas fa-tint text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5>Gas LP y Medidores</h5>
                  <p>Calibraciones NOM-001 para estaciones y distribuidores.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4 shadow-sm">
                  <i className="fas fa-balance-scale text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5>Básculas Industriales</h5>
                  <p>Verificaciones NOM-045 para logística y exportación.</p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4 shadow-sm">
                  <i className="fas fa-certificate text-primary mb-3" style={{ fontSize: '3rem' }}></i>
                  <h5>Certificaciones</h5>
                  <p>Avaladas por EMA y SAT – Reducción de riesgos legales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-3">¿Listo para Colaborar?</h3>
            <p className="lead mb-4">Únete a cientos de clientes satisfechos con nuestra precisión certificada.</p>
            <Link to="/contacto" className="btn btn-primary btn-lg me-3">Contáctanos</Link>  {/* <Link> – Navega a top de /contacto */}
            <Link to="/servicios" className="btn btn-outline-primary btn-lg">Ver Servicios</Link>  {/* <Link> – Navega a top de /servicios */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
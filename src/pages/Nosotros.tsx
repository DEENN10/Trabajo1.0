import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import equipoImg from '../assets/imagenes/about/4.jpeg';  // Primera imagen
import equipoImg2 from '../assets/imagenes/about/5.jpeg';  // Segunda imagen

const Nosotros: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="page-section" style={{ scrollMarginTop: '0' }}>
      <div className="container my-5">
        {/* Sección Intro Modificada – Texto Largo Dividido con Iconos e Imagen */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-primary mb-3">Nosotros</h1>
            <p className="lead mb-3">
              <i className="fas fa-award text-primary me-2"></i>
              <strong>BASCZAGUI S.A DE C.V.</strong>, Es la primera unidad de verificación acreditada por la <strong>Entidad Mexicana de Acreditación (EMA)</strong> con número de registro <strong>UVIM-199</strong> y aprobada por <strong>Secretaría de Economía (SE)</strong> para llevar a cabo la verificación de Sistemas de medición para Gas L.P. utilizados en transacciones comerciales (medidores de flujo colocados en auto-tanques y estaciones de carburación).
            </p>
            <p className="lead mb-4">
              <i className="fas fa-users text-primary me-2"></i>
              Contamos con una cartera de clientes que comprende algunos de los grupos gaseros más importantes en la Ciudad de México y zona metropolitana, los cuales se han visto satisfechos con nuestros servicios. 
              <i className="fas fa-lightbulb text-primary me-2"></i>
              Nuestra filosofía está basada en la <strong>calidad y la experiencia</strong>. Sabemos y entendemos las necesidades de nuestros clientes por ello ofrecemos servicios adaptables a su negocio.
            </p>
            
          </div>
          <div className="col-md-6 text-center">
            <img 
              src={equipoImg}
              alt="Equipo BASCZAGUI acreditado" 
              className="img-fluid rounded shadow-sm p-2"
              style={{ 
                maxHeight: '500px',
                objectFit: 'cover', 
                transition: 'transform 0.3s ease',
                '@media (max-width: 768px)': { maxHeight: '400px' }
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              data-aos="fade-in"
              data-aos-delay="200"
            />
          </div>
        </div>

        {/* Sección Nuestra Historia Modificada – Texto Largo Dividido con Iconos e Imagen */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6 text-center order-md-1 order-2">
            <img 
              src={equipoImg2}
              alt="Fundamentación y beneficios de BASCZAGUI" 
              className="img-fluid rounded shadow-sm p-2"
              style={{ 
                maxHeight: '500px',
                objectFit: 'cover', 
                transition: 'transform 0.3s ease',
                '@media (max-width: 768px)': { maxHeight: '400px' }
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <h2 className="mb-4">En BASCZAGUI...</h2>
            <p className="lead mb-3">
              <i className="fas fa-book text-primary me-2"></i>
              Nuestra labor de verificación se encuentra fundamentada en la recomendación internacional <strong>OIML-R-117-1 "SISTEMAS DINÁMICOS DE MEDICIÓN PARA LÍQUIDOS DIFERENTES AL AGUA. PARTE 1: REQUISITOS TÉCNICOS Y METROLÓGICOS"</strong>. Edición 2007. En la cual se establecen los requisitos que deben de cumplir los sistemas de medición para gas L.P. para ser utilizados en transacciones comerciales.
            </p>
            <p className="lead">
              <i className="fas fa-user-check text-primary me-2"></i>
              Contamos con personal altamente calificado quienes están acreditados por la EMA y aprobados por la SE para realizar sus funciones. 
              <i className="fas fa-shield-alt text-primary me-2"></i>
              Mantener sus equipos verificados representa un beneficio para su negocio ya que usted estará cumpliendo con las disposiciones legales incluidas en la "Lista de Instrumentos de Medición cuya verificación inicial, periódica o extraordinaria es obligatoria, así como las normas aplicables para efectuarla, publicada el 18 de abril de 2016 y su modificación del 19/08/2021" evitando contratiempos con la autoridad. Además de esta manera conocen el funcionamiento de su equipo y los sellos colocados (holograma Profeco de instrumento verificado y la etiqueta de la unidad de verificación) generan más confianza en sus clientes porque representa mayor seguridad sobre lo que están pagando.
            </p>
          </div>
        </div>

        {/* Sección Misión y Visión con Iconos Agregados */}
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="mb-3">
              <i className="fas fa-bullseye text-primary me-2"></i>  {/* Icono para Misión */}
              Nuestra Misión
            </h2>
            <p>
              Proporcionar mediciones exactas y servicios de calibración que garanticen el cumplimiento de normas oficiales mexicanas (NOM), 
              reduciendo riesgos de seguridad y pérdidas económicas para industrias de gas LP, pesaje y más. 
              Nos comprometemos con la precisión trazable al Centro Nacional de Metrología (CEM) y la Entidad Mexicana de Acreditación (EMA).
            </p>
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">
              <i className="fas fa-eye text-primary me-2"></i>  {/* Icono para Visión */}
              Nuestra Visión
            </h2>
            <p>
              Ser el socio preferido en metrología industrial en México, innovando con tecnología IoT para medidores inteligentes y 
              expandiendo nuestra cobertura a toda la república. 
              Aspiramos a un futuro donde la precisión sea sinónimo de BASCZAGUI.
            </p>
          </div>
        </div>

        {/* Resto de la página permanece igual */}
        <div className="row mb-5">
          <div className="col-md-12">
            <h2 className="text-center mb-4">Somos Especialistas.</h2>
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
            <Link to="/contacto" className="btn btn-primary btn-lg me-3">Contáctanos</Link>
            <Link to="/servicios" className="btn btn-outline-primary btn-lg">Ver Servicios</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
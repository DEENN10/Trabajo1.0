import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';  // Importa AOS para efectos
import 'aos/dist/aos.css';  // Estilos de AOS
import equipoImg from '../assets/imagenes/about/somos.png';  // Tu imagen existente
import Carousel from 'react-bootstrap/Carousel';  // Carrusel de Bootstrap

const Home: React.FC = () => {
  // Inicializa AOS en el componente
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Nuevo Carrusel en lugar de Hero */}
      <Carousel fade className="w-100" style={{ maxHeight: '500px', overflow: 'hidden' }}>
        {/* Video 1: hero-bg.mp4 */}
        <Carousel.Item>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="d-block w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          >
            <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <Carousel.Caption 
            data-aos="fade-in"  // Efecto fade-in para este texto
            data-aos-delay="500"
            className="text-shadow"
          >
            <h3 className="fw-bold text-white">Bienvenidos a BASCZAGUI S.A DE C.V.</h3>
            <p className="lead text-white">Líderes en Inspecciones de Gas L.P y Básculas</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Video 2: inicio-basculas.mp4 */}
        <Carousel.Item>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="d-block w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          >
            <source src="/assets/videos/inicio-basculas.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <Carousel.Caption 
            data-aos="zoom-in"  // Efecto zoom-in para este texto
            data-aos-delay="500"
            className="text-shadow"
          >
            <h3 className="fw-bold text-white">Especialistas en Básculas</h3>
            <p className="lead text-white">Soluciones precisas para tu negocio</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Video 3: inicio-gaslp.mp4 */}
        <Carousel.Item>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="d-block w-100"
            style={{ height: '500px', objectFit: 'cover' }}
          >
            <source src="/assets/videos/inicio-gaslp.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <Carousel.Caption 
            data-aos="slide-up"  // Efecto slide-up para este texto
            data-aos-delay="500"
            className="text-shadow"
          >
            <h3 className="fw-bold text-white">Expertos en Gas LP</h3>
            <p className="lead text-white">Inspecciones seguras y eficientes</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      {/* Resto de la estructura permanece igual */}
      <section className="container my-5 text-center">
        <h2 className="display-5 fw-bold text-primary mb-4">¿Quiénes Somos?</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="lead">
              BASCZAGUI S.A DE C.V., es la primera unidad de verificación acreditada por la Entidad Mexicana de Acreditación (EMA) con numero de registro UVIM-199 Y aprobada por Secretaria de Economia (SE) para llevar a cabo la verificación de Sistemas de medición para Gas L.P. utilizados en transacciones comerciales (medidores de flujo colocados en auto-tanques y estaciones de carburación).
            </p>
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
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import equipoImg from '../assets/imagenes/about/somos.png';
import Carousel from 'react-bootstrap/Carousel';

const Home: React.FC = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      
      {/* Carrusel con intervalo de 4 segundos y text-shadow para resaltar texto */}
      <Carousel fade className="w-100" style={{ maxHeight: '500px', overflow: 'hidden' }} interval={4000}>
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
            data-aos="fade-in"
            data-aos-delay="500"
            className="text-center"
            
          >
            <h3 className="fw-bold text-white fs-1">Bienvenidos a BASCZAGUI S.A DE C.V.</h3>
            <p className="lead text-white fs-4">Líderes en Inspecciones de Gas L.P y Básculas</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

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
            data-aos="zoom-in"
            data-aos-delay="500"
            className="text-center"
            style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.8)'
            }}
          >
            <h3 className="fw-bold text-white fs-1">Especialistas en Básculas</h3>
            <p className="lead text-white fs-4">Soluciones precisas para tu negocio</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

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
            data-aos="slide-up"
            data-aos-delay="500"
            className="text-center"
            style={{
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 10px rgba(0, 0, 0, 0.8)'
            }}
          >
            <h3 className="fw-bold text-white fs-1">Expertos en Gas LP</h3>
            <p className="lead text-white fs-4">Inspecciones seguras y eficientes</p>
            <Link to="/servicios" className="btn btn-primary btn-lg mt-3">
              Servicios
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      {/* Resto igual */}
      <section className="container my-5 text-center">
        <h2 className="display-5 fw-bold text-primary mb-4">¿Quiénes Somos?</h2>
        <div className="row align-items-center">
          <div className="col-md-6 col-12 mb-3 mb-md-0">
            <p className="lead">
              BASCZAGUI S.A DE C.V., es la primera unidad de verificación acreditada por la Entidad Mexicana de Acreditación (EMA) con numero de registro UVIM-199 Y aprobada por Secretaria de Economia (SE) para llevar a cabo la verificación de Sistemas de medición para Gas L.P. utilizados en transacciones comerciales (medidores de flujo colocados en auto-tanques y estaciones de carburación).
            </p>
            <Link to="/nosotros" className="btn btn-primary btn-lg mt-3">
              Conócenos
            </Link>
          </div>
          <div className="col-md-6 col-12">
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
import React from 'react';
import { Link } from 'react-router-dom';  // Solo para CTA – Sin <a>
import portadaHero from '../assets/imagenes/hero/portada-hero.png';  // Poster fallback

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section 
      className="hero-video d-flex align-items-center text-center text-white"
      style={{ minHeight: '60vh' }}
    >
      {/* Video – Sin <a> en fallback */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="auto"
        poster={portadaHero}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      >
        <source src="/assets/videos/hero-bg.mp4" type="video/mp4" />
        {/* Fallback simple: Solo texto, sin Link temporal para evitar error */}
        <p>Tu navegador no soporta video HTML5. Visita nuestros servicios.</p>
      </video>
      
      {/* Overlay */}
      <div 
        className="hero-overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Contenido – Solo <Link>, no <a> */}
        <div className="container" style={{ zIndex: 3 }}>
          <h1 className="display-3 fw-bold mb-4">{title}</h1>
          <p className="lead fs-3 mb-4">{subtitle}</p>
          <Link to="/servicios" className="btn btn-primary btn-lg">
            Descubre Nuestros Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
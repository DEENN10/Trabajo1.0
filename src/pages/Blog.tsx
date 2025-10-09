import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

import blogGas from '../assets/imagenes/blog/blog-gas.jpg';
import blogBasculas from '../assets/imagenes/blog/blog-basculas.jpg';
import blogCertificaciones from '../assets/imagenes/blog/blog-certificaciones.jpg';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: () => React.ReactNode;
  image: string;
  date: string;
  category: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Inspección y Calibración de Medidores de Gas LP: Normas NOM-001-SECRE-2012',
      excerpt: 'Descubre cómo asegurar la precisión en medidores de Gas LP para evitar fugas y cumplir con regulaciones mexicanas. Teaser: Importancia de calibraciones anuales...',
      fullContent: () => (
        <>
          <p>En BASCZAGUI S.A. de C.V., somos expertos en la inspección y calibración de medidores de Gas LP conforme a la <strong>NOM-001-SECRE-2012</strong>. Esta norma establece los requisitos para equipos de medición de hidrocarburos, asegurando precisión y seguridad en estaciones de servicio y distribuidores.</p>
          
          <p><strong>¿Por qué calibrar?</strong> Un medidor desajustado puede causar pérdidas económicas (hasta 5% por error) o riesgos de seguridad (fugas no detectadas). Nuestros técnicos certificados usan equipo trazable al CEM (Centro Nacional de Metrología) para calibraciones in situ o en laboratorio.</p>
          
          <ul>
            <li><strong>Proceso:</strong> Verificación volumétrica, prueba de fugas, ajuste electrónico.</li>
            <li><strong>Frecuencia:</strong> Anual obligatoria para NOM.</li>
            <li><strong>Beneficios:</strong> Certificado oficial, reducción de multas (hasta $100,000 MXN por incumplimiento).</li>
          </ul>
          
          <p>Contáctanos para una cotización gratuita. Cobertura en CDMX y todo México.</p>
          <img 
            src={blogGas} 
            alt="Medidor de Gas LP en inspección BASCZAGUI" 
            className="img-fluid mb-3" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '400px', 
              width: 'auto', 
              height: 'auto', 
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }} 
          />
        </>
      ),
      image: blogGas,
      date: '15 Oct 2025',
      category: 'Gas LP'
    },
    {
      id: 2,
      title: 'Verificación de Básculas Industriales: Cumplimiento con NOM-045-SCFI-2004',
      excerpt: 'Aprende sobre la verificación metrológica de básculas para industrias alimentarias y manufactureras. Teaser: Precisión esencial para comercio justo...',
      fullContent: () => (
        <>
          <p>Las básculas industriales son clave en procesos de pesaje para exportación, alimentos y logística. En BASCZAGUI, verificamos conforme a la <strong>NOM-045-SCFI-2004</strong>, que regula instrumentos de pesaje no automáticos.</p>
          
          <p><strong>Servicios Incluidos:</strong></p>
          <ul>
            <li>Pruebas de exactitud (clase III/IV) con pesos patrón certificados.</li>
            <li>Inspección de estructura, sensores y software.</li>
            <li>Emisión de constancia oficial para SEMARNAT y SAT.</li>
          </ul>
          
          <p><strong>Casos de Éxito:</strong> Ayudamos a una fábrica en GAM a calibrar 10 básculas, reduciendo errores del 2% a 0.1%. Visitas en sitio sin parar producción.</p>
          
          <img 
            src={blogBasculas} 
            alt="Báscula industrial en verificación BASCZAGUI" 
            className="img-fluid mb-3" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '400px', 
              width: 'auto', 
              height: 'auto', 
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }} 
          />
          <p>¡Programa tu verificación hoy y evita sanciones!</p>
        </>
      ),
      image: blogBasculas,
      date: '10 Oct 2025',
      category: 'Básculas'
    },
    {
      id: 3,
      title: 'Certificaciones NOM para Equipos de Medición: Guía Completa',
      excerpt: 'Todo lo que necesitas saber sobre certificaciones NOM para medidores y básculas. Teaser: Actualizaciones 2024 y cómo aplicar...',
      fullContent: () => (
        <>
          <p>La familia de Normas Oficiales Mexicanas (NOM) regula la metrología en México. En BASCZAGUI, ofrecemos certificaciones para NOM-001 (Gas), NOM-045 (Pesaje), y más, avaladas por la Entidad Mexicana de Acreditación (EMA).</p>
          
          <h5>Pasos para Certificar:</h5>
          <ol>
            <li><strong>Diagnóstico Inicial:</strong> Evaluamos tu equipo in situ.</li>
            <li><strong>Calibración:</strong> Ajustes con trazabilidad internacional.</li>
            <li><strong>Pruebas:</strong> Ensayos de durabilidad y precisión.</li>
            <li><strong>Certificado:</strong> Documento oficial con sello digital.</li>
          </ol>
          
          <p><strong>Actualizaciones 2024:</strong> Inclusión de IoT en medidores inteligentes. Nuestros servicios cubren desde $5,000 MXN por equipo.</p>
          
          <img 
            src={blogCertificaciones} 
            alt="Certificado NOM para medición BASCZAGUI" 
            className="img-fluid mb-3" 
            style={{ 
              maxWidth: '100%', 
              maxHeight: '400px', 
              width: 'auto', 
              height: 'auto', 
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }} 
          />
          <p>Conviértete en proveedor certificado y gana competitividad.</p>
        </>
      ),
      image: blogCertificaciones,
      date: '05 Oct 2025',
      category: 'Certificaciones'
    }
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  // Debug: Verifica data en consola
  console.log('Blog loaded with', blogPosts.length, 'posts');

  return (
    <>
      <Helmet>
        <title>Blog BASCZAGUI | Calibraciones NOM Gas LP y Básculas</title>
        <meta name="description" content="Artículos sobre inspección de medidores Gas LP, verificación básculas y certificaciones NOM. Tips metrológicos para tu industria en México." />
        <meta name="keywords" content="calibración gas LP, NOM-001, básculas industriales, metrología México" />
        <meta property="og:title" content="Blog BASCZAGUI" />
        <meta property="og:description" content="Expertos en calibraciones NOM" />
        <meta property="og:image" content="/assets/imagenes/hero/hero-bg.jpg" />
      </Helmet>
      
      <div>
        <Navbar />
        
        <main className="container mt-5 pt-5">
          <h1 className="display-4 mb-4 text-center">Blog BASCZAGUI</h1>
          <p className="lead text-center mb-5">Artículos sobre metrología, calibraciones y normas NOM. Mantente actualizado con tips para tu industria.</p>
          
          <div className="row">
            {/* Debug: Log del map */}
            {(() => {
              console.log('Rendering', blogPosts.length, 'cards');
              return blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="col-md-6 col-lg-4 mb-4" 
                  // data-aos="fade-up"  {/* Comenta temporal para test – descomenta después */}
                  // data-aos-duration="800"
                  // data-aos-delay={index * 150}
                >
                  <div className="card shadow-sm h-100">
                    <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '200px', objectFit: 'cover' }} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text flex-grow-1">{post.excerpt}</p>
                      <p className="text-muted small mb-2">
                        <i className="fas fa-calendar-alt me-1"></i>{post.date} | 
                        <i className="fas fa-tag ms-2 me-1"></i>{post.category}
                      </p>
                      <button 
                        className="btn btn-primary btn-custom mt-auto" 
                        onClick={() => openModal(post)}
                      >
                        Leer Más
                      </button>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </main>
        
        <div 
          className={`modal fade ${showModal ? 'show d-block' : ''}`} 
          id="blogModal" 
          tabIndex={-1} 
          aria-labelledby="blogModalLabel" 
          aria-hidden={!showModal}
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="blogModalLabel">
                  {selectedPost?.title}
                </h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={closeModal} 
                  aria-label="Cerrar"
                ></button>
              </div>
              <div className="modal-body">
                {selectedPost && selectedPost.fullContent()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        {showModal && (
          <div 
            className="modal-backdrop fade show" 
            onClick={closeModal}
            style={{ zIndex: 1040 }}
          ></div>
        )}
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
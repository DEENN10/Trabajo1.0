import React, { useEffect } from 'react';  // ¡NUEVO: useEffect para scroll
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';  // useLocation para detectar cambio de ruta
import Navbar from './components/Navbar';  // Navbar global
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Services';  // Crea si no existe (código abajo si necesitas)
import Blog from './pages/Blog';
import Contacto from './pages/Contact';  // Crea si no
import AvisoPrivacidad from './pages/Privacy';  // Crea si no
import PaginaGas from './pages/PaginaGas';
import PaginaBasculas from './pages/PaginaBasculas';

// Componente ScrollToTop – FIX: Scroll al top en cada cambio de ruta
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();  // Detecta ruta actual

  useEffect(() => {
    window.scrollTo(0, 0);  // ¡FIX: Scroll al top (0,0) al cambiar pathname
  }, [pathname]);  // Ejecuta cada vez que cambia la ruta (ej: /nosotros → /contacto)

  return null;  // No renderiza nada (solo lógica)
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* ScrollToTop – Siempre arriba para fix global */}
        <ScrollToTop />
        
        {/* Navbar SIEMPRE VISIBLE */}
        <Navbar />
        
        {/* Main Contenido */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/aviso-privacidad" element={<AvisoPrivacidad />} />
            <Route path="/pagina-gas" element={<PaginaGas />} />
            <Route path="/pagina-basculas" element={<PaginaBasculas />} />
            {/* 404 Opcional */}
            <Route path="*" element={<div className="container my-5"><h1>404 - No Encontrada</h1></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
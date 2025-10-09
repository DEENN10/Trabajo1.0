import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/aviso-privacidad" element={<Privacy />} />
          <Route path="*" element={<div className="container mt-5 pt-5"><h2>404 - Página no encontrada</h2></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
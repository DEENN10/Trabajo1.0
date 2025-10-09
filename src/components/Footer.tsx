import React from 'react';

interface FooterProps {}  // Props vacías por ahora

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">  {/* bg-dark: Fondo oscuro, py-4: Padding vertical */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>BASCZAGUI S.A DE C.V.</h5>
            <p>Inspección de Normas Oficiales Mexicanas. Especialistas en medidores de flujo Gas LP y básculas.</p>
            <p><i className="fas fa-phone"></i> Tel: (55) 1544-4987 | <i className="fas fa-envelope"></i> Email: basczagui@gmail.com</p>  {/* Iconos de Font Awesome */}
          </div>
          <div className="col-md-6 text-end">  {/* text-end: Alinea a la derecha */}
            <p>&copy; 2025 BASCZAGUI S.A DE C.V. Todos los derechos reservados.</p>
            <p>Visibilidad Nacional en inspecciones certificadas.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
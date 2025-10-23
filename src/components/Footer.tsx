import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">  {/* Agregado mb-3 para espacio en móvil */}
            <h5>BASCZAGUI S.A DE C.V.</h5>
            <p className="mb-3">Inspección de Normas Oficiales Mexicanas. Especialistas en medidores de flujo Gas LP y básculas.</p>
            <p><i className="fas fa-phone"></i> Tel: (55) 8870 9958 | <i className="fas fa-envelope"></i> Email: basczagui@gmail.com</p>
          </div>
          <div className="col-md-6 text-md-end text-center">  {/* text-center en móvil para centrar */}
            <p className="mb-2">&copy; 2025 BASCZAGUI S.A DE C.V. Todos los derechos reservados.</p>
            <p>Visibilidad Nacional en inspecciones certificadas.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

interface ServiceCardProps {  // Tipos TS: image (string de import), title y description obligatorios
  image: string;  // Será la URL de la imagen importada
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div className="col-md-6 mb-4">  {/* Columna responsive */}
      <div className="card h-100 shadow-sm">  {/* card de Bootstrap con sombra */}
        <img src={image} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />  {/* Imagen ajustada */}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>  {/* flex-grow-1: Expande el texto */}
          <a href="/contacto" className="btn btn-primary mt-auto">Solicitar Inspección</a>  {/* Botón al final */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
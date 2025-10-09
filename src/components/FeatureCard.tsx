import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: string;  // Clase Font Awesome, ej: 'fas fa-tint'
  title: string;
  description: string;
  linkTo: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, linkTo }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="feature-card card h-100 text-center p-4 border-0 shadow-sm bg-white">
        <div className="card-body">
          <i className={`${icon} text-primary mb-3`} style={{ fontSize: '3rem' }}></i>
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to={linkTo} className="btn btn-outline-primary btn-custom">
            Más Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
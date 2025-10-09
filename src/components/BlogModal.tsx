import React from 'react';

export interface BlogArticle {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  fullContent: string;
}

interface BlogModalProps {
  article: BlogArticle;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ article, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{article.title}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <img 
              src={article.image} 
              alt={article.title} 
              className="img-fluid mb-3 rounded" 
              style={{ maxHeight: '300px', objectFit: 'cover' }} 
            />
            <p className="lead">{article.excerpt}</p>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: article.fullContent }} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
            <a 
              href={`mailto:info@basczagui.com?subject=Consulta sobre ${encodeURIComponent(article.title)}`} 
              className="btn btn-primary btn-custom"
            >
              Contactar por este Artículo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
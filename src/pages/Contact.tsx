import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';  // Tu dependencia (o emailjs-com si cambias)

// Interface (sin cambios)
interface ContactForm {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showAlert, setShowAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Inicializa con tu Public Key
  emailjs.init('3TS0sH7xzSZJQphbR');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es requerido.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido (ej: user@dominio.com).';
    }
    if (formData.telefono && formData.telefono.length < 8) {
      newErrors.telefono = 'Teléfono debe tener al menos 8 dígitos.';
    }
    if (!formData.servicio) newErrors.servicio = 'Selecciona un servicio.';
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Mensaje es requerido.';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'Mensaje debe tener al menos 10 caracteres.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowAlert({ type: 'error', message: 'Por favor, corrige los errores en el formulario.' });
      setTimeout(() => setShowAlert(null), 5000);
      return;
    }

    setIsLoading(true);
    setShowAlert(null);

    try {
      const result = await emailjs.send(
        'service_328u5af',  // Tu Service ID (sin cambios)
        'template_3ct6crt',  // <-- Reemplaza con el ID del nuevo template (ej: 'template_abc123def')
        {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono || 'No proporcionado',
          servicio: formData.servicio,
          mensaje: formData.mensaje,
          fecha: new Date().toLocaleString('es-MX')
        }
      );

      console.log('Email enviado OK:', result.text);
      setShowAlert({ type: 'success', message: '¡Consulta enviada exitosamente! Responderemos en 24 horas.' });
      setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' });
      setTimeout(() => setShowAlert(null), 5000);
    } catch (error) {
      console.error('Error al enviar:', error);
      setShowAlert({ type: 'error', message: 'Ocurrió un error al enviar el mensaje. Por favor inténtalo de nuevo.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Contacto</h1>
        <p className="lead text-center mb-5">Envíanos tu consulta sobre inspecciones, calibraciones o certificaciones. Responderemos en 24 horas.</p>
        
        {showAlert && (
          <div className={`alert alert-${showAlert.type === 'success' ? 'success' : 'danger'} alert-dismissible fade show mb-4`} role="alert">
            {showAlert.message}
            <button type="button" className="btn-close" onClick={() => setShowAlert(null)}></button>
          </div>
        )}
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Formulario de Consulta</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} 
                      id="nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Juan Pérez" 
                      disabled={isLoading}
                      required
                    />
                    {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej: info@tuempresa.com" 
                      disabled={isLoading}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono (Opcional)</label>
                    <input 
                      type="tel" 
                      className={`form-control ${errors.telefono ? 'is-invalid' : ''}`} 
                      id="telefono" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+52 55 1234 5678" 
                      disabled={isLoading}
                    />
                    {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="servicio" className="form-label">Servicio de Interés</label>
                    <select 
                      className={`form-select ${errors.servicio ? 'is-invalid' : ''}`} 
                      id="servicio" 
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      disabled={isLoading}
                      required
                    >
                      <option value="">Selecciona uno</option>
                      <option value="gas-lp">Medidores Gas LP</option>
                      <option value="basculas">Básculas Industriales</option>
                      <option value="certificaciones">Certificaciones NOM</option>
                      <option value="otro">Otro</option>
                    </select>
                    {errors.servicio && <div className="invalid-feedback">{errors.servicio}</div>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea 
                      className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`} 
                      id="mensaje" 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5} 
                      placeholder="Describe tu consulta..." 
                      disabled={isLoading}
                      required
                    ></textarea>
                    {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-custom w-100" 
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Consulta'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="card-title mb-4">Nuestra Ubicación e Informacion.</h3>
                <p className="card-text mb-3">BASCZAGUI S.A DE C.V. – Cobertura nacional, base en CDMX.</p>
                
                <div className="mb-4">
                  <p className="d-flex align-items-center gap-2 mb-2">
                    <i className="fas fa-phone text-primary"></i>
                    <span>(55) 8870 9958</span>
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-2">
                    <i className="fas fa-envelope text-primary"></i>
                    <span><a href="mailto:basczagui@gmail.com">contacto@inspecciones-basczagui.com</a></span>
                  </p>
                  <p className="d-flex align-items-center gap-2 mb-3">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                    <span>Av. 414-A Numero 81, San Juan de Aragon VI Seccion</span>
                  </p>
                </div>
                
                <div 
                  id="map-container" 
                  className="w-100 mb-3" 
                  style={{ height: '250px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #ddd' }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7521.5!2d-99.100!3d19.480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2020000000000%3A0x0000000000000000!2sAv.+414-A+Num.+81%2C+San+Juan+de+Arag%C3%B3n+VI+Secci%C3%B3n%2C+Gustavo+A.+Madero%2C+CDMX!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen  // Fix TS: Booleano implícito
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de Ubicación BASCZAGUI"
                  ></iframe>
                </div>
                
                <div className="text-center">
                  <small className="text-muted">
                    Cobertura: Todo México (visitas en sitio).
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
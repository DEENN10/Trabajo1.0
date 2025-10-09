import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
  return (
    <div>
      <Navbar />
      
      <main className="container mt-5 pt-5">
        <h1 className="display-4 mb-4 text-center">Aviso de Privacidad</h1>
        <p className="lead text-center mb-5">BASCZAGUI S.A DE C.V. protege tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP) y su Reglamento.</p>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="h4 fw-bold mb-3">1. Datos Recopilados</h2>
                <p className="card-text">
                  Recopilamos datos personales a través del formulario de contacto y correos electrónicos: nombre completo, correo electrónico, teléfono, empresa y detalles de servicios (ej: tipo de inspección o calibración requerida). No recopilamos datos sensibles (salud, origen étnico, etc.) sin tu consentimiento expreso.
                </p>
                
                <h2 className="h4 fw-bold mb-3 mt-4">2. Uso de los Datos Personales</h2>
                <p className="card-text">
                  Tus datos se utilizan exclusivamente para: 
                  <ul>
                    <li>Responder a consultas y solicitudes de servicios (inspecciones NOM, calibraciones).</li>
                    <li>Programar citas y visitas en sitio.</li>
                    <li>Enviar información relevante sobre actualizaciones normativas (ej: cambios en NOM-001-SECRE o NOM-045-SCFI).</li>
                    <li>Mejorar nuestros servicios mediante análisis anónimo (no identificable).</li>
                  </ul>
                  No compartimos tus datos con terceros sin tu autorización, excepto con proveedores autorizados (ej: servicios de email como EmailJS) bajo contratos de confidencialidad. No vendemos ni alquilamos datos.
                </p>
                
                <h2 className="h4 fw-bold mb-3 mt-4">3. Derechos ARCO y Cómo Ejercerlos</h2>
                <p className="card-text">
                  Tienes derechos sobre tus datos: Acceso (saber qué información tenemos), Rectificación (corregir inexactitudes), Cancelación (eliminar datos) y Oposición (restringir uso). También revocación de consentimiento.
                </p>
                <ul className="card-text">
                  <li><strong>Acceso:</strong> Solicita copia de tus datos en nuestro poder.</li>
                  <li><strong>Rectificación:</strong> Corrige o actualiza información desactualizada.</li>
                  <li><strong>Cancelación:</strong> Elimina datos cuando ya no sean necesarios.</li>
                  <li><strong>Oposición:</strong> Niega el tratamiento para fines específicos.</li>
                </ul>
                <p className="card-text">
                  Para ejercer estos derechos, envía solicitud escrita a: <strong>Responsable: BAS CZAGUI SA DE CV, Av. Ejemplo 123, Col. Centro, CDMX 06000</strong> o por email a <a href="mailto:info@basczagui.com">info@basczagui.com</a>. Incluye: Nombre, descripción del derecho, datos para verificar identidad y medio para recibir respuesta. Responderemos en máximo 20 días hábiles.
                </p>
                
                <h2 className="h4 fw-bold mb-3 mt-4">4. Medidas de Seguridad y Cookies</h2>
                <p className="card-text">
                  Implementamos medidas técnicas, administrativas y físicas para proteger tus datos contra pérdida, robo o uso no autorizado (encriptación HTTPS, firewalls). Nuestros servidores están en México.
                </p>
                <p className="card-text">
                  <strong>Cookies:</strong> Usamos cookies funcionales para navegación (ej: recordar preferencias de idioma). Cookies de terceros opcionales (Google Analytics para estadísticas anónimas) – puedes rechazarlas en tu navegador. No rastreo comportamental invasivo.
                </p>
                
                <h2 className="h4 fw-bold mb-3 mt-4">5. Transferencias de Datos</h2>
                <p className="card-text">
                  No transferimos datos internacionalmente. Si usamos proveedores externos (ej: email), firman acuerdos de confidencialidad conforme a LFPDPPP.
                </p>
                
                <h2 className="h4 fw-bold mb-3 mt-4">6. Actualizaciones y Contacto</h2>
                <p className="card-text">
                  Este aviso se actualiza periódicamente; la versión vigente es de <strong>Enero 2024</strong>. Revisa regularmente. Para dudas o quejas, contáctanos al email o dirección arriba. Puedes presentar quejas ante el INAI (Instituto Nacional de Transparencia) si no estás satisfecho con nuestra respuesta.
                </p>
                
                <div className="text-center mt-4 border-top pt-3">
                  <p className="text-muted">
                    BASCZAGUI S.A DE C.V. – Comprometidos con tu privacidad. RFC: [Agrega tu RFC]. Tel: +52 55 1234 5678.
                  </p>
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

export default Privacy;
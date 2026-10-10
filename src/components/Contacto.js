import React, { useState, useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { LanguageContext } from '../context/LanguageContext';

export const Contacto = () => {
  const { texts } = useContext(LanguageContext);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const serviceId = 'service_jlh167n';
    const templateId = 'template_759crbb';
    const publicKey = 'aiTH21CIk36h9dwh-';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: texts.mensajeExito
        });
        // Resetear formulario
        setFormData({
          nombre: '',
          apellidos: '',
          email: '',
          telefono: '',
          mensaje: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        setStatus({
          submitted: true,
          success: false,
          message: texts.mensajeError
        });
        setLoading(false);
        console.error('Error enviando email:', error);
      });
  };

  return (
    <div className='page'>
      <h1 className='heading'>{texts.miContacto}</h1>
      
      <div className="contacto-container">
        <form ref={formRef} className="formulario" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre" 
            placeholder={texts.nombre} 
            value={formData.nombre}
            onChange={handleChange}
            required 
            style={{width: '100%', boxSizing: 'border-box'}}
          />
          <input 
            type="text" 
            name="apellidos" 
            placeholder={texts.apellidos} 
            value={formData.apellidos}
            onChange={handleChange}
            required 
            style={{width: '100%', boxSizing: 'border-box'}}
          />
          <input 
            type="email" 
            name="email" 
            placeholder={texts.email} 
            value={formData.email}
            onChange={handleChange}
            required 
            style={{width: '100%', boxSizing: 'border-box'}}
          />
          <input 
            type="tel" 
            name="telefono" 
            placeholder={texts.telefono} 
            value={formData.telefono}
            onChange={handleChange}
            required
            style={{width: '100%', boxSizing: 'border-box'}}
          />
          <textarea 
            name="mensaje" 
            placeholder={texts.motivoContacto}
            value={formData.mensaje}
            onChange={handleChange}
            required
            style={{width: '100%', boxSizing: 'border-box', minHeight: '150px'}}
          ></textarea>
          
          <input 
            type="submit" 
            value={loading ? texts.enviando : texts.enviar} 
            disabled={loading}
            style={{width: '100%', boxSizing: 'border-box'}}
          />
          
          {status.submitted && (
            <div className={`mensaje-estado ${status.success ? 'exito' : 'error'}`}>
              {status.message}
            </div>
          )}
        </form>
        
        <div className="redes-sociales">
          <h3>{texts.siguemeRedes}</h3>
          <div className="red-social">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/javier-beuz%C3%B3n-neva-00086517b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="red-social">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Javibn-jpg" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          <div className="info-contacto">
            <h3>{texts.infoContacto}</h3>
            <p><i className="fas fa-envelope"></i> jbn1031991@gmail.com</p>
            <p><i className="fas fa-phone"></i> +34 664036471</p>
            <p><i className="fas fa-phone"></i> +37 6355450</p>
          </div>
        </div>
      </div>
    </div>
  )
}
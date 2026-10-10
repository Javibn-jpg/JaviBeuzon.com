import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';
import { LanguageContext } from '../context/LanguageContext';

export const Proyecto = () => {
    const { texts, language } = useContext(LanguageContext);
    const [proyecto, setProyecto] = useState({});
    const [selectedImage, setSelectedImage] = useState(0);
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0] || {});
        setSelectedImage(0); // Reset imagen seleccionada
    }, [params.id]);

    // Función para obtener el valor correcto según el idioma
    const getTranslatedValue = (value) => {
        if (!value) return '';
        
        if (typeof value === 'object' && (value.es || value.en)) {
            return value[language] || '';
        }
        
        return value;
    };

    // Función para manejar descarga de archivos
    const handleDownload = (fileName) => {
        if (!fileName) return;
        
        const link = document.createElement('a');
        link.href = `/docs/projects/${fileName}`;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!proyecto.id) return (
        <div className="page loading">
            <div className="loading-spinner"></div>
            <p>{language === 'es' ? 'Cargando...' : 'Loading...'}</p>
        </div>
    );

    // Obtener todas las imágenes del proyecto (imagen principal + imágenes adicionales)
    const allImages = [
        `/images/${proyecto.id}.png`, // Imagen principal
        ...(proyecto.additionalImages || []).map(img => `/images/projects/${proyecto.id}/${img}`)
    ];

    return (
        <div className='page page-work'>
            {/* Galería de imágenes */}
            <div className="project-gallery">
                <div className="main-image">
                    <img 
                        src={allImages[selectedImage]} 
                        alt={`${proyecto.nombre} - ${selectedImage + 1}`} 
                    />
                </div>
                
                {allImages.length > 1 && (
                    <div className="image-thumbnails">
                        {allImages.map((image, index) => (
                            <div 
                                key={index}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                )}
                
                {allImages.length > 1 && (
                    <div className="gallery-navigation">
                        <button 
                            className="nav-btn prev"
                            onClick={() => setSelectedImage(prev => 
                                prev === 0 ? allImages.length - 1 : prev - 1
                            )}
                            disabled={allImages.length <= 1}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <span className="image-counter">
                            {selectedImage + 1} / {allImages.length}
                        </span>
                        <button 
                            className="nav-btn next"
                            onClick={() => setSelectedImage(prev => 
                                prev === allImages.length - 1 ? 0 : prev + 1
                            )}
                            disabled={allImages.length <= 1}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                )}
            </div>

            {/* Información del proyecto */}
            <div className="project-info">
                <div className="project-header">
                    <h1 className='heading'>{proyecto.nombre || ''}</h1>
                    
                    {proyecto.lenguaje && (
                        <span className={`tech-badge large ${proyecto.lenguaje.toLowerCase()}`}>
                            {proyecto.lenguaje}
                        </span>
                    )}
                </div>

                <div className="project-details">
                    <div className="detail-item">
                        <strong>{language === 'es' ? 'Tecnologías:' : 'Technologies:'}</strong>
                        <p>{proyecto.tecnologias || ''}</p>
                    </div>
                    
                    <div className="detail-item">
                        <strong>{texts.categoria || 'Categoría'}:</strong>
                        <p>{getTranslatedValue(proyecto.categorias)}</p>
                    </div>

                    <div className="detail-item description">
                        <strong>{language === 'es' ? 'Descripción:' : 'Description:'}</strong>
                        <p>{getTranslatedValue(proyecto.descripcion)}</p>
                    </div>

                    {/* Características adicionales si existen */}
                    {proyecto.caracteristicas && (
                        <div className="detail-item">
                            <strong>{language === 'es' ? 'Características:' : 'Features:'}</strong>
                            <ul className="features-list">
                                {getTranslatedValue(proyecto.caracteristicas).map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Información técnica adicional */}
                    {proyecto.informacionTecnica && (
                        <div className="detail-item">
                            <strong>{language === 'es' ? 'Información Técnica:' : 'Technical Information:'}</strong>
                            <div className="tech-info">
                                {Object.entries(getTranslatedValue(proyecto.informacionTecnica)).map(([key, value]) => (
                                    <div key={key} className="tech-info-item">
                                        <span className="tech-label">{key}:</span>
                                        <span className="tech-value">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Acciones del proyecto */}
                <div className="project-actions">
                    {proyecto.url && (
                        <a 
                            href={"https://"+proyecto.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="action-btn primary"
                        >
                            <i className="fas fa-external-link-alt"></i>
                            {texts.verProyecto || 'Ver Proyecto'}
                        </a>
                    )}

                    {proyecto.repositorio && (
                        <a 
                            href={proyecto.repositorio} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="action-btn secondary"
                        >
                            <i className="fab fa-github"></i>
                            {language === 'es' ? 'Ver Código' : 'View Code'}
                        </a>
                    )}

                    {proyecto.downloadFile && (
                        <button 
                            onClick={() => handleDownload(proyecto.downloadFile)}
                            className="action-btn download"
                        >
                            <i className="fas fa-download"></i>
                            {language === 'es' ? 'Descargar Documentación' : 'Download Documentation'}
                        </button>
                    )}

                    {/* Botón de descarga adicional para archivos específicos */}
                    {proyecto.additionalFiles && proyecto.additionalFiles.length > 0 && (
                        <div className="additional-downloads">
                            <h3>{language === 'es' ? 'Archivos adicionales:' : 'Additional files:'}</h3>
                            {proyecto.additionalFiles.map((file, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleDownload(file.fileName)}
                                    className="action-btn small"
                                >
                                    <i className="fas fa-file-download"></i>
                                    {getTranslatedValue(file.name)}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Estado del proyecto */}
                {proyecto.estado && (
                    <div className="project-status">
                        <span className={`status-badge ${proyecto.estado.toLowerCase()}`}>
                            {language === 'es' ? (
                                proyecto.estado === 'completed' ? 'Completado' :
                                proyecto.estado === 'in-progress' ? 'En Desarrollo' :
                                proyecto.estado === 'planned' ? 'Planificado' : proyecto.estado
                            ) : proyecto.estado}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}
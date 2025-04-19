import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';
import { LanguageContext } from '../context/LanguageContext';

export const Proyecto = () => {
    const { texts, language } = useContext(LanguageContext);
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0] || {});
    }, [params.id]);

    // Función para obtener el valor correcto según el idioma
    const getTranslatedValue = (value) => {
        if (!value) return '';
        
        if (typeof value === 'object' && (value.es || value.en)) {
            return value[language] || '';
        }
        
        return value;
    };

    if (!proyecto.id) return <div className="page loading">Cargando...</div>;

    return (
        <div className='page page-work'>
            <div className="mask">
                <img src={"/images/"+proyecto.id+".png"} alt={proyecto.nombre || ''} />
            </div>
            <h1 className='heading'>{proyecto.nombre || ''}</h1>
            <p>{proyecto.tecnologias || ''}</p>
            <p>{getTranslatedValue(proyecto.descripcion)}</p>
            <p><strong>{texts.categoria || 'Categoría'}:</strong> {getTranslatedValue(proyecto.categorias)}</p>
            <a href={"https://"+proyecto.url} target="_blank" rel="noopener noreferrer">{texts.verProyecto}</a>
        </div>
    )
}
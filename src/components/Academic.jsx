import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const diplomaImage = `${import.meta.env.BASE_URL}assets/academic/TITULO ITLA.pdf`;
const diplomaPreview = `${import.meta.env.BASE_URL}assets/academic/TITULO ITLA-preview.jpg`;

const Academic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-heading">
        <p className="eyebrow">Formación</p>
        <h2>Mi título <span className="gradient-text">universitario</span></h2>
        <p>La base académica que sustenta mi trabajo con datos, automatización e inteligencia artificial.</p>
      </div>
      <article className="academic-card academic-featured">
        <div className="academic-placeholder" onClick={() => setIsOpen(true)} role="button" tabIndex={0} onKeyDown={(event) => event.key === 'Enter' && setIsOpen(true)}>
          <img src={diplomaPreview} alt="Vista previa del diploma de Ciencia de Datos" />
          <button className="zoom-hint" type="button" onClick={(event) => { event.stopPropagation(); setIsOpen(true); }}>
            <Maximize2 size={16} /> Ver en grande
          </button>
        </div>
        <div className="academic-copy">
          <p className="eyebrow">Título académico</p>
          <h3>Tecnólogo en Analítica y Ciencia de Datos</h3>
          <p className="muted">Instituto Tecnológico de Las Américas (ITLA)</p>
          <p className="muted">Graduado</p>
          <p>Formación enfocada en convertir información en soluciones medibles mediante análisis, programación y modelos de datos.</p>
          <a className="button-secondary academic-open" href={diplomaImage} target="_blank" rel="noopener noreferrer">Abrir documento original</a>
        </div>
      </article>
      {isOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Vista ampliada del diploma" onClick={() => setIsOpen(false)}>
          <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Cerrar"><X /></button>
          <div className="academic-modal">
            <img src={diplomaPreview} alt="Diploma de Ciencia de Datos ampliado" onClick={(event) => event.stopPropagation()} />
            <a className="button-primary" href={diplomaImage} target="_blank" rel="noopener noreferrer">Abrir PDF original</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Academic;

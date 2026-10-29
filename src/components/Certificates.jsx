import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { certificates } from '@/data/portfolio';
import importedCertificates from '@/data/certificates.json';

const isPdf = (file = '') => file.toLowerCase().endsWith('.pdf');
const categoryFor = (certificate) => {
  const title = certificate.title.toLowerCase();
  if (title.includes('data engineer') || title.includes('data engineering') || title.includes('etl') || title.includes('airflow')) return 'Ingeniería de datos';
  if (title.includes('aws') || title.includes('cloud')) return 'Cloud';
  if (title.includes('sql') || title.includes('database') || title.includes('snowflake')) return 'SQL y bases de datos';
  if (title.includes('python') || title.includes('pandas')) return 'Python';
  if (title.includes('git')) return 'Herramientas';
  if (certificate.category === 'Ciencia de datos') return 'Ciencia de datos';
  if (certificate.category === 'Análisis de datos') return 'Análisis de datos';
  if (certificate.category === 'SQL') return 'SQL y bases de datos';
  return 'Otros';
};

const imported = importedCertificates.map((certificate, index) => ({
  ...certificate,
  id: `imported-${index}-${certificate.file}`,
  category: categoryFor(certificate),
  image: `${import.meta.env.PROD ? '/Mi-Portafolio' : ''}/assets/certificates/${certificate.file}`,
  preview: `${import.meta.env.PROD ? '/Mi-Portafolio' : ''}/assets/certificates/${certificate.file.replace(/\.pdf$/i, '-preview.jpg')}`,
}));

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const allCertificates = [...certificates, ...imported];
  const categoryOrder = [
    'Ingeniería de datos',
    'Ciencia de datos',
    'Análisis de datos',
    'Cloud',
    'Python',
    'SQL y bases de datos',
    'Herramientas',
    'Otros',
  ];
  const categories = categoryOrder.filter((category) => allCertificates.some((certificate) => categoryFor(certificate) === category));
  const groupedCertificates = categories.map((category) => ({
    category,
    certificates: allCertificates.filter((certificate) => categoryFor(certificate) === category),
  }));

  const toggleCategory = (category) => {
    setExpandedCategories((current) => current.includes(category)
      ? current.filter((item) => item !== category)
      : [...current, category]);
  };

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-heading">
        <p className="eyebrow">Aprendizaje continuo</p>
        <h2>Mis <span className="gradient-text">certificaciones</span></h2>
        <p>Selecciona un área para desplegar sus certificaciones. Cada documento conserva su formato original y puede abrirse en una vista ampliada.</p>
      </div>
      <div className="certificate-accordion">
        {groupedCertificates.map(({ category, certificates: categoryCertificates }) => {
          const isExpanded = expandedCategories.includes(category);
          return (
            <section className={`certificate-group ${isExpanded ? 'is-expanded' : ''}`} key={category}>
              <button className="certificate-group-toggle" type="button" onClick={() => toggleCategory(category)} aria-expanded={isExpanded}>
                <span><strong>{category}</strong><small>{categoryCertificates.length} certificaciones</small></span>
                <span className="certificate-chevron" aria-hidden="true">⌄</span>
              </button>
              {isExpanded && (
                <div className="certificate-grid">
                  {categoryCertificates.map((cert) => (
                    <article className="certificate-card" key={cert.id}>
                      <button className="certificate-image" onClick={() => setSelected(cert)} aria-label={`Ampliar ${cert.title}`}>
                        <img src={cert.preview || cert.image} alt={cert.title} loading="lazy" />
                      </button>
                      <div className="certificate-body">
                        <span className="tag">{cert.category}</span>
                        <h3>{cert.title}</h3>
                        <p className="muted">{cert.issuer}</p>
                        {cert.date && <p className="certificate-date">{new Date(`${cert.date}T12:00:00`).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>}
                        {cert.link && <a href={cert.link} target="_blank" rel="noopener noreferrer">Verificar credencial <ExternalLink size={14} /></a>}
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
      {selected && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Vista de ${selected.title}`} onClick={() => setSelected(null)}>
          <button className="modal-close" onClick={() => setSelected(null)} aria-label="Cerrar"><X /></button>
          <div className="certificate-modal">
            <img src={selected.preview || selected.image} alt={selected.title} onClick={(event) => event.stopPropagation()} />
            <div><h3>{selected.title}</h3><p>{selected.issuer}</p></div>
            {isPdf(selected.file) && <a className="button-primary" href={selected.image} target="_blank" rel="noopener noreferrer">Abrir PDF original</a>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;

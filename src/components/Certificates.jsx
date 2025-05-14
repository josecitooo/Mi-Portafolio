import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);

  // Cargar certificados desde localStorage al montar el componente
  useEffect(() => {
    const savedCertificates = localStorage.getItem('portfolioCertificates');
    if (savedCertificates) {
      setCertificates(JSON.parse(savedCertificates));
    }
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mis <span className="gradient-text">Certificados</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Aquí puedes ver algunos de los certificados que he obtenido a lo largo de mi carrera profesional.
        </motion.p>
      </div>

      {/* Mensaje si no hay certificados */}
      {certificates.length === 0 && (
        <motion.p 
          className="text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Aún no hay certificados disponibles.
        </motion.p>
      )}

      {/* Lista de certificados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {cert.imagePreview ? (
              <div className="w-full h-40 mb-4 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <img src={cert.imagePreview} alt={cert.imageAlt} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-full h-40 mb-4 rounded-md bg-gray-100 flex items-center justify-center">
                <Award className="w-16 h-16 text-gray-400" />
              </div>
            )}

            <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
            <p className="text-sm text-gray-600 mb-1">Emitido por: {cert.issuer}</p>
            <p className="text-sm text-gray-500 mb-3">Fecha: {new Date(cert.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            {cert.link && (
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
              >
                Ver Certificado <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
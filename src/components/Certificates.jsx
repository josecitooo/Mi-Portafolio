import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

// Función para obtener la ruta base correcta
const getBasePath = () => {
  return import.meta.env.PROD ? '/Mi-Portafolio' : '';
};

// Lista fija de certificados
const certificates = [
  // PYTHON - Ordenados por nivel/fecha
  {
    id: 1747224019915,
    title: "Python Data Science y Machine Learning",
    issuer: "Federico Garay - Udemy",
    date: "2025-08-02",
    imageAlt: "Certificado de Python Data Science y Machine Learning",
    imageDesc: "Certificado de Python Data Science y Machine Learning emitido por Federico Garay - Udemy",
    imagePreview: `${getBasePath()}/assets/certificates/Python Data Science y Machine Learning - Udemy.jpg`,
    link: "https://www.udemy.com/certificate/UC-50afeb06-4caf-4bc0-bc01-66082c288a1f/"
  },
  {
    id: 1747224269895,
    title: "Python para Ciencia de Datos",
    issuer: "A2 Capacitacion",
    date: "2025-01-03",
    imageAlt: "Certificado de Python para Ciencia de Datos",
    imageDesc: "Certificado de Python para Ciencia de Datos emitido por A2 Capacitacion",
    imagePreview: `${getBasePath()}/assets/certificates/Certificado Python A2.jpg`,
    link: "https://cursos.a2capacitacion.com/courses/1503101/certificate"
  },
  {
    id: 1747224118847,
    title: "Python Avanzado",
    issuer: "Federico Garay - Udemy",
    date: "2024-09-11",
    imageAlt: "Certificado de Python Avanzado",
    imageDesc: "Certificado de Python Avanzado emitido por Federico Garay - Udemy",
    imagePreview: `${getBasePath()}/assets/certificates/Python - Udemy.jpg`,
    link: "https://www.udemy.com/certificate/UC-62734aa0-29b3-4eb8-bf77-e30cbe23d2a9/"
  },
  {
    id: 1747224565319,
    title: "Python",
    issuer: "Kaggle",
    date: "2024-10-31",
    imageAlt: "Certificado de Python",
    imageDesc: "Certificado de Python emitido por Kaggle",
    imagePreview: `${getBasePath()}/assets/certificates/Python - Kaggle.png`,
    link: "https://www.kaggle.com/learn/certification/josecailo/python"
  },
  {
    id: 1747224630407,
    title: "Pandas",
    issuer: "Kaggle",
    date: "2024-11-02",
    imageAlt: "Certificado de Pandas",
    imageDesc: "Certificado de Pandas emitido por Kaggle",
    imagePreview: `${getBasePath()}/assets/certificates/Pandas - Kaggle.png`,
    link: "https://www.kaggle.com/learn/certification/josecailo/pandas"
  },
  
  // EXCEL - Ordenados por fecha
  {
    id: 1747224425967,
    title: "Dashboards y Analisis de Datos con Excel",
    issuer: "Federico Garay - Udemy",
    date: "2024-09-14",
    imageAlt: "Certificado de Dashboards y Analisis de Datos con Excel",
    imageDesc: "Certificado de Dashboards y Analisis de Datos con Excel emitido por Federico Garay - Udemy",
    imagePreview: `${getBasePath()}/assets/certificates/Tablas Dinámicas - Udemy.jpg`,
    link: "https://www.udemy.com/certificate/UC-c3640c8b-873f-42ae-a6cf-2b054a17fe37/"
  },
  {
    id: 1747224340819,
    title: "Excel Aplicado al Analisis Financiero",
    issuer: "Federico Garay - Udemy",
    date: "2024-05-16",
    imageAlt: "Certificado de Excel Aplicado al Analisis Financiero",
    imageDesc: "Certificado de Excel Aplicado al Analisis Financiero emitido por Federico Garay - Udemy",
    imagePreview: `${getBasePath()}/assets/certificates/Excel Financiero - Udemy.jpg`,
    link: "https://www.udemy.com/certificate/UC-5675879d-d537-4cd3-8038-227ad388ed01/"
  },
  
  // SQL
  {
    id: 1747224425967,
    title: "SQL Avanzado",
    issuer: "A2 Capacitacion",
    date: "2025-08-13",
    imageAlt: "Certificado de SQL Avanzado",
    imageDesc: "Certificado de SQL Avanzado emitido por A2 Capacitacion",
    imagePreview: `${getBasePath()}/assets/certificates/Certificado SQL - A2 Capacitacion.jpg`,
    link: "https://cursos.a2capacitacion.com/courses/1297623/certificate"
  },
  {
    id: 8,
    title: "SQL Avanzado",
    issuer: "HackerRank",
    date: "2025-05-25",
    imageAlt: "Certificado de SQL Avanzado",
    imageDesc: "Certificado de SQL Avanzado emitido por HackerRank",
    imagePreview: `${getBasePath()}/assets/certificates/SQL AVANZADO.png`,
    link: "https://www.hackerrank.com/certificates/iframe/508991ad621c"
  },
  
  // POWER BI
  {
    id: 1747224164850,
    title: "Business Intelligence con Power BI",
    issuer: "Instituto Tecnologico de Las Americas (ITLA)",
    date: "2024-12-20",
    imageAlt: "Certificado de Business Intelligence con Power BI",
    imageDesc: "Certificado de Business Intelligence con Power BI emitido por Instituto Tecnologico de Las Americas (ITLA)",
    imagePreview: `${getBasePath()}/assets/certificates/Certificado Business Intelligence Power BI.jpg`,
    link: ""
  },
  
  // ANÁLISIS DE DATOS GENERAL - Ordenados por fecha
  {
    id: 1747224019914,
    title: "Analisis de Datos Profesional",
    issuer: "Microsoft - LinkedIn Learning",
    date: "2025-02-08",
    imageAlt: "Certificado de Analisis de Datos Profesional",
    imageDesc: "Certificado de Analisis de Datos Profesional emitido por Microsoft - LinkedIn Learning",
    imagePreview: `${getBasePath()}/assets/certificates/Certificado de Finalizacion - Analisis de datos LinkedIn.jpg`,
    link: "https://www.linkedin.com/learning/certificates/17b3fc830115bc689c6974a75a20ba00a4c9525b9a4b3469410302b3596d24dd?trk=share_certificate"
  },
  {
    id: 1747224889215,
    title: "Aplicación de Conocimientos en Analisis de Datos",
    issuer: "LinkedIn Learning",
    date: "2025-02-07",
    imageAlt: "Certificado de Aplicación de Conocimientos en Analisis de Datos",
    imageDesc: "Certificado de Aplicación de Conocimientos en Analisis de Datos emitido por LinkedIn Learning",
    imagePreview: `${getBasePath()}/assets/certificates/Certificado - Aplicacion de Conocimientos_page-0001.jpg`,
    link: "https://www.linkedin.com/learning/certificates/57be679cca9d505f4ff60bb1095382133af3da2fb9c2af64b2c96f5b85ef223f?trk=share_certificate"
  }
];

const Certificates = () => {
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

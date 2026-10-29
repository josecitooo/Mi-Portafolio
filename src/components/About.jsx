
import React from 'react';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/data-science.avif';
import { siteConfig } from '@/data/portfolio';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="section-heading">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          
          Sobre <span className="gradient-text">Mí</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg z-0"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-lg z-0"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src={fotoPerfil}
              alt="Foto de perfil profesional de Jose Carlos Fernandez"
              className="w-full h-auto rounded-lg"
              
/>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="eyebrow">Perfil profesional</p>
          <h3 className="text-2xl font-bold mb-4">Graduado en Ciencia de Datos, enfocado en resultados</h3>
          <p className="text-gray-600 mb-6">
            Soy Jose Carlos Fernandez, analista y científico de datos graduado del Instituto Tecnológico de Las Américas (ITLA). Me interesa transformar información en decisiones claras y accionables.
          </p>
          <p className="text-gray-600 mb-6">
            Trabajo con análisis, visualización, Python, SQL y proyectos de aprendizaje automático, comunicando hallazgos complejos de forma sencilla.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-700">Análisis de Datos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-700">Ciencia de Datos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-700">Modelado Predictivo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600"></div>
              <span className="text-gray-700">Visualización de Datos</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="button-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contáctame
            </a>
            <a 
              href={siteConfig.cvUrl}
              download 
              className="button-secondary"
            >
              Descargar CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

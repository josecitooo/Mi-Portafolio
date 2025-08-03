
import React from 'react';
import { motion } from 'framer-motion';
import fotoPerfil from '../assets/data-science.avif';

const About = () => {
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
          <h3 className="text-2xl font-bold mb-4">Analista y Científico de Datos Apasionado</h3>
          <p className="text-gray-600 mb-6">
            Soy Jose Carlos Fernandez, un analista y científico de datos con una sólida trayectoria ayudando a las organizaciones a tomar decisiones más inteligentes a través del poder de los datos. Mi pasión es descubrir insights ocultos y comunicar hallazgos complejos de manera clara y accionable.
          </p>
          <p className="text-gray-600 mb-6">
            Me especializo en análisis estadístico, modelado predictivo y visualización de datos. Disfruto transformando grandes volúmenes de información en estrategias que impulsan el crecimiento y la eficiencia.
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
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              Contáctame
            </a>
            <a 
              href="/Mi-Portafolio/assets/Jose Carlos CV ATS.pdf"
              download 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
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

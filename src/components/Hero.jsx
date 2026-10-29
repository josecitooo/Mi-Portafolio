import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Instagram } from 'lucide-react';
import joseCarlos from '../assets/JOSE CARLOS FERNANDEZ FOTO.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/45 to-white/55 z-0"></div>
      
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/30"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 1.1, 1],
              opacity: [0, 0.3, 0.2, 0.1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{ 
              duration: 10 + i * 5, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Imagen personal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="hero-photo-wrap mb-8"
          >
            <img 
              src={joseCarlos} 
              alt="Jose Carlos Fernandez" 
              className="hero-photo"
            />
          </motion.div>
      
          {/* Texto "Analista y Científico de Datos" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="hero-eyebrow">
              Analista y Cientifico de datos
            </span>
          </motion.div>
      
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-title"
          >
            <span className="hero-greeting">Hola, soy</span>{' '}
            <span className="hero-name">Jose Carlos Fernandez</span>
          </motion.h1>
      
          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-subtitle"
          >
            Transformo datos en conocimiento y estrategias para impulsar decisiones empresariales.
          </motion.p>
      
          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="button-primary px-8"
              onClick={scrollToContact}
            >
              Contáctame
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="button-secondary"
              onClick={scrollToProjects}
            >
              Ver Proyectos
            </Button>
          </motion.div>
      
          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href="https://github.com/josecitooo" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/josefernandezopen" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/josecaarlos._/" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
      >
        <p className="text-sm text-gray-500 mb-2">Chequeame!</p>
        <ArrowDown className="w-6 h-6 text-gray-500 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
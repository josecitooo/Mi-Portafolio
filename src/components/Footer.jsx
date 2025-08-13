
import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SocialLinks from '@/components/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Enlaces Rápidos',
      links: [
        { name: 'Inicio', href: '#home' },
        { name: 'Sobre Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Certificados', href: '#certificates' },
        { name: 'Contacto', href: '#contact' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' }, // Example: Changed to a non-hash link
        { name: 'Descargar CV', href: '/Mi-Portafolio/assets/Jose Carlos CV (Spanish).pdf', download: true }, // CV actualizado descargable, contratame jeje        git commit -m "Primera versión del portafolio"
      ],
    },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For external links or non-hash internal links, let the browser handle it
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Jose C. Fernandez
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 mb-6"
            >
              Analista y científico de datos especializado en transformar datos en conocimiento.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <SocialLinks />
            </motion.div>
          </div>
          
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * columnIndex }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-4 text-gray-200"
              >
                {column.title}
              </motion.h4>
              {column.isSocial ? (
                <div className="flex space-x-2">
                   {/* Los iconos de redes sociales ya se muestran bajo el nombre o en SocialLinks */}
                </div>
              ) : (
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * columnIndex + 0.05 * linkIndex }}
                      viewport={{ once: true }}
                    >
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                        onClick={(e) => handleLinkClick(e, link.href)}
                        {...(link.download ? { download: true } : {})}
                        {...(!link.href.startsWith('#') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Jose Carlos Fernandez. Todos los derechos reservados.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm flex items-center"
            >
              Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" /> en República Dominicana
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

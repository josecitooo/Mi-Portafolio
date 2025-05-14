
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', section: 'home' },
    { name: 'Sobre mí', section: 'about' },
    { name: 'Proyectos', section: 'projects' },
    { name: 'Habilidades', section: 'skills' },
    { name: 'Certificados', section: 'certificates' },
    { name: 'Contacto', section: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#home" 
              className="text-xl font-bold gradient-text"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Jose C. Fernandez
            </a>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.section}
                href={`#${link.section}`}
                className={`nav-link ${
                  activeSection === link.section ? 'active-nav-link' : ''
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.section);
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Button 
                className="ml-4 gradient-bg"
                onClick={() => scrollToSection('contact')}
              >
                Contáctame
              </Button>
            </motion.div>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.section}
                  href={`#${link.section}`}
                  className={`py-2 px-4 rounded-md ${
                    activeSection === link.section
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.section);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full gradient-bg mt-2"
                onClick={() => scrollToSection('contact')}
              >
                Contáctame
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

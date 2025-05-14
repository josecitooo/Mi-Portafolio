
import React from 'react';
import { motion } from 'framer-motion';
import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';

const Contact = () => {
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
          <span className="gradient-text">Contáctame</span>
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
          ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy aquí para ayudarte. Completa el formulario y me pondré en contacto contigo lo antes posible.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:col-span-1 bg-white rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-bold mb-6">Información de Contacto</h3>
          <ContactInfo />
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Sígueme</h4>
            <SocialLinks />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-bold mb-6">Envíame un Mensaje</h3>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

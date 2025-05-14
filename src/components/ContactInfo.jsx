import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5 text-blue-600" />,
    title: 'Email',
    value: 'fernandezjosecarlos61@gmail.com',
    link: 'mailto:fernandezjosecarlos61@gmail.com',
  },
  {
    icon: <Phone className="w-5 h-5 text-blue-600" />,
    title: 'Teléfono',
    value: '+1 849 356 8680',
    link: 'tel:+18493568680',
  },
  {
    icon: <MapPin className="w-5 h-5 text-blue-600" />,
    title: 'Ubicación',
    value: 'Duarte, República Dominicana',
    link: '#',
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      {contactDetails.map((info, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex items-start gap-4"
        >
          <div className="p-3 bg-blue-50 rounded-full">{info.icon}</div>
          <div>
            <h4 className="text-sm text-gray-500">{info.title}</h4>
            <a
              href={info.link}
              className="text-gray-800 hover:text-blue-600 transition-colors"
            >
              {info.value}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContactInfo;
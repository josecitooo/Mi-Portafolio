import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false); // Estado para el mensaje de éxito

  const sendEmail = (e) => {
    e.preventDefault();

    (emailjs
      .sendForm(
        'service_93u8hn5', // Service ID
        'template_85sjvzh', // Template ID
        form.current,
        'tbVQFCzZg9DZrqfQ2' // Public Key
      )
      .then(
        (result) => {
          setSuccessMessage(true); // Muestra el mensaje de éxito
          form.current.reset(); // Limpia el formulario
          setTimeout(() => setSuccessMessage(false), 5000); // Oculta el mensaje después de 5 segundos
        },
        (error) => {
          console.error('Error al enviar el mensaje:', error); // Muestra el error en la consola
          alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
          ));
    
      };

  return (
    <div>
      {/* Mensaje de éxito */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg shadow-lg"
        >
          ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto. 😊
        </motion.div>
      )}

      {/* Formulario */}
      {/* Formulario */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Campos ocultos necesarios para EmailJS */}
        <input type="hidden" name="title" value="Formulario de Contacto" />
        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </Label>
            <Input
              type="text"
              id="name"
              name="name" // ✅ Corregido para que coincida con la plantilla EmailJS
              required
              className="contact-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </Label>
            <Input
              type="email"
              id="email"
              name="email" // ✅ Corregido para que coincida con la plantilla EmailJS
              required
              className="contact-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu.email@ejemplo.com"
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensaje
          </Label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="contact-input resize-none w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu mensaje aquí..."
          ></textarea>
        </div>

        <Button
          type="submit"
          className="w-full gradient-bg text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Enviar Mensaje
        </Button>
      </form>

    </div>
  );
};

export default ContactForm;
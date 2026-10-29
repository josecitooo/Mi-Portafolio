import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactConfig } from '@/data/contact';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
  company: '',
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    const fields = [
      ['name', 'Escribe tu nombre.'],
      ['email', 'Escribe tu correo electrónico.'],
      ['subject', 'Indica el motivo del contacto.'],
      ['message', 'Escribe tu mensaje.'],
    ];

    for (const [field, message] of fields) {
      if (!formData[field].trim()) {
        return message;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return 'Escribe un correo electrónico válido.';
    }

    if (formData.name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres.';
    }

    if (formData.subject.trim().length < 3) {
      return 'El motivo debe tener al menos 3 caracteres.';
    }

    if (formData.message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres.';
    }

    return '';
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    if (formData.company.trim()) {
      return;
    }

    const validationMessage = validateForm();
    if (validationMessage) {
      setStatus({ type: 'error', message: validationMessage });
      return;
    }

    if (!contactConfig.web3FormsAccessKey) {
      setStatus({
        type: 'error',
        message: 'El formulario todavía no está configurado. Agrega la clave de Web3Forms en .env.local.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const requestData = new FormData(event.currentTarget);
      requestData.set('access_key', contactConfig.web3FormsAccessKey);
      requestData.set('subject', `Contacto del portafolio: ${formData.subject.trim()}`);
      requestData.set('from_name', formData.name.trim());
      requestData.set('email', formData.email.trim());
      requestData.set('message', formData.message.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: requestData,
      });
      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error('Web3Forms devolvió una respuesta no válida.');
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Web3Forms rechazó el envío.');
      }

      setFormData(initialForm);
      setStatus({
        type: 'success',
        message: 'Mensaje enviado correctamente. Gracias por contactarme.',
      });
    } catch (error) {
      console.error('Error al enviar el formulario de contacto:', error);
      setStatus({
        type: 'error',
        message: error.message || 'No se pudo enviar el mensaje. Inténtalo nuevamente en unos minutos.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {status.type !== 'idle' && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`contact-status contact-status-${status.type}`}
        >
          {status.message}
        </motion.div>
      )}

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={sendMessage}
        noValidate
        className="contact-form"
      >
        <input type="hidden" name="access_key" value={contactConfig.web3FormsAccessKey} />
        <input type="hidden" name="from_name" value={formData.name} />
        <div className="contact-honeypot" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            tabIndex="-1"
            autoComplete="off"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              minLength={2}
              value={formData.name}
              onChange={handleChange}
              className="contact-input"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="contact-input"
              placeholder="tu.email@ejemplo.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="subject">Motivo del contacto</Label>
          <Input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            value={formData.subject}
            onChange={handleChange}
            className="contact-input"
            placeholder="Proyecto, oportunidad laboral, consulta..."
          />
        </div>

        <div>
          <Label htmlFor="message">Mensaje</Label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="contact-input resize-none"
            placeholder="Cuéntame en qué puedo ayudarte..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="button-primary w-full gap-2"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

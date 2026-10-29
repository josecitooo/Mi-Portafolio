export const contactConfig = {
  email: 'fernandezjosecarlos61@gmail.com',
  whatsappNumber: '18493568680',
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '',
};

export const whatsappMessage = encodeURIComponent(
  'Hola Jose Carlos, vi tu portafolio y me gustaría conversar sobre una oportunidad o proyecto de análisis y ciencia de datos.'
);

export const whatsappUrl = `https://wa.me/${contactConfig.whatsappNumber}?text=${whatsappMessage}`;

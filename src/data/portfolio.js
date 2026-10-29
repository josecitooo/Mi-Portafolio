export const siteConfig = {
  cvUrl: '/Mi-Portafolio/assets/Jose Carlos Fernandez CV.pdf',
  githubUrl: 'https://github.com/josecitooo',
  linkedinUrl: 'https://www.linkedin.com/in/josefernandezopen',
  instagramUrl: 'https://www.instagram.com/josecaarlos._/',
};

const basePath = import.meta.env.PROD ? '/Mi-Portafolio' : '';

export const certificates = [
  ['Python Data Science y Machine Learning', 'Federico Garay - Udemy', '2025-08-02', 'Python Data Science y Machine Learning - Udemy.jpg', 'https://www.udemy.com/certificate/UC-50afeb06-4caf-4bc0-bc01-66082c288a1f/'],
  ['Python para Ciencia de Datos', 'A2 Capacitacion', '2025-01-03', 'Certificado Python A2.jpg', 'https://cursos.a2capacitacion.com/courses/1503101/certificate'],
  ['Python Avanzado', 'Federico Garay - Udemy', '2024-09-11', 'Python - Udemy.jpg', 'https://www.udemy.com/certificate/UC-62734aa0-29b3-4eb8-bf77-e30cbe23d2a9/'],
  ['Python', 'Kaggle', '2024-10-31', 'Python - Kaggle.png', 'https://www.kaggle.com/learn/certification/josecailo/python'],
  ['Pandas', 'Kaggle', '2024-11-02', 'Pandas - Kaggle.png', 'https://www.kaggle.com/learn/certification/josecailo/pandas'],
  ['Dashboards y Analisis de Datos con Excel', 'Federico Garay - Udemy', '2024-09-14', 'Tablas Dinámicas - Udemy.jpg', 'https://www.udemy.com/certificate/UC-c3640c8b-873f-42ae-a6cf-2b054a17fe37/'],
  ['Excel Aplicado al Analisis Financiero', 'Federico Garay - Udemy', '2024-05-16', 'Excel Financiero - Udemy.jpg', 'https://www.udemy.com/certificate/UC-5675879d-d537-4cd3-8038-227ad388ed01/'],
  ['SQL Avanzado', 'A2 Capacitacion', '2025-08-13', 'Certificado SQL - A2 Capacitacion.jpg', 'https://cursos.a2capacitacion.com/courses/1297623/certificate'],
  ['SQL Avanzado', 'HackerRank', '2025-05-25', 'SQL AVANZADO.png', 'https://www.hackerrank.com/certificates/iframe/508991ad621c'],
  ['Business Intelligence con Power BI', 'Instituto Tecnologico de Las Americas (ITLA)', '2024-12-20', 'Certificado Business Intelligence Power BI.jpg', ''],
  ['Analisis de Datos Profesional', 'Microsoft - LinkedIn Learning', '2025-02-08', 'Certificado de Finalizacion - Analisis de datos LinkedIn.jpg', 'https://www.linkedin.com/learning/certificates/17b3fc830115bc689c6974a75a20ba00a4c9525b9a4b3469410302b3596d24dd?trk=share_certificate'],
  ['Aplicación de Conocimientos en Analisis de Datos', 'LinkedIn Learning', '2025-02-07', 'Certificado - Aplicacion de Conocimientos_page-0001.jpg', 'https://www.linkedin.com/learning/certificates/57be679cca9d505f4ff60bb1095382133af3da2fb9c2af64b2c96f5b85ef223f?trk=share_certificate'],
].map(([title, issuer, date, image, link], index) => ({
  id: `${date}-${index}`,
  title,
  issuer,
  date,
  category: title.includes('SQL') ? 'SQL' : title.includes('Python') || title === 'Pandas' ? 'Ciencia de datos' : 'Análisis de datos',
  description: `Certificación de ${title} emitida por ${issuer}.`,
  image: `${basePath}/assets/certificates/${image}`,
  link,
}));

export const projects = [
  {
    title: 'Notebooks',
    description: 'Repositorio dedicado al almacenamiento y gestión de Jupyter Notebooks.',
    tags: ['Jupyter', 'Python', 'Data Science', 'R'],
    image: 'notebook.gif',
    codeLink: 'https://github.com/josecitooo/Notebooks',
  },
  {
    title: 'Dashboards',
    description: 'Repositorio dedicado a la gestión de paneles de Power BI.',
    tags: ['Power BI', 'Dashboards', 'Data Visualization'],
    image: 'dashboard.gif',
    codeLink: 'https://github.com/josecitooo/Dashboards',
  },
];

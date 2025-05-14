import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Database, Server, PieChart, Layers, Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Análisis de Datos',
      icon: <BarChart className="w-6 h-6 text-blue-600" />,
      skills: ['Excel', 'Power BI', 'Tableau', 'Google Data Studio', 'SQL', 'Estadística']
    },
    {
      title: 'Ciencia de Datos',
      icon: <PieChart className="w-6 h-6 text-purple-600" />,
      skills: ['Python', 'R', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn']
    },
    {
      title: 'Bases de Datos',
      icon: <Database className="w-6 h-6 text-green-600" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'BigQuery', 'Firebase', 'Redis']
    },
    {
      title: 'Machine Learning',
      icon: <Server className="w-6 h-6 text-orange-600" />,
      skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'Modelos Predictivos', 'NLP']
    },
    {
      title: 'Herramientas y Metodologías',
      icon: <Layers className="w-6 h-6 text-indigo-600" />,
      skills: ['Git', 'Jupyter Notebook', 'Google Colab', 'Docker', 'Agile', 'Scrum']
    },
    {
      title: 'Lenguajes de Programación',
      icon: <Code className="w-6 h-6 text-red-600" />,
      skills: ['Python', 'R', 'SQL', 'Bash', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
          Mis <span className="gradient-text">Habilidades</span>
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
          He adquirido un conjunto diverso de habilidades a lo largo de mi carrera como analista y científico de datos, permitiéndome transformar datos en conocimiento accionable.
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="skill-item"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
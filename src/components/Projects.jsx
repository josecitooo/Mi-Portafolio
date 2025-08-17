import dashboards from '../imagenes/dashboard.gif';
import notebooks from '../imagenes/notebook.gif';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
	{
		id: 1,
		title: 'Notebooks',
		description:
			'Repositorio dedicado al almacenamiento y gestion de Jupyter Notebooks',
		tags: ['Jupyter', 'Notebooks', 'Python', 'Data Science', 'R'],
		imageAlt: 'Notebooks de Jupyter',
		imageDesc:
			'Colección de Notebooks para análisis de datos y aprendizaje automático',
		imageSrc: notebooks,
		demoLink: 'Video en proceso...',
		codeLink: 'https://github.com/josecitooo/Notebooks',
	},
	{
		id: 2,
		title: 'Dashboards',
		description: 'Repositorio dedicado a la gestion de paneles de Power BI',
		tags: ['Power BI', 'Dashboards', 'Data Visualization'],
		imageAlt: 'Dashboards de Power BI',
		imageDesc: 'Colección de paneles interactivos para análisis de datos',
		imageSrc: dashboards,
		demoLink: 'Video en proceso...',
		codeLink: 'https://github.com/josecitooo/Dashboards',
	},
];

const Projects = () => {
	const [hoveredProject, setHoveredProject] = useState(null);

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
					Mis <span className="gradient-text">Proyectos</span>
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
				Estos son algunos de los proyectos en los que he trabajado. Cada uno
					representa un desafío único que me ha permitido crecer como analista en
					el mundo de los datos.
				</motion.p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
				{projectsData.map((project, index) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true, margin: '-100px' }}
						className="project-card bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
						onMouseEnter={() => setHoveredProject(project.id)}
						onMouseLeave={() => setHoveredProject(null)}
					>
						<div className="overflow-hidden h-48 rounded-t-xl">
							<img
								alt={project.imageAlt}
								className="w-full h-full object-cover object-center"
								src={project.imageSrc}
							/>
						</div>
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-600 mb-4">{project.description}</p>

							<div className="flex flex-wrap gap-2 mb-6">
								{project.tags.map((tag, i) => (
									<span
										key={i}
										className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
									>
										{tag}
									</span>
								))}
							</div>

							<div className="flex gap-4">
								<a
									href={project.demoLink}
									className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									<ExternalLink className="w-4 h-4" />
									<span>Demo</span>
								</a>
								<a
									href={project.codeLink}
									className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="w-4 h-4" />
									<span>Código</span>
								</a>
							</div>
						</div>
					</motion.div>
				))}
			</div>

			<motion.div
				className="text-center mt-12"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
				viewport={{ once: true }}
			>
				<a
					href="https://github.com/josecitooo"
					className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition-colors"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="w-5 h-5 mr-2" />
					<span>Ver más proyectos en GitHub</span>
				</a>
			</motion.div>
		</div>
	);
};

export default Projects;

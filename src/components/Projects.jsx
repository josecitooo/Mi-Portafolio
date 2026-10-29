import dashboards from '../imagenes/dashboard.gif';
import notebooks from '../imagenes/notebook.gif';
import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '@/data/portfolio';

const Projects = () => {
	return (
		<div className="container mx-auto px-4 md:px-6">
			<div className="section-heading">
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
				{projects.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						viewport={{ once: true, margin: '-100px' }}
						className="project-card"
					>
						<div className="overflow-hidden h-60 rounded-t-xl">
							<img
								alt={project.title}
								className="w-full h-full object-contain bg-gray-500"
								src={project.image === 'notebook.gif' ? notebooks : dashboards}
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
					className="button-secondary"
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

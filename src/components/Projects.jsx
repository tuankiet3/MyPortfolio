import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'MERN Stack E-Commerce Platform',
      description: 'A responsive online store with a comprehensive admin dashboard. Features real-time analytics and product management.',
      tech: ['ReactJS', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      links: [
        { name: 'Github', url: 'https://github.com/tuankiet3/E-Commerce_Strore' },
        { name: 'Live Demo', url: '#' } // Add live link if available
      ]
    },
    {
      title: 'CDIO-Dentist Booking System',
      description: 'Major CDIO project designing a backend for dental appointment bookings. Includes user authentication and patient profile management.',
      tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'Bcrypt'],
      links: [
        { name: 'Github', url: 'https://github.com/nguyenthikimhue2004/CDIO-Dentist-Backend' }
      ]
    },
    {
      title: 'HR Integration System',
      description: 'Backend application for HR management: employee data, salary processing, attendance, and automated emails.',
      tech: ['C#', 'ASP.NET Core', 'MySQL', 'SQL Server', 'OAuth 2.0'],
      links: [
        { name: 'Github', url: 'https://github.com/tuankiet3/Integration-System-Backend' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-3xl z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey in building scalable web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-800 rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/10"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-dark-700 text-primary-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-primary-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent-500 font-medium text-sm flex items-center gap-2 transition-colors duration-200"
                    >
                      {link.name} <span aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
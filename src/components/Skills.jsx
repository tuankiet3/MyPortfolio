import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        'ReactJS', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Vite'
      ]
    },
    {
      category: 'Backend',
      items: [
        'Node.js', 'Express.js', 'ASP.NET Core', 'RESTful APIs', 'JWT', 'OAuth 2.0'
      ]
    },
    {
      category: 'Database',
      items: [
        'MongoDB', 'MySQL', 'SQL Server'
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        'Git', 'Trello', 'Scrum', 'Postman', 'Figma (Basic)'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4"
          >
            My Tech Stack
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A versatile skillset bridging the gap between robust backend logic and engaging frontend interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-dark-800/80 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-dark-700/80 transition-all duration-300 border border-white/5 backdrop-blur-sm group"
            >
              <h3 className="text-xl font-bold text-primary-500 mb-6 group-hover:text-primary-400 transition-colors">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 hover:text-white transition-colors duration-200">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 shadow-sm shadow-accent-500/50"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 to-dark-800/80 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent mb-4"
          >
            Work Experience
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Gaining hands-on expertise in the software development lifecycle.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-primary-500 pl-8 ml-4 md:ml-0 relative"
          >
            <div className="absolute top-0 left-[-12px] w-6 h-6 bg-primary-500 rounded-full border-4 border-dark-900 transform translate-y-2"></div>
            
            <div className="bg-dark-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300">
              <span className="block text-accent-500 font-semibold mb-2 text-sm tracking-wide uppercase">July 2025 - September 2025</span>
              <h3 className="text-2xl font-bold text-white mb-2">Intern Backend (.NET/C#)</h3>
              <h4 className="text-xl text-primary-400 mb-6 font-medium">CSE Center - Duy Tan University</h4>
              
              <ul className="space-y-4 text-gray-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                  Developed small-scale projects using .NET MVC model and ASP.NET Core framework.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                  Built a product introduction chatbot based on product databases to enhance user interaction.
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-primary-500 rounded-full flex-shrink-0"></span>
                  Collaborated with team members using Trello and Scrum workflows.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
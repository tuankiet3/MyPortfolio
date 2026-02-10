import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-dark-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4"
          >
            Get In Touch
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready for a challenging internship? Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 text-gray-300 hover:text-primary-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-dark-800 rounded-full text-primary-500 border border-white/5 shadow-md">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Email</h3>
                <a href="mailto:vohtuankiet3004@gmail.com" className="text-primary-400 hover:text-accent-500">
                  vohtuankiet3004@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-primary-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-dark-800 rounded-full text-primary-500 border border-white/5 shadow-md">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Phone</h3>
                <a href="tel:0366383967" className="text-primary-400 hover:text-accent-500">
                  0366 383 967
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-primary-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-dark-800 rounded-full text-primary-500 border border-white/5 shadow-md">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white">Location</h3>
                <p className="text-gray-400">Danang, Vietnam</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://github.com/tuankiet3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-dark-800 rounded-full text-gray-400 hover:text-white hover:bg-dark-700 transition-all border border-white/5 shadow-md">
                <FaGithub size={24} />
              </a>
              {/* Add LinkedIn if available */}
              <a href="#" className="w-12 h-12 flex items-center justify-center bg-dark-800 rounded-full text-gray-400 hover:text-white hover:bg-dark-700 transition-all border border-white/5 shadow-md">
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form (Placeholder) */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
              <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
              <input type="email" id="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-500 transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
              <textarea id="message" rows="4" placeholder="How can I help you?" className="w-full px-4 py-3 bg-dark-800 border border-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-500 transition-all resize-none"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/30 font-bold py-3 text-lg rounded-lg transform hover:-translate-y-1 transition-all duration-300">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
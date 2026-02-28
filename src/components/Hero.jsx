import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-20 lg:pt-32 pb-16 lg:pb-32 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-accent-500/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-accent-500 font-semibold mb-4 tracking-wide">
            HI, I'M TUAN KIET 👋
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building Seamless <br />
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Software Engineering student based in Da Nang, Vietnam. Specialized in Backend Development with a passion for building scalable, high-performance systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projects" className="btn-primary bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/30 transform hover:-translate-y-1 transition-all duration-300 px-8 py-3 rounded-full text-lg font-semibold">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
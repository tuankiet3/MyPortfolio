import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { HiDownload } from 'react-icons/hi';

function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-dark-900 text-center py-8 border-t border-white/5 text-gray-400">
        <p>© {new Date().getFullYear()} Vo Huynh Tuan Kiet. All rights reserved.</p>
      </footer>

      {/* Fixed Download CV Button */}
      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Vo_Huynh_Tuan_Kiet_CV.pdf"
        title="Download CV"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 flex flex-col items-center justify-center gap-0.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/40 hover:shadow-xl hover:shadow-primary-500/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <HiDownload className="text-xl" />
        <span className="text-[10px] font-bold leading-none">CV</span>
      </a>
    </div>
  );
}

export default App;
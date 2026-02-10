import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-dark-900 text-center py-8 border-t border-white/5 text-gray-400">
        <p>© {new Date().getFullYear()} Vo Huynh Tuan Kiet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
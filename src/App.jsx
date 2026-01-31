import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './CustomCursor';
import Background3D from './Background3D';
const App = () => {
  return (
    <>
      <CustomCursor />
      <Background3D />
      <div className="bg-dark min-h-screen text-slate-200 selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
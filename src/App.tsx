import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIInsights from './components/AIInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Header />
      <ScrollProgress />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIInsights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
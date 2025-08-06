import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIInsights from './components/AIInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 dark:bg-navy-950 light:bg-premium-50">
      <Header />
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
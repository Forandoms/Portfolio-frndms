import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIInsights from './components/AIInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIPopup from './components/AIPopup';

function App() {
  const [showAIPopup, setShowAIPopup] = useState(false);
  const [hasUsedAI, setHasUsedAI] = useState(false);

  useEffect(() => {
    // Check if user has already used AI assistant
    const aiUsed = localStorage.getItem('aiAssistantUsed');
    if (aiUsed === 'true') {
      setHasUsedAI(true);
    }
  }, []);

  const handleAIPopupAccept = () => {
    setShowAIPopup(false);
    // Scroll to AI section
    const aiSection = document.getElementById('ai-insights');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAIPopupDismiss = () => {
    setShowAIPopup(false);
    // Mark as dismissed for this session
    localStorage.setItem('aiPopupDismissed', 'true');
  };

  const handleAIUsage = () => {
    // Mark that user has used AI assistant
    localStorage.setItem('aiAssistantUsed', 'true');
    setHasUsedAI(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIInsights onUsage={handleAIUsage} />
      <Contact />
      <Footer />
      
      {/* AI Popup - only show if user hasn't used AI and hasn't dismissed it */}
      {!hasUsedAI && !localStorage.getItem('aiPopupDismissed') && (
        <AIPopup 
          onAccept={handleAIPopupAccept}
          onDismiss={handleAIPopupDismiss}
        />
      )}
    </div>
  );
}

export default App;
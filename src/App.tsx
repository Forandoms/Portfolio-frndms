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
import AIChatBubble from './components/AIChatBubble';

function App() {
  const [hasUsedAI, setHasUsedAI] = useState(false);

  useEffect(() => {
    // Check if user has already used AI assistant
    const aiUsed = localStorage.getItem('aiAssistantUsed');
    if (aiUsed === 'true') {
      setHasUsedAI(true);
    }
  }, []);

  const handleAIPopupAccept = () => {
    // Mark as dismissed to prevent showing again
    localStorage.setItem('aiPopupDismissed', 'true');
    
    // Scroll to AI section with offset to account for header
    const aiSection = document.getElementById('ai-insights');
    if (aiSection) {
      const headerHeight = 100; // More accurate header height including padding
      const elementPosition = aiSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAIPopupDismiss = () => {
    // Mark as dismissed for this session
    localStorage.setItem('aiPopupDismissed', 'true');
  };

  const handleAIUsage = () => {
    // Mark that user has used AI assistant
    localStorage.setItem('aiAssistantUsed', 'true');
    setHasUsedAI(true);
  };

  const handleOpenAIChat = () => {
    // Scroll to AI section
    const aiSection = document.getElementById('ai-insights');
    if (aiSection) {
      const headerHeight = 100;
      const elementPosition = aiSection.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
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

      {/* AI Chat Bubble */}
      <AIChatBubble onOpenChat={handleOpenAIChat} />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = personalInfo.titles || [personalInfo.title];
  const currentTitle = titles[currentTitleIndex];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    if (!isDeleting && currentCharIndex < currentTitle.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentCharIndex + 1));
        setCurrentCharIndex(currentCharIndex + 1);
      }, typeSpeed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentTitle.length) {
      // Pause at the end
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentCharIndex - 1));
        setCurrentCharIndex(currentCharIndex - 1);
      }, deleteSpeed);

      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Move to next title
      const timeout = setTimeout(() => {
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
        setIsDeleting(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentTitle, isDeleting, currentTitleIndex, titles.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Eymen_Ali_Sahin_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800 transition-colors duration-300">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5"></div>
      
      <div className="text-center z-10 px-6 animate-fade-in-up">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-premium animate-fade-in-up transition-colors duration-300">
            {personalInfo.name}
          </h1>
          <div className="text-2xl md:text-3xl text-gold-600 dark:text-gold-400 mb-8 h-10 font-medium">
            {displayedText}
            <span className="animate-pulse text-gold-500 dark:text-gold-300">|</span>
          </div>
          <p className="text-xl text-gray-600 dark:text-premium-200 max-w-3xl mx-auto leading-relaxed font-premium animate-fade-in-up transition-colors duration-300">
            {personalInfo.bio}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 px-10 py-4 rounded-full font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-gold-500/25"
          >
            Projelerimi Gör
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gold-600 dark:border-gold-500 text-gold-600 dark:text-gold-400 px-10 py-4 rounded-full font-semibold hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 shadow-lg shadow-gold-500/10"
          >
            İletişime Geç
          </button>
          <button 
            onClick={downloadCV}
            className="border-2 border-gray-400 dark:border-premium-300 text-gray-700 dark:text-premium-200 px-10 py-4 rounded-full font-semibold hover:bg-gray-400 hover:text-white dark:hover:bg-premium-300 dark:hover:text-navy-900 transition-all duration-300 flex items-center gap-3 shadow-lg"
          >
            <Download size={20} />
            CV İndir
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-600 dark:text-gold-400 animate-bounce hover:text-gold-500 dark:hover:text-gold-300 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
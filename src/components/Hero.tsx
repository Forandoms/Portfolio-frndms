import React, { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = personalInfo.title;

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative dark:bg-gradient-to-br dark:from-navy-950 dark:via-navy-900 dark:to-navy-800 light:bg-gradient-to-br light:from-light-50 light:via-light-100 light:to-light-200">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 dark:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] light:bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233b82f6%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-gold-500/5 dark:via-transparent dark:to-gold-500/5 light:bg-gradient-to-br light:from-blue-500/5 light:via-transparent light:to-blue-500/5"></div>
      
      <div className="text-center z-10 px-6 animate-fade-in-up">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold dark:text-white light:text-light-900 mb-6 font-premium animate-fade-in-up">
            {personalInfo.name}
          </h1>
          <div className="text-2xl md:text-3xl dark:text-gold-400 light:text-blue-600 mb-8 h-10 font-medium">
            {displayedText}
            <span className="animate-pulse dark:text-gold-300 light:text-blue-500">|</span>
          </div>
          <p className="text-xl dark:text-premium-200 light:text-light-700 max-w-3xl mx-auto leading-relaxed font-premium animate-fade-in-up">
            {personalInfo.bio}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="dark:bg-gradient-to-r dark:from-gold-500 dark:to-gold-600 light:bg-gradient-to-r light:from-blue-500 light:to-blue-600 dark:text-navy-900 light:text-white px-10 py-4 rounded-full font-semibold dark:hover:from-gold-400 dark:hover:to-gold-500 light:hover:from-blue-400 light:hover:to-blue-500 transition-all duration-300 transform hover:scale-105 dark:shadow-2xl dark:shadow-gold-500/25 light:shadow-2xl light:shadow-blue-500/25"
          >
            Projelerimi Gör
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="dark:border-2 dark:border-gold-500 light:border-2 light:border-blue-500 dark:text-gold-400 light:text-blue-600 px-10 py-4 rounded-full font-semibold dark:hover:bg-gold-500 dark:hover:text-navy-900 light:hover:bg-blue-500 light:hover:text-white transition-all duration-300 dark:shadow-lg dark:shadow-gold-500/10 light:shadow-lg light:shadow-blue-500/10"
          >
            İletişime Geç
          </button>
          <button 
            onClick={downloadCV}
            className="dark:border-2 dark:border-premium-300 light:border-2 light:border-light-400 dark:text-premium-200 light:text-light-700 px-10 py-4 rounded-full font-semibold dark:hover:bg-premium-300 dark:hover:text-navy-900 light:hover:bg-light-400 light:hover:text-light-900 transition-all duration-300 flex items-center gap-3 shadow-lg"
          >
            <Download size={20} />
            CV İndir
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 dark:text-gold-400 light:text-blue-600 animate-bounce dark:hover:text-gold-300 light:hover:text-blue-700 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
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
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%223%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-gold-500/5"></div>
      
      <div className="text-center z-10 px-6 animate-fade-in-up">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-premium animate-fade-in-up">
            {personalInfo.name}
          </h1>
          <div className="text-2xl md:text-3xl text-gold-400 mb-8 h-10 font-medium">
            {displayedText}
            <span className="animate-pulse text-gold-300">|</span>
          </div>
          <p className="text-xl text-premium-200 max-w-3xl mx-auto leading-relaxed font-premium animate-fade-in-up">
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
            className="border-2 border-gold-500 text-gold-400 px-10 py-4 rounded-full font-semibold hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 shadow-lg shadow-gold-500/10"
          >
            İletişime Geç
          </button>
          <button 
            onClick={downloadCV}
            className="border-2 border-premium-300 text-premium-200 px-10 py-4 rounded-full font-semibold hover:bg-premium-300 hover:text-navy-900 transition-all duration-300 flex items-center gap-3 shadow-lg"
          >
            <Download size={20} />
            CV İndir
          </button>
        </div>
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gold-400 animate-bounce hover:text-gold-300 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
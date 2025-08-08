import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-2xl border-b border-gray-200 dark:border-gold-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-xl shadow-lg border-2 border-gold-500/30" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              Hakkımda
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              Yetenekler
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              Projeler
            </button>
            <button 
              onClick={() => scrollToSection('ai-insights')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              Sohbet Asistanı
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 font-medium"
            >
              İletişim
            </button>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 p-2 rounded-full hover:bg-gold-600/10 dark:hover:bg-gold-400/10">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 p-2 rounded-full hover:bg-gold-600/10 dark:hover:bg-gold-400/10">
              <Github size={20} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"
               className="text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 p-2 rounded-full hover:bg-gold-600/10 dark:hover:bg-gold-400/10">
              <Instagram size={20} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white p-2 rounded-lg hover:bg-gold-600/10 dark:hover:bg-gold-400/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 dark:bg-navy-800/95 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gold-500/20 shadow-2xl animate-fade-in-down">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                Hakkımda
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                Yetenekler
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                Projeler
              </button>
              <button onClick={() => scrollToSection('ai-insights')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                Sohbet Asistanı
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 dark:text-premium-200 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300 py-2">
                İletişim
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
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
        ? 'dark:bg-navy-900/95 light:bg-light-100/95 backdrop-blur-md shadow-2xl dark:border-b dark:border-gold-500/20 light:border-b light:border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-12 h-12 rounded-xl shadow-lg dark:border-2 dark:border-gold-500/30 light:border-2 light:border-blue-500/30" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Hakkımda
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Yetenekler
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Projeler
            </button>
            <button 
              onClick={() => scrollToSection('ai-insights')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              Sohbet Asistanı
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 font-medium"
            >
              İletişim
            </button>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 p-2 rounded-full dark:hover:bg-gold-400/10 light:hover:bg-blue-400/10">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"
               className="dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 p-2 rounded-full dark:hover:bg-gold-400/10 light:hover:bg-blue-400/10">
              <Instagram size={20} />
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="dark:text-white light:text-light-900 p-2 rounded-lg dark:hover:bg-gold-400/10 light:hover:bg-blue-400/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 dark:bg-navy-800/95 light:bg-light-200/95 backdrop-blur-md rounded-xl dark:border dark:border-gold-500/20 light:border light:border-blue-500/20 shadow-2xl animate-fade-in-down">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
                Hakkımda
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
                Yetenekler
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
                Projeler
              </button>
              <button onClick={() => scrollToSection('ai-insights')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
                Sohbet Asistanı
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left dark:text-premium-200 light:text-light-700 dark:hover:text-gold-400 light:hover:text-blue-600 transition-all duration-300 py-2">
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
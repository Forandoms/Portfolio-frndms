import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            {personalInfo.name.split(' ')[0]}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Hakkımda
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Yetenekler
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Projeler
            </button>
            <button 
              onClick={() => scrollToSection('ai-insights')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              Sohbet Asistanı
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
            >
              İletişim
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer"
               className="text-slate-300 hover:text-yellow-400 transition-colors duration-200">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800 rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-slate-300 hover:text-yellow-400">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-slate-300 hover:text-yellow-400">
                Hakkımda
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left text-slate-300 hover:text-yellow-400">
                Yetenekler
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-slate-300 hover:text-yellow-400">
                Projeler
              </button>
              <button onClick={() => scrollToSection('ai-insights')} className="text-left text-slate-300 hover:text-yellow-400">
                Sohbet Asistanı
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-slate-300 hover:text-yellow-400">
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
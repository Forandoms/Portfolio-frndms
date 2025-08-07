import React from 'react';
import { Heart, Linkedin, Instagram } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-900 light:bg-gray-100 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-400 light:text-gray-600 hover:text-yellow-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={personalInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 dark:text-slate-400 light:text-gray-600 hover:text-yellow-400 transition-colors duration-200"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          <div className="border-t border-slate-700 dark:border-slate-700 light:border-gray-300 pt-8 transition-colors duration-300">
            <p className="text-slate-400 dark:text-slate-400 light:text-gray-600 flex items-center justify-center space-x-2 transition-colors duration-300">
              <span>© {currentYear} {personalInfo.name}. Sevgiyle yapıldı</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>React & Tailwind CSS kullanılarak</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
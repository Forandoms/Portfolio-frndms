import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 text-gold-400 hover:text-gold-300 hover:bg-navy-700/50 transition-all duration-300 shadow-lg"
      title="Tema değiştir"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle; 
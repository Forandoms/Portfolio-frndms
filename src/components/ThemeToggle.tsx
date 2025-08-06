import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      // Varsayılan olarak dark mode
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full dark:bg-navy-800/50 light:bg-light-200/50 backdrop-blur-sm dark:border dark:border-gold-500/20 light:border light:border-blue-500/20 dark:text-gold-400 light:text-blue-600 dark:hover:text-gold-300 light:hover:text-blue-700 dark:hover:bg-navy-700/50 light:hover:bg-light-300/50 transition-all duration-300 shadow-lg"
      title={isDark ? 'Gündüz moduna geç' : 'Gece moduna geç'}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle; 
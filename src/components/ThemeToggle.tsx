import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde localStorage'dan tema tercihini al
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme); // Debug için
    
    if (savedTheme) {
      const isDarkTheme = savedTheme === 'dark';
      setIsDark(isDarkTheme);
      document.documentElement.classList.toggle('dark', isDarkTheme);
      document.documentElement.classList.toggle('light', !isDarkTheme);
      console.log('Theme loaded:', savedTheme); // Debug için
    } else {
      // Varsayılan olarak dark mode
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      console.log('Default dark theme set'); // Debug için
    }
  }, []);

  const toggleTheme = () => {
    console.log('Toggle clicked, current isDark:', isDark); // Debug için
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // CSS sınıflarını güncelle
    document.documentElement.classList.toggle('dark', newTheme);
    document.documentElement.classList.toggle('light', !newTheme);
    
    // localStorage'a kaydet
    const themeValue = newTheme ? 'dark' : 'light';
    localStorage.setItem('theme', themeValue);
    console.log('Theme changed to:', themeValue); // Debug için
    console.log('Current classes:', document.documentElement.classList.toString()); // Debug için
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-navy-800/50 backdrop-blur-sm border border-gold-500/20 text-gold-400 hover:text-gold-300 hover:bg-navy-700/50 transition-all duration-300 shadow-lg z-50"
      title="Tema değiştir"
      style={{ position: 'relative', zIndex: 1000 }}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle; 
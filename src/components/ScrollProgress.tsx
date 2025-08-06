import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Merdiven */}
        <div className="w-16 h-64 bg-gradient-to-b from-navy-800 to-navy-900 rounded-lg border border-gold-500/30 shadow-2xl">
          {/* Merdiven basamakları */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-2 bg-gold-500/30 rounded-full"
              style={{
                left: '8px',
                top: `${(i * 32) + 16}px`,
                transform: 'rotate(-15deg)',
              }}
            />
          ))}
          
          {/* Tırmanan adam */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out"
            style={{
              bottom: `${(scrollProgress / 100) * 224}px`,
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center">
              <TrendingUp size={16} className="text-navy-900" />
            </div>
          </div>
        </div>
        
        {/* Progress yüzdesi */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-gold-400 text-sm font-bold bg-navy-800 px-2 py-1 rounded-full border border-gold-500/30">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgress; 
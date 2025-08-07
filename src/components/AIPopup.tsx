import React, { useState, useEffect } from 'react';
import { Brain, X, MessageSquare } from 'lucide-react';

interface AIPopupProps {
  onAccept: () => void;
  onDismiss: () => void;
}

const AIPopup: React.FC<AIPopupProps> = ({ onAccept, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 30 seconds of page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-up">
      <div className="bg-gradient-to-br from-gold-500 to-gold-600 dark:from-gold-600 dark:to-gold-700 rounded-2xl p-6 shadow-2xl border border-gold-400/30 max-w-sm">
        {/* Close button */}
        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors duration-200"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-2">
              Yapay Zeka Asistanı
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Eymen'in becerileri ve projeleri hakkında sorular sorabilirsiniz. Yapay zeka asistanını kullanmak ister misiniz?
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={onAccept}
                className="bg-white text-gold-600 px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 flex items-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>Evet, Kullan</span>
              </button>
              
              <button
                onClick={onDismiss}
                className="text-white/80 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Belki Sonra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPopup;

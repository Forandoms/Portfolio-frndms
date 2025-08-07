import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Brain } from 'lucide-react';

interface AIChatBubbleProps {
  onOpenChat: () => void;
}

const AIChatBubble: React.FC<AIChatBubbleProps> = ({ onOpenChat }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the bubble
    const dismissed = localStorage.getItem('aiChatBubbleDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show bubble after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // Check if we're on AI section
  useEffect(() => {
    const checkIfOnAISection = () => {
      const aiSection = document.getElementById('ai-insights');
      if (aiSection) {
        const rect = aiSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          setIsVisible(false);
        } else if (!isDismissed) {
          setIsVisible(true);
        }
      }
    };

    // Check on scroll
    window.addEventListener('scroll', checkIfOnAISection);
    checkIfOnAISection(); // Initial check

    return () => window.removeEventListener('scroll', checkIfOnAISection);
  }, [isDismissed]);

  const handleDismiss = (permanent: boolean = false) => {
    setIsVisible(false);
    setIsExpanded(false);
    
    if (permanent) {
      setIsDismissed(true);
      localStorage.setItem('aiChatBubbleDismissed', 'true');
    }
  };

  const handleOpenChat = () => {
    onOpenChat();
    handleDismiss();
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {!isExpanded ? (
        // Collapsed bubble
        <div className="animate-slide-in-up">
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-white p-4 rounded-full shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-110"
          >
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6" />
              <span className="font-semibold">AI ile konuşmak ister misiniz?</span>
            </div>
          </button>
        </div>
      ) : (
        // Expanded bubble
        <div className="animate-slide-in-up">
          <div className="bg-white dark:bg-navy-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gold-500/20 max-w-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">AI Asistan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Eymen'in asistanı</p>
                </div>
              </div>
              <button
                onClick={() => handleDismiss()}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Eymen'in becerileri ve projeleri hakkında sorular sorabilirsiniz. Yapay zeka asistanını kullanmak ister misiniz?
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleOpenChat}
                className="w-full bg-gold-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-gold-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <MessageSquare size={18} />
                <span>Evet, Kullan</span>
              </button>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleDismiss()}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-navy-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
                >
                  Git
                </button>
                <button
                  onClick={() => handleDismiss(true)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-navy-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-200"
                >
                  İlgilenmiyorum
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBubble;

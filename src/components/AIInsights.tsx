import React, { useState, useRef, useEffect } from 'react';
import { Brain, Loader2, Send, MessageSquare } from 'lucide-react';
import { skills, projects } from '../data/portfolio';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIInsights: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // API key kontrolü - build sırasında gizle
  const getApiKey = () => {
    const envKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!envKey || envKey === 'your-gemini-api-key' || envKey.trim() === '') return '';
    return envKey;
  };

  const apiKey = getApiKey();
  const hasApiKey = apiKey && apiKey.length > 20;

  // Beceriler ve projeler temelinde bir sistem istemi oluştur
  const createSystemPrompt = () => {
    const skillsList = skills.map(skill => `${skill.name} (${skill.level}% yeterlilik)`).join(', ');
    const projectsList = projects.map(project => `${project.title}: ${project.description} (Teknolojiler: ${project.technologies.join(', ')})`).join('\n');
    
    return `Sen Eymen Ali Şahin için bir yapay zeka asistanısın. Eymen Elektrik-Elektronik Mühendisliği mezunu bir Full Stack Geliştiricidir.

Eymen'in becerileri şunları içerir: ${skillsList}

Eymen'in projeleri şunları içerir:\n${projectsList}\n

Sohbet kuralları:
1. Selam verildiğinde selam ver (Merhaba, Selam, Hi, Hello vb.)
2. "Naber", "Nasılsın" gibi sorulara "İyidir, teşekkürler" gibi kısa cevaplar ver
3. Eymen'in becerileri, projeleri ve teknolojileri hakkında detaylı bilgi ver
4. Konuyla alakasız sorular için kibarca yönlendir: "Bu konuda yardımcı olamam, Eymen'in profesyonel uzmanlığı hakkında soru sorabilirsiniz"
5. HER ZAMAN Türkçe dilinde cevap ver

Örnek cevaplar:
- "Selam" → "Merhaba! Size nasıl yardımcı olabilirim?"
- "Naber" → "İyidir, teşekkürler! Eymen'in projeleri hakkında soru sorabilirsiniz."
- "React nedir?" → "React, Eymen'in %90 seviyede uzman olduğu bir frontend kütüphanesidir..."`;
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || loading) return;
    
    if (!hasApiKey) {
      setError('Gemini API anahtarı yapılandırılmamış. Lütfen .env dosyasına VITE_GEMINI_API_KEY ekleyin.');
      return;
    }

    const userMessage: Message = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);
    setError('');

    try {
      const systemPrompt = createSystemPrompt();
      
      // Prepare conversation history
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.content }]
      }));
      
      // Add system prompt as the first message if there are no messages yet
      const contents = [
        { role: 'user', parts: [{ text: systemPrompt }] },
        ...conversationHistory,
        { role: 'user', parts: [{ text: inputValue }] }
      ];

      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': apiKey,
        },
        body: JSON.stringify({ contents })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.candidates[0]?.content?.parts[0]?.text || 'Özür dilerim, şu anda bir yanıt oluşturamadım.';
      
      const assistantMessage: Message = { role: 'assistant', content: aiResponse };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'AI yanıtı alınamadı');
    } finally {
      setLoading(false);
    }
  };

  // Auto-scroll to the bottom of messages only when a new message is added
  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      // Use a small timeout to ensure the DOM has updated before scrolling
      const timeoutId = setTimeout(() => {
        const parent = messagesEndRef.current?.parentElement?.parentElement;
        if (parent) {
          parent.scrollTop = parent.scrollHeight;
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [messages.length]);

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section id="ai-insights" className="py-20 bg-slate-900 dark:bg-slate-900 light:bg-gray-50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4 transition-colors duration-300">
            Sohbet Asistanı
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800 dark:bg-slate-800 light:bg-white rounded-2xl p-8 shadow-xl border border-gray-200 light:border-gray-200 dark:border-transparent transition-colors duration-300">
            <div className="text-center mb-8">
              <MessageSquare className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-4 transition-colors duration-300">
                Eymen'in Asistanı
              </h3>
              <p className="text-slate-300 dark:text-slate-300 light:text-gray-600 mb-6 transition-colors duration-300">
                Eymen'in becerileri ve projeleri hakkında sorular sorabilirsiniz
              </p>
            </div>

            {!hasApiKey && (
              <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 p-4 rounded-lg mb-6">
                <p className="font-semibold">AI Özelliği Devre Dışı:</p>
                <p>Gemini API anahtarı yapılandırılmamış. AI sohbet özelliğini kullanmak için .env dosyasına VITE_GEMINI_API_KEY ekleyin.</p>
              </div>
            )}

            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg mb-6">
                <p className="font-semibold">Hata:</p>
                <p>{error}</p>
              </div>
            )}

            <div className="bg-slate-700 dark:bg-slate-700 light:bg-gray-100 rounded-lg mb-4 p-4 h-96 overflow-hidden transition-colors duration-300">
              <div className="h-full overflow-y-auto" style={{ position: 'relative', scrollBehavior: 'smooth' }}>
                {messages.length === 0 ? (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-slate-400 dark:text-slate-400 light:text-gray-500 text-center transition-colors duration-300">
                      {hasApiKey 
                        ? "Eymen'in becerileri, projeleri veya teknolojileri hakkında bir soru sorun"
                        : "AI özelliği şu anda kullanılamıyor"
                      }
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div 
                        key={index} 
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' 
                            ? 'bg-yellow-400 text-slate-900' 
                            : 'bg-slate-600 dark:bg-slate-600 light:bg-gray-200 text-white dark:text-white light:text-gray-900'}`}
                        >
                          <p className="whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} style={{ height: '1px', width: '100%' }} />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={hasApiKey ? "Bir soru sorun..." : "AI özelliği devre dışı"}
                className="flex-1 bg-slate-700 dark:bg-slate-700 light:bg-gray-100 text-white dark:text-white light:text-gray-900 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-colors duration-300"
                rows={2}
                disabled={loading || !hasApiKey}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !inputValue.trim() || !hasApiKey}
                className="bg-yellow-400 text-slate-900 p-3 rounded-lg hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInsights;
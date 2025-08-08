
import React from 'react';
import type { ChatMessage } from '../types';

interface ChatBubbleProps {
  message: ChatMessage;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isAi = message.sender === 'ai';
  const isUser = message.sender === 'user';
  const isSystem = message.sender === 'system';

  if (isSystem) {
    return (
      <div className="text-center my-2">
        <span className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">{message.text}</span>
      </div>
    );
  }

  const bubbleClasses = isAi
    ? 'bg-slate-700 text-white self-start rounded-br-none'
    : 'bg-sky-600 text-white self-end rounded-bl-none';
  
  const wrapperClasses = isUser ? 'justify-end' : 'justify-start';
  const authorName = isAi ? 'Yapay Zeka' : 'Sen';
  const authorClass = isUser ? 'text-right' : 'text-left';

  return (
    <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
        <span className={`text-xs text-slate-400 mb-1 px-2 ${authorClass}`}>{authorName}</span>
        <div className={`flex w-full ${wrapperClasses} animate-fade-in`}>
          <div className={`p-4 rounded-2xl max-w-lg lg:max-w-xl shadow-md ${bubbleClasses}`}>
            {message.text}
          </div>
        </div>
    </div>
  );
};

export default ChatBubble;

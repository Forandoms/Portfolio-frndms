
import React, { forwardRef } from 'react';
import type { ChatMessage } from '../types';
import ChatBubble from './ChatBubble';

interface ChatHistoryProps {
  history: ChatMessage[];
}

const ChatHistory = forwardRef<HTMLDivElement, ChatHistoryProps>(({ history }, ref) => {
  return (
    <div ref={ref} className="flex-grow overflow-y-auto p-4 bg-slate-800 rounded-lg shadow-inner mb-4 space-y-4">
      {history.length === 0 && (
        <div className="flex items-center justify-center h-full">
            <p className="text-slate-500 text-center">Aklından bir karakter, kişi veya nesne tut ve oyuna başla!</p>
        </div>
      )}
      {history.map((msg) => (
        <ChatBubble key={msg.id} message={msg} />
      ))}
    </div>
  );
});

ChatHistory.displayName = 'ChatHistory';
export default ChatHistory;

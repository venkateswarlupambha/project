
import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '@/types/chatbot';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
      <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
          message.isBot 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
            : 'bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300'
        }`}>
          {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
        </div>

        {/* Message Bubble */}
        <div className="flex flex-col">
          <div className={`px-4 py-2 rounded-2xl ${
            message.isBot
              ? 'bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-200 dark:border-slate-600'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
          }`}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
          </div>
          <span className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
            message.isBot ? 'text-left' : 'text-right'
          }`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    </div>
  );
};

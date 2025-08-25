
import React from 'react';
import { Bot, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatMessage } from './ChatMessage';
import { SuggestionCard } from './SuggestionCard';
import { WhatsAppRedirect } from './WhatsAppRedirect';
import { chatbotData } from '@/data/chatbotData';
import { Message } from '@/types/chatbot';

interface ChatWindowProps {
  messages: Message[];
  inputValue: string;
  setInputValue: (value: string) => void;
  showSuggestions: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  onSuggestionClick: (question: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onResetChat: () => void;
}

export const ChatWindow = ({
  messages,
  inputValue,
  setInputValue,
  showSuggestions,
  messagesEndRef,
  onSuggestionClick,
  onSendMessage,
  onKeyPress,
  onResetChat
}: ChatWindowProps) => {
  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-[400px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 z-50 flex flex-col animate-scale-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold">Onward Assistant</h3>
            <p className="text-xs text-blue-100">Always here to help</p>
          </div>
        </div>
        <Button
          onClick={onResetChat}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 text-xs"
        >
          Reset
        </Button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-800">
        {messages.map((message) => (
          <div key={message.id}>
            <ChatMessage message={message} />
            {message.showWhatsApp && (
              <div className="mt-2">
                <WhatsAppRedirect />
              </div>
            )}
          </div>
        ))}
        
        {/* Suggestions */}
        {showSuggestions && (
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Quick questions:
            </p>
            <div className="grid gap-2">
              {chatbotData.slice(0, 4).map((item, index) => (
                <SuggestionCard
                  key={index}
                  question={item.question}
                  onClick={() => onSuggestionClick(item.question)}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-b-2xl">
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder="Type your question..."
            className="flex-1 border-gray-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
          />
          <Button
            onClick={onSendMessage}
            disabled={!inputValue.trim()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

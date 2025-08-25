
import React, { useState } from 'react';
import { ChatbotToggle } from './ChatbotToggle';
import { ChatWindow } from './ChatWindow';
import { useChatbot } from '@/hooks/useChatbot';

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatbotProps = useChatbot();

  return (
    <>
      <ChatbotToggle 
        isOpen={isOpen} 
        onToggle={() => setIsOpen(!isOpen)} 
      />
      
      {isOpen && (
        <ChatWindow 
          {...chatbotProps}
          onSuggestionClick={chatbotProps.handleSuggestionClick}
          onSendMessage={chatbotProps.handleSendMessage}
          onKeyPress={chatbotProps.handleKeyPress}
          onResetChat={chatbotProps.resetChat}
        />
      )}
    </>
  );
};

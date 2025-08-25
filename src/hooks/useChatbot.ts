
import { useState, useRef, useEffect } from 'react';
import { Message } from '@/types/chatbot';
import { chatbotData } from '@/data/chatbotData';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about Onward Careers. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
      showWhatsApp: false
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (question: string) => {
    const answer = chatbotData.find(item => item.question === question)?.answer || 
                  "I'm sorry, I couldn't find an answer to that question. Please contact our support team.";
    
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date(),
      showWhatsApp: false
    };

    const botMessage: Message = {
      id: messages.length + 2,
      text: answer,
      isBot: true,
      timestamp: new Date(),
      showWhatsApp: false
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setShowSuggestions(false);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
      showWhatsApp: false
    };

    const matchedItem = chatbotData.find(item => 
      item.question.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.keywords.some(keyword => inputValue.toLowerCase().includes(keyword.toLowerCase()))
    );

    let botResponse;
    let showWhatsApp = false;

    if (matchedItem) {
      botResponse = matchedItem.answer;
    } else {
      botResponse = "I'm sorry, I don't have a specific answer for that question. For personalized assistance, you can contact us directly on WhatsApp!";
      showWhatsApp = true;
    }

    const botMessage: Message = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date(),
      showWhatsApp
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue('');
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hello! I'm here to help you with any questions about Onward Careers. How can I assist you today?",
        isBot: true,
        timestamp: new Date(),
        showWhatsApp: false
      }
    ]);
    setShowSuggestions(true);
  };

  return {
    messages,
    inputValue,
    setInputValue,
    showSuggestions,
    messagesEndRef,
    handleSuggestionClick,
    handleSendMessage,
    handleKeyPress,
    resetChat
  };
};

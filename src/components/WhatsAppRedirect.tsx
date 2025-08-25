
import React from 'react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const WhatsAppRedirect = () => {
  const whatsappNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = "Hi! I have a question about Onward Careers services.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^\d]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-2">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-green-800 dark:text-green-200 text-sm">
            Need Personal Assistance?
          </h4>
          <p className="text-xs text-green-600 dark:text-green-300">
            Chat with us directly on WhatsApp
          </p>
        </div>
      </div>
      
      <Button
        onClick={handleWhatsAppClick}
        className="w-full bg-green-500 hover:bg-green-600 text-white text-sm py-2 h-auto"
        size="sm"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Contact on WhatsApp
        <ExternalLink className="w-3 h-3 ml-2" />
      </Button>
    </div>
  );
};

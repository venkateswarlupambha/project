import { useState, useEffect } from "react";
import { X, Gift, Sparkles, Clock, ArrowRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export const OfferAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show alert after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-4 right-4 sm:left-auto sm:right-4 z-50 animate-fade-in-up max-w-sm mx-auto sm:mx-0">
      <Alert className="bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-orange-500/90 border-0 backdrop-blur-md rounded-2xl shadow-2xl shadow-purple-500/30 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        {/* Animated sparkles */}
        <Sparkles className="absolute -top-2 -left-2 w-8 h-8 text-yellow-300 opacity-60 animate-pulse" />
        <Sparkles className="absolute -bottom-2 -right-2 w-6 h-6 text-yellow-300 opacity-40 animate-pulse delay-1000" />
        
        <div className="relative z-10">
          <AlertDescription className="text-white">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1 rounded-full">
                  <Gift className="w-4 h-4 text-yellow-300" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Exclusive Offer!
                </span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">
                🚀 <span className="font-bold">Free Resume Review</span> + <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-bold">20% OFF</span> your first service!
              </p>
              
              <div className="flex items-center text-xs bg-black/30 rounded-lg px-3 py-2">
                <Clock className="w-3 h-3 mr-1 text-yellow-300" />
                <span>Limited spots available this week</span>
              </div>
            </div>

            <Button 
              className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 font-bold py-2 rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                setIsVisible(false);
                window.open('https://calendly.com/onwardcareershelp/30min', '_blank');
              }}
            >
              Claim Your Offer
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};
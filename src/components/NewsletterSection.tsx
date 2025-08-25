import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const NewsletterSection = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'beehiiv_embed_subscribe') {
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 5000);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="py-12 md:py-20 px-0 relative overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-background" />
      <div className="absolute top-0 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-gradient-to-r from-orange-500/20 to-orange-400/20 text-orange-300 border-orange-500/30 mb-4 md:mb-6 text-xs md:text-sm">
            <Sparkles className="w-3 h-3 mr-1 text-yellow-400" />
            Weekly Career Insights
          </Badge>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            Complete Career Transformation
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join 5,000+ ambitious professionals receiving exclusive career strategies, industry insights, and actionable tips delivered every Wednesday.
          </p>

          <div className="relative max-w-2xl mx-auto">
            {/* Newsletter Container */}
            <div className="bg-gradient-to-br from-slate-800/80 via-slate-800/60 to-slate-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-600/50 shadow-lg md:shadow-2xl transition-all duration-300">
              {/* Beehiiv Embed */}
              <div className="mb-4 md:mb-6 relative">
                <iframe 
                  src="https://embeds.beehiiv.com/e62d142b-1a75-47d4-a825-f5afbed85668?slim=true" 
                  data-test-id="beehiiv-embed" 
                  height="52" 
                  frameBorder="0" 
                  scrolling="no" 
                  style={{ 
                    margin: 0, 
                    borderRadius: '12px', 
                    backgroundColor: 'transparent',
                    width: '100%'
                  }}
                  className="w-full rounded-xl"
                />
              </div>
              
              {/* Benefits Grid - Changed to flex column on mobile */}
              <div className="flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-300 bg-slate-700/50 rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Weekly career tips</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-slate-700/50 rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Industry insights</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-slate-700/50 rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Job search strategies</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-slate-700/50 rounded-lg px-3 py-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>

            {/* Confirmation Message */}
            {showConfirmation && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-green-500/50">
                <div className="text-center p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Welcome to the Journey! 🚀
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
                    You're now part of our exclusive community of career-focused professionals.
                  </p>
                  <p className="text-xs md:text-sm text-gray-400">
                    Check your inbox for a welcome email with your first career tip!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Trust Indicators - Flex column on mobile, row on larger screens */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span>5,000+ subscribers</span>
            </div>
            <div className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span>Weekly delivery</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span>Privacy protected</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Beehiiv Attribution Script */}
      <script 
        type="text/javascript" 
        async 
        src="https://embeds.beehiiv.com/attribution.js"
      />
    </section>
  );
};
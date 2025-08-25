import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Users, Check, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-16 md:pt-24 pb-12 md:pb-16 px-4 relative overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/30 to-slate-900/80 z-0" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges - Stack vertically on small screens */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 md:mb-6">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs md:text-sm w-fit mx-auto sm:mx-0">
              <Star className="w-3 h-3 mr-1" />
              #1 Career Services
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs md:text-sm w-fit mx-auto sm:mx-0">
              <Users className="w-3 h-3 mr-1" />
              1000+ Success Stories
            </Badge>
          </div>

          {/* Headline with responsive sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent leading-tight">
            Transform Your Career<br className="hidden sm:inline" /> Journey
          </h1>
          
          {/* Subheading with adjusted line height */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert resume writing, LinkedIn optimization, and personal branding services that get you noticed by top recruiters.
          </p>

          {/* Buttons - Stack vertically on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 md:mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-sm md:text-base px-6 py-4 md:px-8 md:py-5 group w-full sm:w-auto"
              onClick={() => window.open('https://calendly.com/onwardcareershelp/30min', '_blank')}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-sm md:text-base px-6 py-4 md:px-8 md:py-5 w-full sm:w-auto"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Stats - Single column on mobile, 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-slate-800/50 p-4 md:p-5 rounded-xl border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2 flex items-center justify-center gap-1">
                <span>1000+</span>
                <Check className="w-5 h-5 text-green-400 hidden sm:inline" />
              </div>
              <div className="text-sm md:text-base text-gray-400">Resumes Crafted</div>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-slate-800/50 p-4 md:p-5 rounded-xl border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1 md:mb-2">95%</div>
              <div className="text-sm md:text-base text-gray-400">Success Rate</div>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-slate-800/50 p-4 md:p-5 rounded-xl border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1 md:mb-2">24hr</div>
              <div className="text-sm md:text-base text-gray-400">Quick Turnaround</div>
            </div>
          </div>

          {/* Mobile-only scroll indicator */}
          <div className="mt-10 md:hidden animate-bounce">
            <ChevronDown className="w-6 h-6 mx-auto text-blue-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { ArrowRight, Clock, Sparkles, Star } from "lucide-react";

interface SeoHeroProps {
  handleOrderNow: () => void;
}

export const SeoHero = ({ handleOrderNow }: SeoHeroProps) => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent"></div>
      <div className="container mx-auto relative">
        <ServiceBreadcrumb serviceName="SEO Optimization" />

        <div className="text-center mb-16 animate-fade-in">
          <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-6 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Premium SEO Service
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            SEO <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Optimization</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Dominate search rankings and drive organic traffic with our comprehensive SEO strategies
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="bg-orange-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-500/30">
              <span className="text-3xl font-bold text-orange-400">Starting at $249</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-2" />
              <span>Results in 30-90 days</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleOrderNow}
              className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 border-2 border-orange-400/20 hover:border-orange-300/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Start SEO Optimization
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Button>
            
            <Button 
              variant="outline"
              className="group border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

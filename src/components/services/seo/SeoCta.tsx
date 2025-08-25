
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Sparkles } from "lucide-react";

interface SeoCtaProps {
  handleOrderNow: () => void;
}

export const SeoCta = ({ handleOrderNow }: SeoCtaProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <Card className="bg-gradient-to-r from-slate-800/50 to-orange-900/20 border-slate-700 max-w-4xl mx-auto backdrop-blur-sm">
          <CardContent className="p-12">
            <Search className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate Search Results?</h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Join hundreds of businesses that have boosted their online presence with our SEO expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleOrderNow}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105 border-2 border-orange-400/20 hover:border-orange-300/40"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Start SEO Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </Button>
              <Button 
                variant="outline"
                className="group border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/20 hover:border-orange-400 px-10 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

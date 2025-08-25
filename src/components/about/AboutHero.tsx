
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, Star } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 mt-16 text-white transition-colors duration-500">
      {/* Vivid Multicolor Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-[#4f83ff]/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-24 right-36 w-[350px] h-[280px] bg-[#c165f7]/30 rounded-full blur-3xl animate-pulse delay-300" />
        <div className="absolute bottom-4 left-1/6 w-[300px] h-[200px] bg-[#ffd6f2]/20 rounded-full blur-2xl animate-pulse delay-700" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[320px] bg-[#ff6bb1]/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        {/* Soft blue grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.022]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6 animate-fade-in">
            <Users className="w-3 h-3 mr-1" />
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6bb8ff] via-[#b98af9] to-[#ff98c2] bg-clip-text text-transparent animate-scale-in">
            About Onward Careers
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 animate-fade-in animation-delay-200">
            We are a team of dedicated career professionals, certified resume writers, and LinkedIn experts passionate about helping you achieve your career goals.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-blue-200 animate-fade-in animation-delay-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4" />
              <span>Trusted by 10,000+ professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

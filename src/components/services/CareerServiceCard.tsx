import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CareerServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    category: string;
    features: string[];
    route: string;
  };
}

export const CareerServiceCard = ({ service }: CareerServiceCardProps) => {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(service.route);
  };

  return (
    <div className="relative group w-full h-full">
      {/* Subtle glow backlight that only appears on hover */}
      <div
        className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-gradient-to-br from-blue-500 to-blue-600"
        style={{ filter: "blur(20px)" }}
      />
      
      <Card className="relative z-10 bg-slate-800/60 border-2 border-blue-500/50 group-hover:ring-2 group-hover:ring-blue-400/50 hover:shadow-blue-400/25 transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl h-full flex flex-col w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 transition-opacity" />
        
        <CardHeader className="relative p-4 md:p-6">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
              {service.category}
            </Badge>
          </div>
          
          <CardTitle className="text-white text-lg md:text-xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-gray-300 text-sm md:text-base">
            {service.description}
          </CardDescription>
          
          {/* Attractive elements instead of pricing */}
          <div className="text-center mt-3 md:mt-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-blue-400 font-semibold text-sm">Premium Service • Expert Guidance</span>
          </div>
        </CardHeader>
        
        <CardContent className="relative p-4 md:p-6 pt-0 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center text-xs md:text-sm text-gray-300">
                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={handleLearnMore}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 md:py-3 group-hover:scale-105 transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
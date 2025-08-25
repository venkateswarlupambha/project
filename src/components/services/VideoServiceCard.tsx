import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface VideoServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    duration: string;
    category: string;
    features: string[];
    route?: string;
  };
  onStartProject?: () => void;
}

export const VideoServiceCard = ({ service, onStartProject }: VideoServiceCardProps) => {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleStartProject = () => {
    if (service.route) {
      navigate(service.route);
    } else if (onStartProject) {
      onStartProject();
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="relative group w-full">
      {/* Subtle glow backlight that only appears on hover */}
      <div
        className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-gradient-to-br from-orange-500 to-orange-600"
        style={{ filter: "blur(20px)" }}
      />
      
      <Card className="relative z-10 bg-slate-800/60 border-2 border-orange-500/50 group-hover:ring-2 group-hover:ring-orange-400/50 hover:shadow-orange-400/25 transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl h-full flex flex-col w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-opacity" />
        
        <CardHeader className="relative p-4 md:p-6">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
              {service.category}
            </Badge>
          </div>
          
          <CardTitle className="text-white text-lg md:text-xl mb-2">{service.title}</CardTitle>
          <CardDescription className="text-gray-300 text-sm md:text-base">
            {service.description}
          </CardDescription>
          
          {/* Attractive Call-to-Action instead of pricing */}
          <div className="text-center mt-3 md:mt-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-orange-400 font-semibold text-sm">Premium Quality • Fast Delivery</span>
          </div>
        </CardHeader>
        
        <CardContent className="relative p-4 md:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 md:mb-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-center text-xs md:text-sm text-gray-300">
                <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-orange-400 mr-2 flex-shrink-0" />
                <span className="leading-tight">{feature}</span>
              </div>
            ))}
          </div>
          
          <Button 
            onClick={handleStartProject}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 md:py-3"
          >
            View Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
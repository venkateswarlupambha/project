import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LinkedInServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    features: string[];
    category: string;
    route?: string;
    icon: React.ComponentType<{ className?: string }>;
  };
}

export const LinkedInServiceCard = ({ service }: LinkedInServiceCardProps) => {
  const Icon = service.icon;
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (service.route) {
      navigate(service.route);
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="relative group w-full h-full">
      {/* Subtle glow backlight that only appears on hover */}
      <div
        className="absolute -inset-1 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300 bg-gradient-to-br from-purple-500 to-purple-600"
        style={{ filter: "blur(20px)" }}
      />
      
      <Card className="relative z-10 bg-slate-800/60 border-2 border-slate-700 group-hover:ring-2 group-hover:ring-purple-400/50 hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105 overflow-hidden shadow-xl h-full flex flex-col">
        <CardHeader className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
              <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
              {service.category}
            </Badge>
          </div>
          <CardTitle className="text-white text-lg md:text-xl mb-2">
            {service.title}
          </CardTitle>
          <CardDescription className="text-gray-300 text-sm md:text-base">
            {service.description}
          </CardDescription>
          
          {/* Added Premium Service text with stars */}
          <div className="text-center mt-3 md:mt-4">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-purple-400 font-semibold text-sm">Premium Service • Expert Guidance</span>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6 pt-0 flex-1 flex flex-col">
          <div className="flex-1">
            {/* Pricing section removed */}
            <ul className="space-y-2 mb-4 md:mb-6">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm md:text-base leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={handleGetStarted}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 group-hover:scale-105 transition-all"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
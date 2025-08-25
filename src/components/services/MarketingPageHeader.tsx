
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const MarketingPageHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30 mb-4">
        <Star className="w-3 h-3 mr-1" />
        Marketing Services
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Digital Marketing Solutions
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Comprehensive digital marketing services to grow your brand and reach your target audience
      </p>
    </div>
  );
};

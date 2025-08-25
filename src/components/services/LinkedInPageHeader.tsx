import { Badge } from "@/components/ui/badge";
import { Users, Star } from "lucide-react";

export const LinkedInPageHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16">
      <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-3 md:mb-4 text-xs md:text-sm">
        <Users className="w-3 h-3 mr-1" />
        LinkedIn Services
      </Badge>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
        LinkedIn Optimization Services
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Transform your LinkedIn presence into a powerful career advancement tool with our comprehensive optimization services
      </p>
      <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-sm md:text-base text-gray-400">Trusted by 500+ professionals</span>
      </div>
    </div>
  );
};
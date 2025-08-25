
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const DesignPageHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-4">
        <Star className="w-3 h-3 mr-1" />
        Design Services
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Creative Design Services
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Professional design services for personal and business branding needs
      </p>
    </div>
  );
};

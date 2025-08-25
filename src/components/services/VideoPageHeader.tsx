
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const VideoPageHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
        <Star className="w-3 h-3 mr-1" />
        Video Services
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Professional Video Editing
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Transform your raw footage into compelling, professional videos that engage and convert
      </p>
    </div>
  );
};

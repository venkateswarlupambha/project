
import { Badge } from "@/components/ui/badge";
import { Briefcase, Star } from "lucide-react";

export const CareerPageHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
        <Briefcase className="w-3 h-3 mr-1" />
        Career Services
      </Badge>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
        Professional Career Services
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Transform your career with our comprehensive suite of professional services designed to help you land your dream job
      </p>
      <div className="flex items-center justify-center gap-4 mt-8">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-gray-400">Trusted by 1000+ professionals</span>
      </div>
    </div>
  );
};

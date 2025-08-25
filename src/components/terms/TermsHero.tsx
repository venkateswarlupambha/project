
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

interface TermsHeroProps {
  lastUpdated: string;
}

export const TermsHero = ({ lastUpdated }: TermsHeroProps) => {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <Badge className="bg-white/20 text-white border-white/30 mb-4">
          <FileText className="w-3 h-3 mr-1" />
          Legal
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Terms & Policies
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
          Find the rules, policies, and guidelines that govern our services and your use of our platform.
        </p>
        <p className="text-sm text-blue-200 mt-4">Last updated: {lastUpdated}</p>
      </div>
    </section>
  );
};

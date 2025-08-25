
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, TrendingUp } from "lucide-react";

interface SeoBenefitsProps {
  benefits: string[];
}

export const SeoBenefits = ({ benefits }: SeoBenefitsProps) => {
  return (
    <section className="py-16 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our SEO Service?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get measurable results with our proven SEO strategies that have helped hundreds of businesses rank higher.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center">
                  <TrendingUp className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Average Results</h3>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-orange-400">+200%</div>
                    <div className="text-gray-300">Organic Traffic Increase</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

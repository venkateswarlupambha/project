
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DesignServiceCard } from "@/components/services/DesignServiceCard";
import { DesignPageHeader } from "@/components/services/DesignPageHeader";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { designServices } from "@/data/designServices";
import { getCategoryColor, getGradientColor } from "@/utils/designServiceStyles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Users, Zap, Award } from "lucide-react";

const DesignServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900/20 via-slate-900 to-emerald-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Creative Design" />

            <DesignPageHeader />

            {/* Why Design Matters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Professional Design Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Brand Recognition</h3>
                    <p className="text-gray-300">Professional design increases brand recognition by up to 80%</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Customer Trust</h3>
                    <p className="text-gray-300">Quality design builds credibility and customer trust instantly</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Conversion Boost</h3>
                    <p className="text-gray-300">Great design can increase conversion rates by 200%</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Design Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designServices.map((service) => (
                  <DesignServiceCard
                    key={service.id}
                    service={service}
                    getCategoryColor={getCategoryColor}
                    getGradientColor={getGradientColor}
                  />
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Design Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Brief & Discovery",
                    description: "Understanding your vision, brand, and design requirements"
                  },
                  {
                    step: "2",
                    title: "Concept Creation",
                    description: "Developing initial concepts and design directions"
                  },
                  {
                    step: "3",
                    title: "Design & Refinement",
                    description: "Creating polished designs with your feedback"
                  },
                  {
                    step: "4",
                    title: "Final Delivery",
                    description: "Delivering final files in all required formats"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Design Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Creative Excellence",
                    description: "Award-winning designers with proven track records",
                    icon: "🎨"
                  },
                  {
                    title: "Fast Turnaround",
                    description: "Most designs completed within 24-48 hours",
                    icon: "⚡"
                  },
                  {
                    title: "Unlimited Revisions",
                    description: "We refine until you're completely satisfied",
                    icon: "🔄"
                  },
                  {
                    title: "Multiple Formats",
                    description: "Designs delivered in all required file formats",
                    icon: "📁"
                  },
                  {
                    title: "Brand Consistency",
                    description: "Maintaining your brand identity across all designs",
                    icon: "🎯"
                  },
                  {
                    title: "Affordable Pricing",
                    description: "Professional quality at competitive rates",
                    icon: "💰"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default DesignServices;


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Newspaper, Mail, Palette, BarChart, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewsletterDesign = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-slate-900 to-pink-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Newsletter Design & Delivery" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Design Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Newsletter Design & Delivery
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Beautiful newsletters with professional delivery management to engage your audience
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-purple-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Custom Design", description: "Professionally designed newsletters that match your brand", icon: Palette },
                  { title: "Template Creation", description: "Reusable templates for consistent branding", icon: Newspaper },
                  { title: "Delivery Setup", description: "Complete email delivery system configuration", icon: Mail },
                  { title: "Performance Tracking", description: "Analytics and reporting on newsletter performance", icon: BarChart }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Newsletter Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    type: "Company Updates",
                    description: "Internal communications and announcements",
                    features: ["Employee highlights", "Company news", "Policy updates", "Event announcements"]
                  },
                  {
                    type: "Marketing Campaigns",
                    description: "Promotional newsletters for customers",
                    features: ["Product launches", "Special offers", "Customer stories", "Industry insights"]
                  },
                  {
                    type: "Educational Content",
                    description: "Knowledge-sharing newsletters",
                    features: ["How-to guides", "Industry trends", "Expert interviews", "Resource roundups"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.type}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Content Planning", description: "Define newsletter goals and content structure" },
                  { step: "2", title: "Design Creation", description: "Create beautiful, branded newsletter templates" },
                  { step: "3", title: "Delivery Setup", description: "Configure email systems and automation" },
                  { step: "4", title: "Launch & Track", description: "Deploy newsletters and monitor performance" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Newsletter?</h3>
                  <p className="text-gray-300 mb-6">
                    Get professionally designed newsletters that engage your audience and drive results
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Start Your Newsletter Project
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NewsletterDesign;


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, BarChart, Target, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailCampaigns = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900/20 via-slate-900 to-red-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Email Marketing Campaigns" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Campaign Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Email Marketing Campaigns
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Professional email campaigns using Mailchimp, Brevo, and other leading platforms
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-orange-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Services Included */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Campaign Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Campaign Design", description: "Beautiful, responsive email templates that convert", icon: Mail },
                  { title: "List Management", description: "Professional contact segmentation and list hygiene", icon: Target },
                  { title: "A/B Testing", description: "Test subject lines, content, and send times for optimal results", icon: BarChart },
                  { title: "Performance Analytics", description: "Detailed reports on open rates, clicks, and conversions", icon: CheckCircle }
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mr-4">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        </div>
                        <p className="text-gray-300">{service.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Platform Support */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Supported Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { platform: "Mailchimp", features: ["Advanced automation", "Detailed analytics", "Template library"] },
                  { platform: "Brevo", features: ["SMS integration", "CRM features", "Event tracking"] },
                  { platform: "ConvertKit", features: ["Creator-focused", "Landing pages", "Course integration"] },
                  { platform: "Constant Contact", features: ["Event management", "Social campaigns", "Surveys"] }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.platform}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-orange-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Campaign Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Campaign Types We Create</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Welcome Series",
                    description: "Automated onboarding sequences for new subscribers",
                    examples: ["Welcome email", "Product introduction", "Company story", "First purchase incentive"]
                  },
                  {
                    title: "Promotional Campaigns",
                    description: "Drive sales with compelling promotional emails",
                    examples: ["Product launches", "Seasonal sales", "Limited offers", "Abandoned cart recovery"]
                  },
                  {
                    title: "Nurture Sequences",
                    description: "Build relationships and drive long-term engagement",
                    examples: ["Educational content", "Customer stories", "Industry insights", "Re-engagement campaigns"]
                  }
                ].map((type, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{type.title}</CardTitle>
                      <p className="text-gray-300">{type.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                            {example}
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Campaign Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Strategy Development", description: "Define goals, audience, and campaign objectives" },
                  { step: "2", title: "Content Creation", description: "Design compelling emails with strong calls-to-action" },
                  { step: "3", title: "Testing & Optimization", description: "A/B test elements for maximum performance" },
                  { step: "4", title: "Launch & Monitor", description: "Deploy campaigns and track performance metrics" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Email Campaigns?</h3>
                  <p className="text-gray-300 mb-6">
                    Drive engagement and conversions with professional email marketing campaigns
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Start Email Marketing
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

export default EmailCampaigns;

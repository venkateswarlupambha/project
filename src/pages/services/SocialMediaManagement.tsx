
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Calendar, BarChart, Target, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SocialMediaManagement = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Social Media Management" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Management Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Social Media Management
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Complete management for Instagram, LinkedIn, and Facebook to grow your brand presence
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-blue-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Content Creation", description: "Custom posts, graphics, and captions tailored to your brand" },
                  { title: "Daily Posting", description: "Consistent posting schedule across all platforms" },
                  { title: "Community Engagement", description: "Responding to comments and messages professionally" },
                  { title: "Analytics & Reporting", description: "Monthly performance reports with insights and recommendations" }
                ].map((feature, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
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
                  { step: "1", title: "Brand Discovery", description: "Understanding your brand voice and target audience" },
                  { step: "2", title: "Content Strategy", description: "Creating a comprehensive content calendar" },
                  { step: "3", title: "Daily Management", description: "Posting content and engaging with your audience" },
                  { step: "4", title: "Growth Optimization", description: "Analyzing performance and optimizing strategy" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Platforms We Manage */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Platforms We Manage</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { platform: "Instagram", features: ["Posts & Stories", "Reels Creation", "IGTV Videos", "Shopping Setup"] },
                  { platform: "LinkedIn", features: ["Professional Posts", "Company Updates", "Industry Insights", "Network Growth"] },
                  { platform: "Facebook", features: ["Page Management", "Event Promotion", "Community Building", "Ad Campaigns"] }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.platform}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <Target className="w-4 h-4 text-blue-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Card className="bg-slate-800/50 border-slate-700 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Grow Your Social Media Presence?</h3>
                  <p className="text-gray-300 mb-6">
                    Let our experts manage your social media while you focus on your business
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Start Your Social Media Journey
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

export default SocialMediaManagement;

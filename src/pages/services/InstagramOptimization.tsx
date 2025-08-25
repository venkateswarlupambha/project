
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Instagram, User, TrendingUp, Eye, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InstagramOptimization = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/20 via-slate-900 to-green-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Instagram Profile Optimization" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Optimization Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Instagram Profile Optimization
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Complete Instagram profile and content optimization to maximize your reach and engagement
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-emerald-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* What's Included */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Profile Setup", description: "Complete profile optimization with bio, contact info, and branding", icon: User },
                  { title: "Bio Optimization", description: "Compelling bio that converts visitors into followers", icon: Eye },
                  { title: "Highlight Covers", description: "Custom-designed story highlight covers for brand consistency", icon: Instagram },
                  { title: "Growth Strategy", description: "Personalized strategy for increasing followers and engagement", icon: TrendingUp }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mr-4">
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

            {/* Optimization Areas */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Optimization Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    area: "Profile Elements",
                    description: "Every aspect of your profile optimized",
                    features: ["Profile picture selection", "Username optimization", "Bio copywriting", "Contact button setup", "Link in bio optimization"]
                  },
                  {
                    area: "Visual Branding",
                    description: "Consistent visual identity across your profile",
                    features: ["Highlight cover design", "Story template creation", "Color scheme planning", "Font selection", "Brand style guide"]
                  },
                  {
                    area: "Content Strategy",
                    description: "Strategic approach to content and posting",
                    features: ["Content pillar planning", "Posting schedule optimization", "Hashtag strategy", "Engagement tactics", "Analytics setup"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.area}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Before & After Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Before & After</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-red-900/20 border-red-500/30">
                  <CardHeader>
                    <CardTitle className="text-red-400 text-xl">Before Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Generic bio with no clear value proposition",
                        "Inconsistent visual branding",
                        "Low engagement rates",
                        "Minimal follower growth",
                        "Unclear content strategy"
                      ].map((item, idx) => (
                        <li key={idx} className="text-gray-300">
                          ❌ {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-green-900/20 border-green-500/30">
                  <CardHeader>
                    <CardTitle className="text-green-400 text-xl">After Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {[
                        "Compelling bio that converts visitors",
                        "Professional, consistent branding",
                        "Increased engagement and reach",
                        "Steady, quality follower growth",
                        "Clear content strategy and goals"
                      ].map((item, idx) => (
                        <li key={idx} className="text-gray-300">
                          ✅ {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Profile Audit", description: "Comprehensive analysis of your current Instagram profile" },
                  { step: "2", title: "Strategy Development", description: "Creating a customized optimization strategy" },
                  { step: "3", title: "Implementation", description: "Applying all optimizations and improvements" },
                  { step: "4", title: "Growth Guidance", description: "Providing ongoing strategy and growth tips" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Instagram?</h3>
                  <p className="text-gray-300 mb-6">
                    Get a professionally optimized Instagram profile that attracts followers and drives engagement
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-emerald-500 to-green-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Optimize My Instagram
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

export default InstagramOptimization;

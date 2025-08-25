
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Image, Video, PenTool, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdCreatives = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900/20 via-slate-900 to-pink-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Ad Creatives (Image/Video)" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Advertising Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ad Creatives (Image/Video)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                High-converting ad creatives for all platforms that drive results and maximize your ROI
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-red-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Creative Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Create</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Image Ads", description: "Static image ads optimized for high conversion rates", icon: Image },
                  { title: "Video Ads", description: "Engaging video ads that capture attention and drive action", icon: Video },
                  { title: "Copy Writing", description: "Compelling ad copy that resonates with your target audience", icon: PenTool },
                  { title: "A/B Variants", description: "Multiple versions for testing to optimize performance", icon: Target }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mr-4">
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

            {/* Ad Packages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Creative Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    package: "Starter Package",
                    price: "$149",
                    description: "Perfect for small campaigns",
                    includes: ["3 image ads", "2 video ads", "Ad copy for all creatives", "1 revision round", "Basic A/B testing"]
                  },
                  {
                    package: "Professional Package",
                    price: "$299",
                    description: "Comprehensive ad creative solution",
                    includes: ["6 image ads", "4 video ads", "Multiple copy variations", "2 revision rounds", "Advanced A/B testing", "Performance analytics"]
                  },
                  {
                    package: "Enterprise Package",
                    price: "$499",
                    description: "Complete campaign creative suite",
                    includes: ["12 image ads", "8 video ads", "Custom copy strategy", "Unlimited revisions", "Multi-platform optimization", "Monthly performance reports", "Priority support"]
                  }
                ].map((pack, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{pack.package}</CardTitle>
                      <div className="text-2xl font-bold text-red-400">{pack.price}</div>
                      <p className="text-gray-300">{pack.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pack.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Supported Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Supported Platforms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { platform: "Facebook Ads", formats: ["Feed ads", "Story ads", "Carousel ads", "Video ads"] },
                  { platform: "Instagram Ads", formats: ["Feed ads", "Story ads", "Reels ads", "Shopping ads"] },
                  { platform: "Google Ads", formats: ["Display ads", "YouTube ads", "Search ads", "Shopping ads"] },
                  { platform: "LinkedIn Ads", formats: ["Sponsored content", "Message ads", "Dynamic ads", "Video ads"] }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.platform}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {item.formats.map((format, idx) => (
                          <li key={idx} className="text-gray-300 text-sm">
                            • {format}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Creative Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Creative Categories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    category: "E-commerce",
                    description: "Product-focused creatives for online stores",
                    examples: ["Product showcases", "Sale announcements", "Customer testimonials", "Lifestyle imagery"]
                  },
                  {
                    category: "Service-Based",
                    description: "Service promotion and lead generation",
                    examples: ["Service demonstrations", "Before/after results", "Client testimonials", "Process explanations"]
                  },
                  {
                    category: "Brand Awareness",
                    description: "Building brand recognition and trust",
                    examples: ["Brand storytelling", "Company culture", "Mission-driven content", "Community engagement"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.category}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-red-400 mr-2" />
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
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Campaign Brief", description: "Understanding your goals, audience, and brand" },
                  { step: "2", title: "Creative Strategy", description: "Developing concepts and messaging strategy" },
                  { step: "3", title: "Content Creation", description: "Designing and producing all ad creatives" },
                  { step: "4", title: "Testing & Optimization", description: "A/B testing and performance optimization" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Create High-Converting Ads?</h3>
                  <p className="text-gray-300 mb-6">
                    Get professionally designed ad creatives that drive results and maximize your advertising ROI
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Create My Ad Creatives
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

export default AdCreatives;

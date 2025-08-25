
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Settings, Search, TrendingUp, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const YouTubeSetup = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-900/20 via-slate-900 to-orange-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="YouTube Channel Setup & Optimization" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Setup Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                YouTube Channel Setup & Optimization
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Professional YouTube channel creation and optimization to grow your audience and increase views
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-yellow-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Services Included */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Channel Creation", description: "Complete YouTube channel setup with all essential elements", icon: Youtube },
                  { title: "Banner Design", description: "Professional channel banner design that represents your brand", icon: Settings },
                  { title: "SEO Optimization", description: "Channel and video SEO optimization for better discoverability", icon: Search },
                  { title: "Content Strategy", description: "Comprehensive content strategy to grow your audience", icon: TrendingUp }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
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

            {/* Channel Setup Components */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Channel Setup Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    component: "Channel Branding",
                    description: "Visual identity and branding elements",
                    features: ["Channel banner design", "Profile picture optimization", "Channel trailer script", "Brand color scheme", "Logo integration"]
                  },
                  {
                    component: "Channel Optimization",
                    description: "Technical setup and optimization",
                    features: ["Channel description writing", "Keyword research", "Channel tags setup", "Playlist organization", "End screen templates"]
                  },
                  {
                    component: "Content Planning",
                    description: "Strategic content approach",
                    features: ["Content calendar", "Video series planning", "Thumbnail strategy", "Upload schedule", "Engagement tactics"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.component}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* YouTube Growth Strategy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Growth Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    strategy: "Content Optimization",
                    description: "Maximize your content's reach and engagement",
                    tactics: ["SEO-optimized titles", "Compelling thumbnails", "Strategic descriptions", "Effective tags", "Engaging intros"]
                  },
                  {
                    strategy: "Audience Building",
                    description: "Grow a loyal, engaged subscriber base",
                    tactics: ["Community engagement", "Consistent posting", "Collaboration opportunities", "Cross-platform promotion", "Analytics tracking"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.strategy}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.tactics.map((tactic, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-yellow-400 mr-2" />
                            {tactic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Channel Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Channel Types We Setup</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { type: "Business", focus: "Corporate channels for brand awareness and lead generation" },
                  { type: "Educational", focus: "Tutorial and training channels for knowledge sharing" },
                  { type: "Entertainment", focus: "Content channels for audience engagement and growth" },
                  { type: "Personal Brand", focus: "Individual creator channels for personal branding" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-lg">{item.type}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">{item.focus}</p>
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
                  { step: "1", title: "Channel Analysis", description: "Understanding your goals and target audience" },
                  { step: "2", title: "Brand Development", description: "Creating visual branding and channel identity" },
                  { step: "3", title: "Technical Setup", description: "Complete channel setup and optimization" },
                  { step: "4", title: "Strategy Delivery", description: "Content strategy and growth plan delivery" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Launch Your YouTube Channel?</h3>
                  <p className="text-gray-300 mb-6">
                    Get a professionally setup YouTube channel that's optimized for growth and success
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Setup My YouTube Channel
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

export default YouTubeSetup;

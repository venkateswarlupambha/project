
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Hash, TrendingUp, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContentCalendar = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900/20 via-slate-900 to-blue-900/20">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Content Calendar (30/60 Days)" />

            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30 mb-4">
                <Star className="w-3 h-3 mr-1" />
                Strategy Service
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Content Calendar (30/60 Days)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Strategic content planning and scheduling to maintain consistent brand presence
              </p>
              <div className="text-center mb-8">
                <span className="text-3xl font-bold text-indigo-400">Stand Out Now</span>
              </div>
              <Button 
                onClick={handleOrderNow}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-3 text-lg"
              >
                Get Started Now
              </Button>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Content Strategy", description: "Comprehensive strategy aligned with your business goals", icon: Target },
                  { title: "Post Scheduling", description: "Optimized posting schedule for maximum engagement", icon: Calendar },
                  { title: "Theme Planning", description: "Monthly themes and campaigns for consistent messaging", icon: TrendingUp },
                  { title: "Hashtag Research", description: "Trending and relevant hashtags for better reach", icon: Hash }
                ].map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="bg-slate-800/50 border-slate-700">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mr-4">
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

            {/* Calendar Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Calendar Options</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    duration: "30-Day Calendar",
                    price: "$249",
                    description: "Perfect for testing new strategies",
                    features: ["30 days of content", "Weekly themes", "Basic hashtag research", "Platform optimization"]
                  },
                  {
                    duration: "60-Day Calendar",
                    price: "$399",
                    description: "Comprehensive planning for sustained growth",
                    features: ["60 days of content", "Monthly campaigns", "Advanced hashtag strategy", "Multi-platform coordination", "Performance tracking"]
                  }
                ].map((option, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{option.duration}</CardTitle>
                      <div className="text-2xl font-bold text-indigo-400">{option.price}</div>
                      <p className="text-gray-300">{option.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Content Types */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Types We Plan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    type: "Educational Posts",
                    description: "Informative content that adds value",
                    examples: ["How-to guides", "Industry tips", "Best practices", "Tutorials"]
                  },
                  {
                    type: "Promotional Content",
                    description: "Strategic promotion of products/services",
                    examples: ["Product showcases", "Special offers", "Success stories", "Testimonials"]
                  },
                  {
                    type: "Engagement Posts",
                    description: "Interactive content that builds community",
                    examples: ["Questions & polls", "Behind-the-scenes", "User-generated content", "Contests"]
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{item.type}</CardTitle>
                      <p className="text-gray-300">{item.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
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
                  { step: "1", title: "Brand Analysis", description: "Understanding your brand voice and audience" },
                  { step: "2", title: "Strategy Development", description: "Creating content themes and posting schedule" },
                  { step: "3", title: "Calendar Creation", description: "Detailed calendar with captions and hashtags" },
                  { step: "4", title: "Delivery & Support", description: "Calendar delivery with implementation guidance" }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Plan Your Content Strategy?</h3>
                  <p className="text-gray-300 mb-6">
                    Get a comprehensive content calendar that drives engagement and growth
                  </p>
                  <Button 
                    onClick={handleOrderNow}
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:opacity-90 text-white font-semibold px-8 py-3"
                  >
                    Start Your Content Calendar
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

export default ContentCalendar;

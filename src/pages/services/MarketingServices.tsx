
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/services/ServiceCard";
import { MarketingPageHeader } from "@/components/services/MarketingPageHeader";
import { ServiceBreadcrumb } from "@/components/services/ServiceBreadcrumb";
import { marketingServices } from "@/data/marketingServices";
import { getCategoryColor, getCategoryBadgeColor } from "@/utils/marketingServiceStyles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MarketingServices = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900/20 via-slate-900 to-purple-900/20 transition-colors duration-500">
      <Header />
      <div className="pt-16 sm:pt-20 lg:pt-24">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <ServiceBreadcrumb serviceName="Digital Marketing" />

            <MarketingPageHeader />

            {/* Why Digital Marketing Matters */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Digital Marketing Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Reach More Customers</h3>
                    <p className="text-gray-300">Digital marketing reaches 4.8 billion internet users worldwide</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Better ROI</h3>
                    <p className="text-gray-300">Digital marketing delivers 2.8x better revenue growth than traditional marketing</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <BarChart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Measurable Results</h3>
                    <p className="text-gray-300">Track every click, conversion, and customer interaction in real-time</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Marketing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketingServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    getCategoryColor={getCategoryColor}
                    getCategoryBadgeColor={getCategoryBadgeColor}
                    onGetStarted={handleGetStarted}
                  />
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Marketing Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "1",
                    title: "Strategy & Planning",
                    description: "Analyzing your market and creating a comprehensive marketing strategy"
                  },
                  {
                    step: "2",
                    title: "Content Creation",
                    description: "Developing engaging content that resonates with your target audience"
                  },
                  {
                    step: "3",
                    title: "Campaign Launch",
                    description: "Executing campaigns across multiple digital channels"
                  },
                  {
                    step: "4",
                    title: "Monitor & Optimize",
                    description: "Tracking performance and optimizing for better results"
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        E-commerce Growth
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Local Store → Online Success</h3>
                    <p className="text-gray-300 mb-4">
                      "Our social media management and email campaigns increased online sales by 400% in just 3 months!"
                    </p>
                    <div className="flex items-center text-pink-400">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">Grew from 0 to 50K social followers</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        B2B Lead Generation
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">SaaS Startup → Enterprise Clients</h3>
                    <p className="text-gray-300 mb-4">
                      "LinkedIn marketing and email campaigns helped us land Fortune 500 clients and scale rapidly."
                    </p>
                    <div className="flex items-center text-pink-400">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="text-sm">Generated 500+ qualified leads monthly</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Marketing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Data-Driven Approach",
                    description: "All strategies backed by analytics and market research",
                    icon: "📊"
                  },
                  {
                    title: "Multi-Channel Expertise",
                    description: "Comprehensive knowledge across all digital platforms",
                    icon: "🌐"
                  },
                  {
                    title: "Creative Content",
                    description: "Engaging content that drives action and conversions",
                    icon: "🎨"
                  },
                  {
                    title: "Transparent Reporting",
                    description: "Monthly reports with clear metrics and insights",
                    icon: "📈"
                  },
                  {
                    title: "Dedicated Support",
                    description: "Personal account manager for all your needs",
                    icon: "🤝"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Strategies that grow with your business",
                    icon: "🚀"
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

export default MarketingServices;
